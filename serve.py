#!/usr/bin/env python3
"""
Simple HTTP server for testing the MCTS implementation.
Serves files with proper CORS headers to avoid cross-origin issues.
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP request handler with CORS headers."""
    
    def end_headers(self):
        # Add CORS headers to allow loading ONNX models
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        
        # Add cross-origin isolation headers (optional, for multi-threading)
        # Uncomment these if you want to use multi-threading (numThreads > 1)
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        
        super().end_headers()
    
    def do_OPTIONS(self):
        """Handle OPTIONS requests (CORS preflight)."""
        self.send_response(200)
        self.end_headers()
    
    def log_message(self, format, *args):
        """Custom logging to show cleaner messages."""
        # Only log actual requests, not CORS preflight
        if args[0].startswith('GET'):
            print(f"[Server] {args[0]}")

if __name__ == '__main__':
    # Change to script directory
    os.chdir(Path(__file__).parent)
    
    # Create server
    with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
        print("=" * 60)
        print(f"🚀 Tafl Test Server")
        print("=" * 60)
        print(f"📡 Server running at: http://localhost:{PORT}")
        print(f"📁 Serving from: {os.getcwd()}")
        print()
        print("📋 Available pages:")
        print(f"   • Main game:  http://localhost:{PORT}/index.html")
        print(f"   • Test suite: http://localhost:{PORT}/test_mcts.html")
        print()
        print("⚠️  Note: Using single-threaded WASM (no cross-origin isolation)")
        print("   To enable multi-threading, see comments in serve.py")
        print()
        print("Press Ctrl+C to stop the server")
        print("=" * 60)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped")
