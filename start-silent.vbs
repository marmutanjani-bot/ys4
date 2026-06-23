Dim objShell
Set objShell = CreateObject("WScript.Shell")

' 切换工作目录并后台启动 Vite（不弹窗口）
objShell.Run "cmd /c ""cd /d c:\Users\user\WorkBuddy\20260617095156 && taskkill /F /IM node.exe >nul 2>&1 && if exist node_modules\.vite rmdir /s /q node_modules\.vite && node node_modules\vite\bin\vite.js --host 0.0.0.0 --port 3000""", 0, False

Set objShell = Nothing