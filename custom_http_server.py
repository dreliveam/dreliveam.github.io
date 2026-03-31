import http.server
import socketserver
import os
import webbrowser
import threading
import time

PORT = 8087
DIRECTORY = "_site"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def do_GET(self):
        # 如果请求的路径没有扩展名，尝试添加.html
        if not os.path.splitext(self.path)[1]:
            # 检查是否存在对应的.html文件
            html_path = self.path + ".html"
            full_path = os.path.join(DIRECTORY, html_path.lstrip("/"))
            
            if os.path.exists(full_path):
                self.path = html_path
        
        super().do_GET()

def start_server():
    os.chdir(r"d:\Project\MyAcademicpages.github.io")
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Server started at http://localhost:{PORT}")
        print(f"Serving files from: {os.path.abspath(DIRECTORY)}")
        print("Press Ctrl+C to stop the server")
        print()
        
        # Open browser after a short delay
        def open_browser():
            time.sleep(1)
            webbrowser.open(f"http://localhost:{PORT}")
        
        threading.Thread(target=open_browser, daemon=True).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    start_server()