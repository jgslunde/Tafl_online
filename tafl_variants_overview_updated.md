# Tafl variants on 7x7, 9x9 and 11x11 boards

Common rules, how much they are played, how fair they are, and exact rules for the nine most-played variants. The rules of five of them are checked against almost 20,000 recorded games. October 2026.

## Short answer

| Board | Most played | Fairest measured |
|---|---|---|
| 7x7 | Brandubh. On aagenielsen.dk: Brandubh 2 (defenders win 62%) | Not settled. Walker's rules 55%; Brandubh 2.5W 59% (55% among top players) |
| 9x9 | Tablut. On aagenielsen.dk: Sámi Tablut | Sámi Tablut with defenders moving first: 49% |
| 11x11 | Copenhagen. Fetlar is still common in printed rules | Copenhagen among top players: 52%. Historical rules with defenders first: 51–52% |

## Top 3 per board

Ranked by recorded games on aagenielsen.dk, the only site that publishes counts. Shop sets and some apps use other rules. "Fair" means the defenders win close to 50%. The exact rules for all nine variants are in the [implementation reference](#implementation-reference).

### 7x7

| Variant | Games | What makes it different | Fair? |
|---|---|---|---|
| Brandubh 2 | 2,318 | The king wins in a corner. Two attackers capture him anywhere except on the throne, where four are needed. Corners and the empty throne can replace an enemy piece in a capture, but the throne never counts against the king. | No. Defenders win 62%, and 69% among top players. It tested at 52–54% in 2020, then drifted. |
| Walker's Brandub | 468 | Like Brandubh 2, but two attackers capture the king even on the throne. Only the corners help in captures, never the throne. | Roughly: 55% overall. Experts say the attackers win most games between strong players (one 10-game expert match ended 9–1). |
| Brandubh 2.5W (2026 draft) | 354 | Brandubh 2, but the defenders move first, and only the king may cross the throne. The attackers win when a position comes up for the fifth time. | Promising: 59% overall, 55% among top players. Still new. |

### 9x9

| Variant | Games | What makes it different | Fair? |
|---|---|---|---|
| Sámi Tablut | 3,900+ (all versions) | The king wins at any edge square, and he can help capture. Two attackers capture him; four are needed on the throne, three beside it. The reference version lets the defenders move first. | Yes, the most even variant tested: 49% with defenders first (966 games), 46% with attackers first. One strong player reported the attackers winning every strong game in 2025. The 2026 championship then used a new version in which attackers may not cross the throne: 54% so far (230 games). |
| Sea Battle 9x9 | 352 (Nielsen setup; about 500 with all setups) | The king (a cargo ship) cannot capture. Four attackers are needed to capture him. He wins at any edge square. There are no special squares. | Yes: 51%. |
| Market Hnefatafl | 222 | A beginner version of Sámi Tablut. No special squares, so two attackers capture the king anywhere, also on the centre square. The defenders move first. | Close: 46%. |

### 11x11

| Variant | Games | What makes it different | Fair? |
|---|---|---|---|
| Copenhagen | 13,640 | The king wins in a corner, or inside an unbreakable fort on the edge. Four attackers are needed (three beside the throne); he cannot be captured on the edge. Rows of pieces on the edge can be captured together (shieldwall). Repeating a position loses for the defenders. | Close to fair at the top: 58% overall, 52% among top players (1,418 games). The world championship rules. |
| Historical 11x11 (Tawlbwrdd) | 4,500+ (three setups) | Sámi Tablut rules on 11x11. Three setups are played: Lewis cross (championship), Bell, and Lewis cross without a throne ("Simple Tafl"). | Yes, with defenders first: 50–52%. With attackers first: 45–49%. |
| Fetlar | 1,564 | Copenhagen without the shieldwall and the edge fort. Repeating a position is a draw, so the defenders can force draws. | Favours the defenders: 59%. Copenhagen was made partly to remove these draws. |

## Basics

- In every tafl game, a king and his defenders start in the centre. Twice as many attackers surround them, usually starting at the edges. The defenders win if the king escapes. The attackers win if they capture the king.
- No complete medieval rules survive. Every rule set is a modern reconstruction. Only Tablut (9x9) has a near-complete old description, written by Linnaeus in 1732. Its first English translation (1811) had errors. Many modern rule sets were made to fix the problems these errors caused.
- Rules shared by almost all variants: all pieces move like a rook in chess. A piece is captured when an enemy move closes a sandwich on two opposite sides. Moving into a sandwich is safe. In most variants, only the king may stop on the centre square (the throne).
- In the tables, the attackers move first and the king can help capture, unless the table says otherwise.

**How fairness is measured.** "Defenders win" is the share of games won by the king's side. A draw counts as half a win. 50% is fair. For comparison, the same source gives roughly 52–56% White wins in chess. All figures come from human games on aagenielsen.dk, the home of the World Tafl Federation (WTF). It is the only large data set (table updated 27 September 2026). Only full pairs of games count, so each player has played both sides. The number in brackets is the number of games. It also shows how much a variant is played on that site. Below a few hundred games, treat the figure as rough. "Strong players" are rated above 1500, "top players" above 1900.

## The rules that change the balance

| Rule | Common options | Measured effect |
|---|---|---|
| King's goal | Any edge square, or a corner only | The edge is far easier. Same 11x11 rules: edge about 50%, corners 28%. |
| King capture | **Weak king:** 2 sides, like other pieces, but 4 on the throne and 3 beside it. **Strong king:** 4 sides. | A strong, armed king is normally paired with the corner goal. With the edge goal he would win too easily. |
| King can capture | Yes ("armed") or no ("unarmed") | An unarmed king makes the defenders weaker. |
| Throne | Hostile or not; may the king return; may others cross | The throne protects the king. Brandubh: 64% with a throne, 27% without (small test). |
| Corners | Only the king may stop there; usually hostile | Needed for corner goals. |
| First move | Attackers (most rules) or defenders | Sámi Tablut, 2022: 45% with attackers first, 52% with defenders first. |
| Starting setup | Many layouts, mainly on 11x11 | Tawlbwrdd tests: the setup alone gave results from 20% to 63%. |
| Board size | 7x7, 9x9, 11x11 | Small boards help the king. The same rules (weak king, corner goal) gave 28% on 11x11, 38% on 9x9 and 57% on 7x7. |
| Endless repeats | Draw, or a loss for the side that repeats | Most rule sets now make it a loss. On aagenielsen.dk, all 142 wins by repeats (27,550 games, 2010–2020) went to the attackers. |

**Words:** *Hostile* = an empty special square acts like an enemy piece in a sandwich. *Shieldwall* = a row of pieces on the edge can be captured together. *Exit fort* = the defenders win if the king touches the edge inside a fort that cannot be broken. *Encirclement* = the attackers win if they close a ring around all defenders.

## Four rule families (Walker, 2015)

| Family | King | Goal | Boards | Examples | How common |
|---|---|---|---|---|---|
| Modern | Strong, armed | Corner | Mostly 11x11 | The Viking Game (1981), Fetlar, Copenhagen | Most common in shops, on the web and in tournaments |
| Historical | Weak, armed | Edge (corner on 7x7) | 7x7, 9x9, 11x11 | Sámi Tablut, Tawlbwrdd, Brandubh | Growing; becoming the standard on 9x9 |
| Unarmed king | Strong, unarmed | Edge | 9x9, 11x11 | Imperial Contest (1855), York (1980), Sea Battle | Small; kept alive by Sea Battle |
| Single-step | Pieces move one square at a time | Edge or corner | 7x7, 9x9 | Papillon's Escape | Fading |

## 7x7

**Brandubh** (Irish; king + 4 v 8; the king wins in a corner) is the main 7x7 game. Brandubh 2 has the most games on aagenielsen.dk. **Ard Rí** (Scottish; king + 8 v 16) is rare and the least documented tafl game.

| Variant | Goal | King captured | Other rules | Used by | Defenders win |
|---|---|---|---|---|---|
| **Brandubh 2** (2020) | Corner | 2 sides; 4 on the throne | Hostile corners and empty throne | WTF rules sheet; most games on aagenielsen.dk | 62% (2,318); top players 69% (364) |
| Brandubh 1 (2015–2020) | Corner | Weak king | Sámi Tablut rules plus corners | aagenielsen.dk until 2020 (some games until 2021) | 57% (926) |
| Walker's Brandub (2011) | Corner | 2 sides everywhere, even on the throne | Throne not hostile | Walker's leaflets; Dragonheel's Lair; aagenielsen.dk since 2022 | 55% (468); 46% on Dragonheel's Lair (314) |
| Brandubh 2.5W (2026 draft) | Corner | As Brandubh 2 | Defenders first; only the king may cross the throne | New test on aagenielsen.dk | 59% (354); top players 55% (100) |
| Shop Brandubh | Corner | 4 sides, often unarmed | Varies | Many commercial sets | No data |
| Magpie (1999) | Corner | 4 sides; the edge counts as a side | King moves one square at a time | Rare | 51% (112) |
| Ard Rí | Edge | Varies | 25 pieces | Rare | Wikipedia says the defenders always win, but gives no proof. aagenielsen.dk tests a 13-piece version: 55% (192) |

**Fairest?** Not settled. Brandubh 2 favours the defenders, and more so among better players. It measured 52–54% in its 2019–2020 tests, so the result has drifted. Walker's rules (55%) and Brandubh 2.5W (59%; 55% among top players) are closer to even. But experts report that Walker's rules favour the attackers at the top: one 10-game expert match ended 9–1 for the attackers. Magpie is the closest to 50%, but on few games.

## 9x9

**Tablut** (Sámi; king + 8 v 16) is the 9x9 game. New translations of Linnaeus (2007–2013) showed a weak king and an edge goal. These historical rules are becoming the standard on 9x9, and Sámi Tablut is the main 9x9 game on aagenielsen.dk. Many older sets use a strong king and a corner goal instead.

| Variant | Goal | King captured | Other rules | Used by | Defenders win |
|---|---|---|---|---|---|
| **Sámi Tablut**, defenders first | Edge | Weak king | Hostile empty throne | WTF world championship 2022–2025 | 49% (966) |
| Sámi Tablut, attackers first | Edge | Weak king | Same | Walker's rules; older aagenielsen.dk default | 46% (about 2,700) |
| Sámi Tablut, 2026 version ("gulo") | Edge | Weak king | Defenders first; attackers may not cross the throne; the throne never counts against defenders | WTF world championship 2026; current aagenielsen.dk version | 54% (230) |
| Foteviken Tablut (1972) | Edge, but not through camps | 4 sides | Throne not hostile; the attackers' start squares ("camps") are closed | Swedish museums | About 61–62% (tests) |
| Ashton Tablut | Edge, but not through camps | Weak king | Defenders first; camps and throne closed | University of Bologna AI contest | 18% (86) |
| Corner Tablut | Corner | Weak king | Hostile corners | Expomedia museum exhibitions (1990s) | 38% (122) |
| Shop Tablut | Corner | 4 sides, often unarmed | Varies | Many commercial sets and game sites | No data |
| Sea Battle 9x9 (Nielsen setup) | Edge | 4 sides, unarmed | No special squares | aagenielsen.dk; same rule family as Imperial Contest (1855) | 51% (352) |
| Market Hnefatafl | Edge | 2 sides everywhere | No special squares; defenders first | Beginners and fairs | 46% (222) |

**Fairest?** Sámi Tablut with the defenders moving first: 49% over 966 games. This is the best-tested near-even result on any board. But one strong player reported that at the 2025 championship, the attackers won every game between strong players. The 2026 championship then switched to the "gulo" version, in which attackers may not cross the throne. It measures 54% so far, on 230 games.

## 11x11

King + 12 v 24. Two traditions meet here. The modern rules (strong king, corner goal) dominate play and tournaments. Copenhagen is by far the most played; Fetlar is still common in printed rules. The historical rules (weak king, edge goal) come from Tablut and from a Welsh text on **Tawlbwrdd** (1587). They are played as a second category.

| Variant | Goal | King captured | Other rules | Used by | Defenders win |
|---|---|---|---|---|---|
| **Copenhagen** (2012) | Corner, or exit fort | 4 sides; never on the edge | Hostile throne and corners; shieldwall; encirclement; endless repeats: defenders lose | WTF world championship since 2013 | 58% (13,640); top players 52% (1,418) |
| Fetlar (2007) | Corner | 4 sides; never on the edge | No shieldwall or exit fort; repeats are a draw | Fetlar championships; WTF 2011–2012; many printed rule sheets | 59% (1,564) |
| "Old Hnefatafl" | Corner | 4 sides; the edge and corners count as sides | Otherwise like Fetlar | Many websites | 53% (1,222); strong players 49% (556) |
| Historical, Lewis cross setup | Edge | Weak king | Defenders first | WTF historical round since 2023 | 52% (664) |
| Historical, Bell setup | Edge | Weak king | — | Earlier WTF historical rounds | 51% (314) with defenders first; 45% (1,753) with attackers first |
| Simple Tafl | Edge | Weak king | Lewis cross setup, no throne | Schober's Hnefatafl app; aagenielsen.dk | 50% (142) with defenders first; 46% (1,375) with attackers first |
| David Brown (1980) | Edge | 4 sides, unarmed | Throne not hostile | Similar to the York Archaeological Trust set (1980) | About 52% (test) |
| Skalk (1992) | Corner | Weak king | Hostile corners | Danish book, sold with sets | 28% (124) |
| Sea Battle 11x11 | Edge | 4 sides, unarmed | No special squares | WTF Sea Battle round | 45–57%, depending on setup |

Names differ between sites. For example, aagenielsen.dk first used "Welsh Tawlbwrdd" for the Bell setup, and now uses it for Simple Tafl. Not covered here: modern variants with extra piece types or jumps (Berserk, Tyr, Total Hnefatafl).

**Fairest?** Copenhagen favours the defenders among ordinary players (58%) but is close to fair among top players (52%). The historical rules with the defenders moving first are about as even (Lewis cross 52%, Bell 51%).

## General lessons

- A strong, armed king needs the corner goal. With the edge goal, the king must be weak (historical rules) or unarmed (Sea Battle). On 7x7 with the Brandubh setup, even a weak king needs the corner goal.
- Results drift as players learn. Brandubh 2 went from 52–54% in tests to 62%. Sámi Tablut with attackers first went from 50% in 2014 to 46%.
- Better players can move the result either way: towards 50% in Copenhagen, towards the defenders in Brandubh 2, and towards the attackers in Old Hnefatafl.
- As far as these sources show, no computer has worked out perfect play for any standard variant, not even Brandubh.
- The simplest way to make any variant fair: play two games and swap sides. The Brandubh 2 rules add: if each player wins once, the faster win counts.

## Implementation reference

This part defines the nine most-played variants exactly enough to program them. Part A holds the rules shared by all of them. Part B holds the two rules that only Copenhagen has. Part C has one card per variant. A card overrides Part A only where it says so. Part D shows how the rules were checked against recorded games.

Every rule carries a tag that says where it comes from:

- **[Text]** – the official rule text of that variant.
- **[Site]** – how aagenielsen.dk plays it, as confirmed in its forum. The win rates in this document come from games played this way.
- **[Ours]** – the sources are silent or unclear, so this document makes a choice. Change it if you prefer, but then win rates may differ.
- **[Checked]** – the game records of aagenielsen.dk show that the site plays the rule exactly as written. Other readings conflict with many recorded games (Part D). This tag comes on top of the tags above. Only Brandubh 2, Walker's Brandub, Brandubh 2.5W, Sámi Tablut and Copenhagen could be checked.

### Quick comparison

| Variant | Board | First move | King's goal | King can capture | King captured by | Throne | Corners |
|---|---|---|---|---|---|---|---|
| Brandubh 2 | 7x7 | Attackers | Corner | Yes | 2 (4 on throne) | Restricted; all may pass; see card | Restricted; hostile to all |
| Walker's Brandub | 7x7 | Attackers | Corner | Yes | 2 everywhere | Restricted; all may pass; never hostile | Restricted; hostile to all |
| Brandubh 2.5W | 7x7 | Defenders | Corner | Yes | 2 (4 on throne) | Only the king may stop or pass; see card | Restricted; hostile to all |
| Sámi Tablut | 9x9 | Defenders | Edge | Yes | 2 (4 on throne, 3 beside it) | Restricted; all may pass; see card | Ordinary squares |
| Sámi Tablut, 2026 version | 9x9 | Defenders | Edge | Yes | As Sámi Tablut | Restricted; attackers may not pass; hostile to attackers only | Ordinary squares |
| Sea Battle 9x9 | 9x9 | Attackers | Edge | No | 4 | None (ordinary square) | Ordinary squares |
| Market Hnefatafl | 9x9 | Defenders | Edge | Yes | 2 everywhere | None (ordinary square) | Ordinary squares |
| Copenhagen | 11x11 | Attackers | Corner, or exit fort | Yes | 4 (3 beside throne); never on the edge | Restricted; all may pass; see card | Restricted; hostile to all |
| Historical 11x11 | 11x11 | Defenders | Edge | Yes | 2 (4 on throne, 3 beside it) | As Sámi Tablut (Saami Tablut-w) | Ordinary squares |
| Fetlar | 11x11 | Attackers | Corner | Yes | 4 (3 beside throne); never on the edge | As Copenhagen | As Copenhagen |

### Part A. Rules shared by all nine variants

**A1. Board and words.**
- Columns are letters (a, b, c, …) from left to right. Rows are numbers (1, 2, 3, …) from bottom to top. Row 1 is at the bottom of every diagram.
- *Attackers* (Black) and *defenders* (White) are the two sides. The defenders' side has the *king* plus *soldiers*. All non-king pieces are soldiers.
- *Neighbours* of a square are the up to four squares directly above, below, left and right of it. Diagonal squares never matter in any rule.
- An *edge square* is any square in the first or last row or column. Corners are edge squares.
- *Throne* = the centre square. *Corners* = the four corner squares. In some variants these are *restricted* or *hostile* (see A3, A5).

**A2. Turns.** The sides take turns. A turn is exactly one move. Passing is not allowed. The first move is given on each card.

**A3. Movement.**
- A piece moves any number of empty squares in a straight line along its row or column, like a rook in chess.
- It may not jump over a piece, and it may not end on an occupied square.
- *Restricted* squares: only the king may end a move there. The card says whether other pieces may pass *through* an empty restricted square. A corner can never be passed through, because it is the end of a line.
- The king may always pass through a square he may stop on. On every card he may return to the throne after leaving it. **[Checked]**

**A4. Capturing soldiers (the sandwich).** After a piece P of side X moves to square s, check each of the four directions from s. Let n be the neighbour of s in that direction, and m the next square beyond n. The piece on n is captured when all of these hold:
1. n holds an enemy soldier (or the enemy king, but only where his card says he is "captured like a soldier" on that square);
2. m is on the board, and m either holds a piece of side X that may take part in captures (any soldier; the king only if the card says he can capture), or m is a square that is *hostile* to the piece on n (A5).

Notes:
- Only the moved piece P can close a capture. A piece that moves itself between two enemies, or between an enemy and a hostile square, is not captured.
- Captures in all four directions happen at the same time. All captured pieces are removed at once.
- The board edge never acts as an enemy piece. The only exception is the Copenhagen shieldwall (B1), which uses the edge differently.
- A king who can capture ("armed") may be either the moving piece or the waiting piece m.
- **[Checked]** With each card's settings, A4 (plus B1 in Copenhagen) gives exactly the captures recorded in over 830,000 moves. The only exception is one broken record (Part D).

**A5. Hostile squares.** A hostile square acts like an enemy piece at m in A4. Each card lists which squares are hostile, and to whom. Hostility applies only while the square is empty, unless the card says otherwise.

**A6. Capturing the king by surrounding.** "Captured by four" means: after an attackers' move, all four neighbours of the king hold attackers, and the attacker that just moved is one of them. "Captured by three beside the throne" means: the king stands on a neighbour of the empty throne, and attackers hold his other three neighbours, one of them being the attacker that just moved. Only attackers count, never hostile squares, unless the card says so. A king who moves himself into such a position is not captured.

**A7. Order of checks after every move.** Apply these in order. Stop at the first one that ends the game.
1. Remove captured pieces (A4, and B1 in Copenhagen).
2. If the king just moved onto a goal square (card), the defenders win.
3. If the king was captured (card, A6), the attackers win.
4. Copenhagen only, after a defenders' move: if the exit fort test (B2) passes, the defenders win.
5. After an attackers' move, in variants that use encirclement: if the encirclement test (A8) passes, the attackers win.
6. Repetition (A9).
7. If the side that must move next has no legal move, that side loses. End the game at once. **[Checked]** In the records this happened only to the defenders (108 games). In 4 of them the site did not end the game itself; the defenders then resigned or ran out of time.

**A8. Encirclement test.** This is the exact form of the rule "the attackers win if they surround the king and all remaining defenders". Start from every square that holds a defending piece (the king included); these squares count as reached. Spread to any neighbour square that does not hold an attacker. Empty squares, the throne and the corners all let the spread through. Repeat until nothing new is reached. If none of the reached squares is an edge square, the attackers win. A ring that uses the board edge does not count. A ring whose attackers touch only diagonally still blocks, because no piece moves diagonally. **[Ours; Checked]** This algorithm is our wording of the texts. Brandubh 2's text says the same thing in words ("without using the edges"). It gives all 199 encirclement wins in Copenhagen games since 2017. If diagonal contacts counted as gaps, 196 of them would not be wins. In Sámi Tablut, the site has applied the rule only since mid-2019; in 7 earlier games, play went on after a ring had closed.

**A9. Repetition.** A *position* is the placement of every piece plus which side moves next. Count every position that occurs, starting with the start position. When a move creates a position for the Nth time, the game ends at once with the result given on the card. N is 3 unless the card says otherwise. It does not matter which side made the move, or whether the earlier occurrences were in a row. **[Ours]** The official texts say "the player who causes the repetition loses" or "perpetual repetition is a loss for White". They give no way to decide who caused it, so this reference uses a plain count.

*How aagenielsen.dk differs.* **[Checked]** The result is the same: on the site, a repetition ending is always a win for the attackers, and no recorded game was drawn by repetition. But the site uses its own trigger. It mostly ends a game when the defenders keep bringing their own pieces back to the same squares, even while the attackers move different pieces. The trigger has changed over the years, and no simple rule reproduces it. The best one we found matches only about half of the site's repetition endings. For example, in Copenhagen since 2017 the site ended 104 games by repetition. The count above ends 13 of them on the same move and 27 earlier, and misses 64. It also ends 37 games that the site let continue; the attackers won 27 of those anyway. In the other checked variants, repetition endings are rare (at most 11 per variant). So the two triggers change win rates by less than 1 percentage point. Use the count above: it is exact and easy to test.

**A10. Draws.** Apart from the cases a card lists, a game is drawn only if both players agree. **[Ours]** The texts say a game is drawn "if it is not possible to end it, e.g. because both sides have too few pieces left", but give no test for this. **[Checked]** No rule ended any of the drawn games in the records, so all of them were agreed draws.

**A11. Two-game match (optional).** The Brandubh 2 and 2.5W texts score a match as two games with sides swapped. A player who wins both games wins the match. If each player wins one game, the player whose win took fewer moves wins the match. **[Ours]** Count all moves by both players in that game. If the counts are equal, the match is drawn.

### Part B. Rules used only in Copenhagen

**B1. Shieldwall capture.** This is an extra capture, checked after A4. After a piece P of side X moves to an edge square s:
1. Look along the edge line from s, in each of the two directions.
2. Let the *row* be the unbroken run of enemy pieces (side Y) that starts on the square next to s. The row must contain at least two pieces. The defenders' king may be part of a row.
3. The square just past the end of the row must hold a piece of side X, or be a corner square. If X is the defenders, the king may be this piece, and he may also be P itself. **[Text; Checked]**
4. Every piece in the row must have a piece of side X on its *front* square, the neighbour one step away from the edge. If X is the defenders, the king counts as a front piece. **[Ours; Checked]** The text says "an enemy taflman directly in front" and does not mention the king here. The site counts the king.
5. If all of this holds, every piece in the row is captured, except the king. The king is never captured by a shieldwall. **[Text; Checked]**

Notes:
- **[Text; Checked]** Only P, the piece that closes one end of the row, can trigger the capture: "pieces will be captured only if the move used to capture them is a flanking move". Moving a piece onto a front square does not trigger it.
- Hostile squares do not count as front pieces. A corner counts only as the far end of the row (step 3).
- A row of one piece is an ordinary capture under A4.
- **[Checked]** Copenhagen games since 2017 contain 398 moves with a shieldwall capture. Changing any one point above conflicts with 15 to 220 of them (Part D).

**B2. Exit fort test (defenders win).** **[Text]** "The defenders also win if the king has contact with the board edge, is able to move, and it is impossible for the attackers to break the fort." **[Ours]** The test below is our exact form of "impossible to break". A fort counts only if no wall piece can ever be captured, whatever the attackers do. A fort that holds only through good play does not count. The test may reject a few forts that truly cannot be broken, but it never accepts one that can be broken. Run it after every defenders' move:

1. The king must stand on an edge square.
2. Let R be the king's square plus every empty square the king could reach by single steps through empty squares. The throne counts as empty if it is empty. R must contain at least one square besides the king's, so the king can move.
3. No neighbour of any square in R may hold an attacker. Every on-board neighbour of R that is not itself in R is then a defending soldier. These soldiers are the *wall*.
4. Call a square *open* if it is on the board, is not in R, and does not hold a soldier that is still in the safe set S. Open squares are the ones an attacker or a hostile square might one day use. Empty corners and the empty throne outside R are open.
5. Start with S = every defending soldier on the board. Then repeat until nothing changes:
   - Remove a soldier from S if both of its neighbours on the same line (left and right, or up and down) are open.
   - For each unbroken run of two or more soldiers of S along one edge line: remove the whole run from S if every soldier in it has an open front square, and the squares just past both ends of the run are open. This covers shieldwalls.
6. The fort holds, and the defenders win, if every wall soldier is still in S.

**[Checked]** This test gives all 333 exit-fort wins in Copenhagen games since 2017, and no others. Without the "can never be captured" part (step 5), it would also have ended 61 games that the site let continue. Without the "king can move" part (step 2), it would have ended 41 such games.

### Part C. Variant cards

#### C1. Brandubh 2 (7x7)

| Rule | Value |
|---|---|
| Pieces | King + 4 defenders against 8 attackers |
| First move | Attackers **[Text]** |
| Restricted | Throne d4; corners a1, a7, g1, g7. Only the king may stop there. **[Text]** |
| Passing | Any piece may pass through the throne when it is empty. **[Text]** |
| Hostile | Corners: to every piece, the king included. Empty throne: to attackers and defenders, never to the king. **[Text]** |
| King can capture | Yes **[Text]** |
| King captured | On the throne: by four (A6). Anywhere else, beside the throne too: like a soldier (A4), between two attackers, or between an attacker and a corner. The throne never counts against the king. There is no three-attacker capture beside the throne. **[Text; Site test game 22 Sep 2020]** |
| Defenders win | The king ends a move on a corner. |
| Attackers win | King captured; encirclement test (A8). **[Text]** |
| Repetition | Third occurrence: attackers win. **[Text says the repeating player loses; Site: attackers win]** |
| No legal move | That side loses. **[Text]** |
| Match | Two games, A11. **[Text]** |
| Checked | Every rule above was checked in 2,499 games (Part D), except encirclement and the match rule: no recorded game used them. The site uses its own repetition trigger (A9). |

Start position **[Text; forum diagram; Checked]**:

```
    a b c d e f g
  7 x . . A . . x
  6 . . . A . . .
  5 . . . D . . .
  4 A A D K D A A
  3 . . . D . . .
  2 . . . A . . .
  1 x . . A . . x
```

- King (1): d4
- Defenders (4): c4, d3, d5, e4
- Attackers (8): a4, b4, d1, d2, d6, d7, f4, g4

#### C2. Walker's Brandub (7x7), as played on aagenielsen.dk

| Rule | Value |
|---|---|
| Pieces, first move, start position | As Brandubh 2 (attackers move first). **[Text]** |
| Restricted | Centre d4 and the four corners. Only the king may stop there. **[Text]** |
| Passing | Any piece may pass through the centre when it is empty. **[Text]** |
| Hostile | Corners: to every piece, the king included. The centre is never hostile, not even when empty. **[Text; Site]** |
| King can capture | Yes **[Text]** |
| King captured | Like a soldier everywhere, on and beside the centre too: between two attackers, or between an attacker and a corner. **[Text; Site]** |
| Defenders win | The king ends a move on a corner. |
| Attackers win | King captured; encirclement test (A8). **[Ours]** Walker's leaflet has no encirclement rule. The site built this variant on its Brandubh 2 rules (forum, Jan 2022), so we assume it is included. It rarely matters on 7x7: no recorded game ended this way, so the records cannot confirm it. |
| Repetition | Third occurrence: attackers win. **[Site, confirmed in the forum 26 Jan 2022]** Walker's leaflet makes it a draw instead. The site uses its own trigger (A9). |
| No legal move | That side loses. **[Site standard; Ours]** Walker's leaflet makes it a draw instead. No recorded game ended this way. |
| Checked | Movement, hostile squares, captures and king capture, in 500 games (Part D). |

The leaflet plays on the points of a 7x7 grid of lines. That is the same game as on 7x7 squares.

#### C3. Brandubh 2.5W (7x7, draft rules of February 2026)

| Rule | Value |
|---|---|
| Pieces | King + 4 defenders against 8 attackers |
| First move | Defenders **[Text]** |
| Restricted | Castle d4 and the four corners. Only the king may stop there **and only the king may pass through them**. **[Text; Checked]** In 500 recorded games no soldier crossed the castle. In Brandubh 2, soldiers cross the throne about 4 times in 10 games. |
| Hostile | Corners: to every piece, the king included. Empty castle: to attackers and defenders, never to the king. **[Text]** |
| King can capture | Yes **[Text]** |
| King captured | In the castle: by four (A6). Anywhere else, beside the castle too: like a soldier (A4), between two attackers, or between an attacker and a corner. **[Text]** |
| Defenders win | The king ends a move on a corner. |
| Attackers win | King captured; encirclement test (A8). **[Text, with our test]** The draft says "completely surround all remaining White pieces, forming an unbreakable barrier preventing the King from reaching any corner". |
| Repetition | **Fifth** occurrence: attackers win. **[Text]** No position came up five times in the records. In 5 games a position came up a third time and play went on, which fits the text. |
| No legal move | That side loses. **[Text]** |
| Match | Two games, A11. **[Text]** |
| Start position | As Brandubh 2. **[Checked]** The draft shows its start position only as a picture, but all 500 recorded games replay without error from this position. |
| Checked | Every rule above was checked in 500 games (Part D), except encirclement, repetition, no legal move and the match rule: no recorded game used them. |

#### C4. Sámi Tablut (9x9)

aagenielsen.dk plays three versions. They differ only in the first move and the throne. The second table gives the main version, Saami Tablut-w, and marks the changes in the 2026 version.

| Version (name on the site) | First move | Throne | Use |
|---|---|---|---|
| **Saami Tablut-w** ("Historical Hnefatafl 9x9 (Saami Tablut-w)") | Defenders | As in the table below | World championship 2022–2025 |
| Saami Tablut-s ("Saami Tablut-s 9x9") | Attackers | As in the table below | Older default, played until 2022; world championship 2020 |
| 2026 version, tested as "gulo" ("Historical Hnefatafl 9x9 (aka Saami Tablut)") | Defenders | Attackers may not pass through it. The empty throne is hostile to attackers only. | World championship 2026; the current site version |

| Rule | Value |
|---|---|
| Pieces | King + 8 defenders against 16 attackers |
| First move | Defenders **[Site; Checked]** Linnaeus does not say. Saami Tablut-s lets the attackers move first; its win rate is 46% instead of 49%. |
| Restricted | Throne e5 only. Only the king may stop there. **[Text; Checked]** |
| Passing | Any piece may pass through the throne when it is empty. **[Text; Checked]** *2026 version:* only the king and the defenders; attackers may not. **[Site; Checked]** |
| Hostile | Empty throne: to attackers and defenders. With the king on it, it acts against attackers only (the king himself can capture). **[Text; Checked]** *2026 version:* the empty throne is hostile to attackers only, never to defenders. **[Site; Checked]** |
| King can capture | Yes **[Text; Checked]** |
| King captured | On the throne: by four (A6). Beside the throne (d5, f5, e4, e6): by three (A6). Anywhere else: like a soldier, between two attackers. **[Text; Checked]** The same in all three versions. |
| Defenders win | The king ends a move on any edge square. **[Checked]** |
| Attackers win | King captured; encirclement test (A8). **[Text; Checked]** The site has applied encirclement only since mid-2019. |
| Repetition | Third occurrence: attackers win. **[Text: "loss for White"]** The site uses its own trigger (A9). |
| No legal move | That side loses. **[Text]** No recorded game ended this way. |
| Not used | Linnaeus's rule that a defending soldier next to the occupied throne can be captured against it is not used on aagenielsen.dk (forum, June 2016). **[Checked]** In 176 recorded moves this rule would have captured a defender; the site never did. Walker's version uses it, and also forbids every piece, the king included, from entering the throne once the king has left it. |
| Checked | All three versions, in 3,872 games (Part D). |

Start position **[Text: Linnaeus 1732; site diagram; Checked]**:

```
    a b c d e f g h i
  9 . . . A A A . . .
  8 . . . . A . . . .
  7 . . . . D . . . .
  6 A . . . D . . . A
  5 A A D D K D D A A
  4 A . . . D . . . A
  3 . . . . D . . . .
  2 . . . . A . . . .
  1 . . . A A A . . .
```

- King (1): e5
- Defenders (8): c5, d5, e3, e4, e6, e7, f5, g5
- Attackers (16): a4, a5, a6, b5, d1, d9, e1, e2, e8, e9, f1, f9, h5, i4, i5, i6

#### C5. Sea Battle 9x9 (Nielsen setup)

| Rule | Value |
|---|---|
| Pieces | Cargo ship (the king) + 8 defenders against 16 attackers |
| First move | Attackers **[Text]** |
| Restricted | None. Any piece may stop on the centre square once the ship has left it. **[Text: no special squares are mentioned]** |
| Hostile | None **[Text]** |
| King can capture | No. The ship is never the moving or the waiting piece in a capture. **[Text]** |
| King captured | By four (A6). Squares off the board do not count, but a ship on the edge has already won. **[Text]** |
| Defenders win | The ship ends a move on any edge square. |
| Attackers win | Ship captured; encirclement test (A8). **[Text]** |
| Repetition | Third occurrence: attackers win. **[Text: "loss for the defenders"]** |
| No legal move | That side loses. **[Text]** |

Start position **[Site diagram; 352 of about 500 recorded Sea Battle 9x9 games use it]**:

```
    a b c d e f g h i
  9 . . . . A . . . .
  8 . A . . A . . A .
  7 . . A . . . A . .
  6 . . . D D D . . .
  5 A A . D K D . A A
  4 . . . D D D . . .
  3 . . A . . . A . .
  2 . A . . A . . A .
  1 . . . . A . . . .
```

- King (1): e5
- Defenders (8): d4, d5, d6, e4, e6, f4, f5, f6
- Attackers (16): a5, b2, b5, b8, c3, c7, e1, e2, e8, e9, g3, g7, h2, h5, h8, i5

#### C6. Market Hnefatafl (9x9)

| Rule | Value |
|---|---|
| Pieces, start position | As Sámi Tablut. **[Text: rules sheet diagram]** |
| First move | Defenders **[Text]** |
| Restricted, hostile | None. The centre is an ordinary square once the king has left it. **[Site: "No restricted squares"]** |
| King can capture | Yes. **[Text, implied]** The sheet says any piece trapped between two enemy pieces is captured, and does not exempt the king as a capturer. |
| King captured | Like a soldier everywhere, the centre square included: between two attackers. **[Text]** |
| Defenders win | The king ends a move on any edge square. **[Text]** |
| Attackers win | King captured. **[Text]** No encirclement rule. |
| Repetition | Third occurrence: attackers win. **[Ours, from the site standard]** The sheet is silent. |
| No legal move | That side loses. **[Ours, from the site standard]** The sheet is silent. |

#### C7. Copenhagen (11x11)

| Rule | Value |
|---|---|
| Pieces | King + 12 defenders against 24 attackers |
| First move | Attackers **[Text]** |
| Restricted | Throne f6; corners a1, a11, k1, k11. Only the king may stop there. **[Text]** |
| Passing | Any piece may pass through the throne when it is empty. **[Text]** |
| Hostile | Corners: to attackers and defenders. Throne: always to attackers; to defenders only when empty. **[Text]** |
| King can capture | Yes, as the moving piece, the waiting piece, or a shieldwall end. **[Text]** |
| King captured | By four (A6). Beside the throne (f5, f7, e6, g6): by three (A6). Never on an edge square. Corners and the throne never replace an attacker, except the throne in the "beside the throne" case. **[Text]** |
| Extra capture | Shieldwall (B1). **[Text]** |
| Defenders win | The king ends a move on a corner; or the exit fort test passes after a defenders' move (B2). |
| Attackers win | King captured; encirclement test (A8). **[Text]** |
| Repetition | Third occurrence: attackers win. **[Text: "loss for White"; Ours: counting rule A9]** |
| No legal move | That side loses. **[Text; Checked]** |
| Checked | Every rule above, B1 and B2 included, in 11,461 games since 2017 (Part D). The site uses its own repetition trigger (A9). |

Start position **[Text; Checked]**:

```
    a b c d e f g h i j k
 11 x . . A A A A A . . x
 10 . . . . . A . . . . .
  9 . . . . . . . . . . .
  8 A . . . . D . . . . A
  7 A . . . D D D . . . A
  6 A A . D D K D D . A A
  5 A . . . D D D . . . A
  4 A . . . . D . . . . A
  3 . . . . . . . . . . .
  2 . . . . . A . . . . .
  1 x . . A A A A A . . x
```

- King (1): f6
- Defenders (12): d6, e5, e6, e7, f4, f5, f7, f8, g5, g6, g7, h6
- Attackers (24): a4, a5, a6, a7, a8, b6, d1, d11, e1, e11, f1, f2, f10, f11, g1, g11, h1, h11, j6, k4, k5, k6, k7, k8

#### C8. Historical 11x11 (Tawlbwrdd)

The rules are those of Sámi Tablut (C4, the Saami Tablut-w version), moved to 11x11. The throne is f6, the squares beside it are f5, f7, e6 and g6, and the king wins on any edge square. Three start positions are played. They differ only in the start position, the first move and the throne:

| Version | Start position | Throne | First move | Defenders win |
|---|---|---|---|---|
| **Lewis cross** (WTF championship since 2023) | Lewis cross, below | Yes | Defenders | 52% (664) |
| Bell ("Welsh Tawlbwrdd" in older site lists) | Bell, below | Yes | Defenders (also played with attackers first: 45%) | 51% (314) |
| Simple Tafl | Lewis cross, below | **No.** The centre is an ordinary square: any piece may stop on it once the king has left, it is never hostile, and the king is captured like a soldier there too. | Defenders (also played with attackers first: 46%) | 50% (142) |

Lewis cross start position **[Site diagram]**:

```
    a b c d e f g h i j k
 11 . . . . A A A . . . .
 10 . . . . A A A . . . .
  9 . . . . . D . . . . .
  8 . . . . . D . . . . .
  7 A A . . . D . . . A A
  6 A A D D D K D D D A A
  5 A A . . . D . . . A A
  4 . . . . . D . . . . .
  3 . . . . . D . . . . .
  2 . . . . A A A . . . .
  1 . . . . A A A . . . .
```

- King (1): f6
- Defenders (12): c6, d6, e6, f3, f4, f5, f7, f8, f9, g6, h6, i6
- Attackers (24): a5, a6, a7, b5, b6, b7, e1, e2, e10, e11, f1, f2, f10, f11, g1, g2, g10, g11, j5, j6, j7, k5, k6, k7

Bell start position **[Site diagram; forum diagram 2012]**:

```
    a b c d e f g h i j k
 11 . . . . A A A . . . .
 10 . . . . A . A . . . .
  9 . . . . . A . . . . .
  8 . . . . . D . . . . .
  7 A A . . D D D . . A A
  6 A . A D D K D D A . A
  5 A A . . D D D . . A A
  4 . . . . . D . . . . .
  3 . . . . . A . . . . .
  2 . . . . A . A . . . .
  1 . . . . A A A . . . .
```

- King (1): f6
- Defenders (12): d6, e5, e6, e7, f4, f5, f7, f8, g5, g6, g7, h6
- Attackers (24): a5, a6, a7, b5, b7, c6, e1, e2, e10, e11, f1, f3, f9, f11, g1, g2, g10, g11, i6, j5, j7, k5, k6, k7

#### C9. Fetlar (11x11)

Fetlar is Copenhagen (C7) with three differences **[Text]**:
1. There is no shieldwall (B1 is not used).
2. There is no exit fort (B2 is not used). The king wins only on a corner.
3. Repetition is a **draw**, not a loss: the third occurrence of a position ends the game as a draw **[Ours: counting rule A9]**.

The start position is the same as Copenhagen. Like Copenhagen, the king cannot be captured on an edge square. Fetlar's text adds "unless he is the only white piece left and completely surrounded". That case is already covered by the encirclement test.

### Part D. Check against recorded games

aagenielsen.dk keeps the moves of every game played there. Its records for five of the nine variants were downloaded in October 2026: 25,933 games. A program replayed every game with the rules in this reference. After each move, it compared two things with the record: which pieces were captured, and whether the game ended, and how. It then changed one rule at a time and replayed all games again. A rule counts as checked when the reference fits the records and the other readings conflict with them.

Two periods were left out. First, records from before 2017 contain many more broken records (most from 2015), and early Copenhagen records write moves differently. So for Copenhagen, Saami Tablut-s and Brandubh 1, only games from 2017 on were used. Second, the first test of the 2026 Sámi Tablut version (July–October 2025) still had a throne that was hostile to defenders.

**Results.** A *rule ending* is a game that the site ended by a rule: escape, king capture, exit fort, encirclement or no legal move. It is *reproduced* when this reference ends the game on the same move, with the same winner. Repetition is covered in A9. Most other games ended by resignation, time loss or an agreed draw. For these, the program checked whether a rule should have ended the game earlier. Apart from repetition, this happened only in the games of notes (a) and (c).

| Variant (name on the site) | Period | Games | Moves | Captures that differ | Rule endings reproduced |
|---|---|---|---|---|---|
| Brandubh 2 ("Brandubh 7x7 (Brandubh 2)") | 2019–2026 | 2,499 | 54,157 | 0 | 652 of 652 |
| Walker's Brandub ("Brandubh 7x7 (Walker)") | 2014–2025 | 500 | 9,885 | 0 | 158 of 158 |
| Brandubh 2.5W ("Brandubh2.5W 7x7") | 2026 | 500 | 12,887 | 0 | 100 of 100 |
| Sámi Tablut, Saami Tablut-w | 2021–2026 | 1,098 | 34,089 | 0 | 345 of 345 |
| Sámi Tablut, Saami Tablut-s | 2017–2022 | 2,477 | 80,754 | 0 | 1,331 of 1,338 (a) |
| Sámi Tablut, 2026 version | Nov 2025–2026 | 297 | 10,298 | 0 | 155 of 155 |
| Copenhagen ("Copenhagen Hnefatafl 11x11") | 2017–2026 | 11,461 | 606,448 | 2 (b) | 2,830 of 2,834 (c) |
| Brandubh 1 ("Brandubh 7x7 (Brandubh 1)"), no card (d) | 2017–2021 | 1,038 | 23,380 | 0 | 419 of 419 |

(a) The other 7 are encirclements before mid-2019, when the site did not yet apply the rule (A8).
(b) Both in one broken record.
(c) In the other 4, the defenders had no legal move, and the site waited for them to resign (A7).
(d) The records show that Brandubh 1 is Brandubh 2 (C1) with one change: beside the throne, the king is captured by three (A6), as in Sámi Tablut.

**Other readings that the records rule out.** Each rule below was changed on its own. The number counts the recorded moves or games that then conflict with the records: captures that would differ, moves that would become illegal, site wins that the changed rules cannot explain, or games that the site played on after the changed rules would have ended them. A dash means the rule does not exist in that variant.

| Rule in the cards | Changed to | Brandubh 2 | Walker | 2.5W | Tablut-w | Tablut-s | Tablut 2026 | Copenhagen |
|---|---|---|---|---|---|---|---|---|
| Empty throne hostile to defenders (Walker, Tablut 2026: not hostile) | the opposite | 915 | 54 | 115 | 327 | 733 | 43 | 4,128 |
| Throne hostile to attackers (Walker: not hostile) | the opposite | 133 | 16 | 22 | 104 | 216 | 41 | 404 |
| Empty throne never hostile to the king | hostile | 172 | 50 | 25 | – | – | – | – |
| Corners hostile to soldiers | not hostile | 701 | 147 | 167 | – | – | – | 4,480 |
| Corners hostile to the king | not hostile | 76 | 17 | 10 | – | – | – | – |
| King on the throne: 4 attackers (Walker: 2) | 2 (Walker: 4) | 137 | 34 | 50 | 60 | 210 | 38 | 53 |
| King beside the throne: 2 attackers (Tablut, Copenhagen: 3) | 3 (Tablut, Copenhagen: 2) | 55 | 6 | 8 | 43 | 125 | 19 | 26 |
| King beside the throne: 3 attackers | 4 | – | – | – | 16 | 53 | 18 | 69 |
| King elsewhere: 2 attackers (Copenhagen: 4) | 4 (Copenhagen: 2) | 320 | 59 | 38 | 132 | 580 | 51 | 3,620 |
| King never captured on an edge square | captured by 3 | – | – | – | – | – | – | 355 |
| King can capture | he cannot | 1,076 | 210 | 191 | 801 | 1,784 | 260 | 18,519 |
| Soldiers may pass the empty throne (Tablut 2026: defenders only) | no soldier may | 1,034 | 324 | (e) | 600 | 1,386 | 119 | 9,596 |
| King may return to the throne | he may not | 1,520 | 173 | 367 | 690 | 1,788 | 199 | 2,875 |

(e) In 2.5W no soldier may pass the castle. This can only be confirmed by what never happens: in 500 games no soldier crossed it. In the same way, no attacker crossed the throne in 297 games of the Tablut 2026 version.

| Copenhagen rule | Changed to | Conflicts |
|---|---|---|
| Shieldwall (B1) | no shieldwall | 398 |
| Only the flanking move captures (B1) | a move onto a front square also captures | 161 |
| The king counts as a front piece (B1, step 4) | he does not | 220 |
| A corner can close the row (B1, step 3) | it cannot | 193 |
| The king can close the row (B1, step 3) | he cannot | 31 |
| In a row with the king, the others are captured (B1, step 5) | the whole row is safe | 15 |
| Exit fort (B2) | no exit fort | 333 |
| No wall piece can ever be captured (B2, step 5) | any closed wall counts | 61 |
| The king must be able to move (B2, step 2) | he need not | 41 |
| Encirclement (A8) | no encirclement | 196 |
| Diagonal contacts close a ring (A8) | they are gaps | 196 |

**Where the site differs from this reference.** These are site quirks and errors. Do not copy them.

- Repetition: the site uses its own trigger (A9).
- Encirclement in Sámi Tablut: not applied before mid-2019 (7 games).
- No legal move: 4 Copenhagen games were not ended at once (A7).
- King jumps: in 5 moves of 4 Sámi Tablut games (2021–2025), the site let the king, moving onto or off the throne, jump over a piece next to it. This breaks A3.
- Broken records: 1 in Brandubh 2, 1 in Saami Tablut-s and 8 in Copenhagen since 2017. In these, moves are missing, out of order or from another game.
- No visible cause: 14 games end without a rule, a resignation or a time loss (about 1 in 1,400). In 12 of them, the losing side made the last move, so they are probably resignations that the record does not show. Four more Copenhagen games from one 2018 tournament, all lost by the same player, store moves copied from other games.

**What could not be checked.**

- Sea Battle 9x9, Market Hnefatafl, Historical 11x11 and Fetlar: no game records were available. Their cards rest on the texts alone.
- Rules that never came up in the records: encirclement in the Brandubh variants; no legal move in Walker's Brandub, Brandubh 2.5W and Sámi Tablut; the fifth-occurrence repetition of 2.5W; the match rule (A11).

**Reading the records.** To test your own program against the same data:

- Each line is one game in JSON. White = defenders, Black = attackers.
- In attackers-first variants, `moves` lists pairs: [attacker move, defender move]. In defenders-first variants, `move_sequence` lists the moves in order, and `first_player` says who began.
- A move is written `e1-e3`. Each capture adds `x` and the square: `d3-c3xc2`. Early Copenhagen records leave out the dash.
- A king capture is never written with `x`. The game simply ends.
- `resigned` or `timeout` as the last entry means that the side to move lost.
- `result` is "White won.", "Black won." or "Draw.". Unfinished games have another value.

## Sources

- aagenielsen.dk (World Tafl Federation): [measured balances](https://aagenielsen.dk/tafl_balances.php); [rule collection](https://aagenielsen.dk/tafl_rules.php); summaries of [Copenhagen](https://aagenielsen.dk/copenhagen_summary.php), [Tablut](https://aagenielsen.dk/tablut_summary.php), [Tawlbwrdd](https://aagenielsen.dk/tawlbwrdd_summary.php), [Brandubh](https://aagenielsen.dk/brandubh_summary.php) and [Ard Ri](https://aagenielsen.dk/ardri_summary.php); rules for [Copenhagen](https://aagenielsen.dk/copenhagen_rules.php), [Fetlar](https://aagenielsen.dk/fetlar_rules_en.php), [Historical Hnefatafl](https://aagenielsen.dk/historical_hnefatafl_rules.php), [Brandubh 2](https://aagenielsen.dk/brandubh2_rules_en.pdf), [Brandubh 2.5W](https://aagenielsen.dk/Brandubh2.5W/Brandubh2.5WOfficialRulesDraft.html), [Sea Battle](https://aagenielsen.dk/seabattle_rules.php), [Ashton Tablut](https://aagenielsen.dk/ashton_rules.php) and [Magpie](https://aagenielsen.dk/magpie_rules.php).
- aagenielsen.dk game records, downloaded in October 2026 (25,933 games): Brandubh 1, Brandubh 2, Brandubh 2.5W, Walker's Brandub, the three Sámi Tablut versions and Copenhagen. Used in Part D.
- [Market Hnefatafl rules sheet](https://aagenielsen.dk/tablutmarketregler_engelsk.pdf) (aagenielsen.dk). Board diagrams on aagenielsen.dk for the Lewis cross, Bell, Simple Tafl and Sea Battle 9x9 starting positions.
- aagenielsen.dk forum threads: [Brandubh 7x7](https://aagenielsen.dk/hnefataflforum/phpBB3/viewtopic.php?t=37), [Saami Tablut](https://aagenielsen.dk/hnefataflforum/phpBB3/viewtopic.php?t=6), [Tawlbwrdd 11x11](https://aagenielsen.dk/hnefataflforum/phpBB3/viewtopic.php?t=25), [Historical Hnefatafl](https://aagenielsen.dk/hnefataflforum/phpBB3/viewtopic.php?t=56).
- Damian Walker: [Four Schools of Hnefatafl](http://tafl.cyningstan.com/post/1276/four-schools-of-hnefatafl) (2015), [Tablut](http://tafl.cyningstan.com/page/170/tablut), [Brandub leaflet](http://www.cyningstan.com/data-download/395/brandub-leaflet), [Magpie leaflet](http://tafl.cyningstan.com/data-download/968/magpie-leaflet).
- [Tafl games – Wikipedia](https://en.wikipedia.org/wiki/Tafl_games) (championship rules; the Ard Rí claim).
- D. Tsvilenev, [Hnefatafl: rules and historical sources](https://aagenielsen.dk/hnefatafl_descr_rules_translation.pdf) (2024).
- [Tablut Challenge 2019, University of Bologna](https://lia.disi.unibo.it/Courses/AI/fundamentalsAI2018-19/challenge/Challenge2019.pdf).
- Studies of game size: [Brandubh](https://arxiv.org/pdf/2106.05353), [Tablut](https://ar5iv.labs.arxiv.org/html/2101.11934).
