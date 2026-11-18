#!/usr/bin/env node
/**
 * Repeats the reference searches of tests/make_mcts_reference.py with mcts.js and the same ONNX
 * models (through onnxruntime-web, as in the browser), and compares the visit counts of every root
 * move with those of the Python MCTS.
 *
 * The two network runtimes differ in the last bits of float32, and Python computes the PUCT score
 * partly in float32, so a near-tie can now and then go the other way; a search counts as matching
 * when every visit count is within 2% of the simulations of Python's.
 *
 * It also compares the outputs only the page shows: the probabilities of the endings the rules
 * allow, and the plies left (NetworkEvaluator.evaluateAll).
 *
 * Usage: (cd tests && npm install) && node tests/test_mcts.js [tests/reference/mcts.json]
 */
'use strict';

const fs = require('fs');
const path = require('path');
const ort = require('onnxruntime-web');
const Tafl = require('../tafl.js');
const { MCTS } = require('../mcts.js');
const { NetworkEvaluator, modelSearchSettings } = require('../network.js');

const REPO = path.join(__dirname, '..');
const file = process.argv[2] || path.join(__dirname, 'reference', 'mcts.json');

async function main() {
    ort.env.wasm.numThreads = 1;
    const cases = JSON.parse(fs.readFileSync(file, 'utf8'));
    const evaluators = {};
    let exact = 0, close = 0, failed = 0;
    for (const c of cases) {
        if (!evaluators[c.model]) {
            const info = JSON.parse(fs.readFileSync(path.join(REPO, c.model + '.json'), 'utf8'));
            const session = await ort.InferenceSession.create(fs.readFileSync(path.join(REPO, c.model + '.onnx')));
            evaluators[c.model] = { info, evaluator: new NetworkEvaluator(ort, session, info, { cacheSize: 0 }) };
        }
        const { info, evaluator } = evaluators[c.model];
        const game = new Tafl.TaflGame(c.rules);
        for (const m of c.moves) game.makeMove(m);

        const params = modelSearchSettings(info);
        const mcts = new MCTS(evaluator.evaluate, params);
        mcts.reset(game);
        while (mcts.root.N < c.sims) await mcts.simulate();
        // A tree reuse case: play the recorded moves, then search on from the kept subtree, whose
        // visits count toward the simulations
        const where = `${c.model} after ${c.moves.length} moves${c.reuse.length ? ` + ${c.reuse.length} (reused tree)` : ''}`;
        for (const m of c.reuse) game.makeMove(m);
        if (c.reuse.length > 0 && !mcts.moveRootTo(game)) {
            console.log(`FAIL ${where}: the searched position was not found in the tree`);
            failed++;
            continue;
        }
        while (mcts.root.N < c.sims) await mcts.simulate();
        const stats = mcts.stats();

        const all = await evaluator.evaluateAll(game, game.legalMoves());
        const endingDiff = Math.max(...all.ending.map(e => Math.abs(e.p - c.ending[e.ending])));
        if (all.ending.map(e => e.ending).join() !== Object.keys(c.ending).join() || !(endingDiff < 1e-4) ||
            !(Math.abs(all.movesLeft - c.moves_left) < 1e-3 * Math.max(1, c.moves_left))) {
            console.log(`FAIL ${where}: endings ${JSON.stringify(all.ending)} moves left ${all.movesLeft}, ` +
                `Python ${JSON.stringify(c.ending)} ${c.moves_left}`);
            failed++;
            continue;
        }
        if (stats.children.map(ch => ch.move).join(',') !== c.children.join(',')) {
            console.log(`FAIL ${where}: root moves differ`);
            failed++;
            continue;
        }
        const visits = stats.children.map(ch => ch.visits);
        const maxDiff = Math.max(...visits.map((v, i) => Math.abs(v - c.visits[i])));
        const priorDiff = Math.max(...stats.children.map((ch, i) => Math.abs(ch.prior - c.priors[i])));
        const valueDiff = Math.abs(stats.value - c.root_value);
        if (maxDiff === 0) exact++;
        else if (maxDiff <= 0.02 * c.sims) close++;
        else failed++;
        const verdict = maxDiff === 0 ? 'same' : maxDiff <= 0.02 * c.sims ? 'close' : 'FAIL';
        console.log(`${verdict.padEnd(5)} ${where}: max visit difference ${maxDiff}, ` +
            `max prior difference ${priorDiff.toExponential(1)}, root value ${stats.value.toFixed(4)} ` +
            `(Python ${c.root_value.toFixed(4)}, difference ${valueDiff.toExponential(1)}), ` +
            `${all.movesLeft.toFixed(1)} plies left, endings within ${endingDiff.toExponential(1)}`);
    }
    // With a repetition plane, the output cache must not hand a position's output to its next
    // occurrence: evaluate the start position, move both sides there and back, evaluate it again
    for (const [model, { info, evaluator }] of Object.entries(evaluators)) {
        if (!info.input.planes.includes('repetition')) continue;
        const cached = new NetworkEvaluator(ort, evaluator.session, info);
        const game = new Tafl.TaflGame(info.rules);
        const first = await cached.evaluate(game, game.legalMoves());
        const there = [];
        for (let i = 0; i < 2; i++) {
            there.push(game.legalMoves()[0]);
            game.makeMove(there[i]);
        }
        for (const m of there) game.makeMove(Tafl.encodeMove(Tafl.moveTo(m), Tafl.moveFrom(m)));
        const again = await cached.evaluate(game, game.legalMoves());
        const direct = (await evaluator.run(game)).value;
        const ok = game.repetitionCount() === 2 && Math.abs(again.value - direct) < 1e-6;
        if (!ok) failed++;
        console.log(`${ok ? 'ok  ' : 'FAIL'} output cache of ${model} with a repeated position: ` +
            `value ${again.value.toFixed(4)}, uncached ${direct.toFixed(4)}, first occurrence ${first.value.toFixed(4)}`);
    }
    // Tree reuse keeps the subtree of the same game state only: the same position, or one two plies
    // on; not a position before the root (as after taking a move back), nor the same board under
    // other rules
    {
        const uniform = async (game, moves) => ({ priors: moves.map(() => 1 / moves.length), value: 0 });
        const mcts = new MCTS(uniform);
        const start = new Tafl.TaflGame('brandubh_2');
        mcts.reset(start);
        for (let i = 0; i < 200; i++) await mcts.simulate();
        const later = start.clone();
        const [m1, m2] = mcts.stats().pv;  // the most visited line
        later.makeMove(m1);
        later.makeMove(m2);
        const checks = [
            mcts.moveRootTo(start) && mcts.root.N === 200,
            mcts.moveRootTo(later) && mcts.root.N > 0,
            !mcts.moveRootTo(start) && mcts.root.N === 0,
        ];
        for (let i = 0; i < 50; i++) await mcts.simulate();
        checks.push(!mcts.moveRootTo(new Tafl.TaflGame('brandubh_1')));  // the same start position
        const ok = checks.every(Boolean);
        if (!ok) failed++;
        console.log(`${ok ? 'ok  ' : 'FAIL'} tree reuse keeps the same game state only: ${checks}`);
    }
    console.log(`${cases.length} searches: ${exact} identical, ${close} within 2%, ${failed} different.`);
    process.exit(failed === 0 ? 0 : 1);
}

main().catch(e => { console.error(e); process.exit(1); });
