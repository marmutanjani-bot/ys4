@echo off
chcp 65001 >nul
title YANGSHUO PORTFOLIO - 开机自启服务器

set LOG_FILE=%~dp0startup-server.log
echo [%DATE% %TIME%] === 启动脚本开始 === > "%LOG_FILE%"

echo [1/5] 清理旧的 Node 进程... >> "%LOG_FILE%"
taskkill /F /IM node.exe >nul 2>&1
echo [%DATE% %TIME%] 已尝试结束 node 进程 >> "%LOG_FILE%"

echo [2/5] 清理 Vite 缓存... >> "%LOG_FILE%"
if exist "node_modules\.vite" (
    rmdir /s /q "node_modules\.vite" >> "%LOG_FILE%" 2>&1
    echo [%DATE% %TIME%] 已删除 Vite 缓存 >> "%LOG_FILE%"
) else (
    echo [%DATE% %TIME%] 无 Vite 缓存 >> "%LOG_FILE%"
)

echo [3/5] 清理 dist/build 缓存... >> "%LOG_FILE%"
if exist "dist" (
    rmdir /s /q "dist" >> "%LOG_FILE%" 2>&1
    echo [%DATE% %TIME%] 已删除 dist 目录 >> "%LOG_FILE%"
)
if exist "build" (
    rmdir /s /q "build" >> "%LOG_FILE%" 2>&1
    echo [%DATE% %TIME%] 已删除 build 目录 >> "%LOG_FILE%"
)

if exist "package-lock.json" (
    echo [%DATE% %TIME%] 检测到 package-lock.json，确保 shaders/react 版本正确 >> "%LOG_FILE%"
)

echo [4/5] 切换到项目目录... >> "%LOG_FILE%"
cd /d "%~dp0" >> "%LOG_FILE%" 2>&1

echo [5/5] 启动服务器... >> "%LOG_FILE%"
echo [%DATE% %TIME%] 启动命令: "C:\Program Files\nodejs\node.exe" "node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 3000 >> "%LOG_FILE%"
"C:\Program Files\nodejs\node.exe" "node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 3000 >> "%LOG_FILE%" 2>&1

echo [%DATE% %TIME%] === 脚本结束 === >> "%LOG_FILE%"