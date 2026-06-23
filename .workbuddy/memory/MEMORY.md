# 项目长期记忆

## 项目概述
杨烁个人作品集网站（YANGSHUO PORTFOLIO），技术栈 React + Vite + Tailwind CSS + shaders。
工作目录: `c:\Users\user\WorkBuddy\20260617095156`
访问地址: `http://localhost:3000`

## 服务器启动
- 桌面快捷方式: `C:\Users\user\Desktop\启动网页服务器.bat`（已更新为自动清理缓存+杀旧进程版本）
- 手动命令: `node "c:\Users\user\WorkBuddy\20260617095156\node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 3000`
- PowerShell 中 `npm run dev` 不生效，必须直接用 node.exe 调用 vite.js

## 关键技术决策
- 页面路由: App.tsx 用 `useState<'home' | 'gallery'>` 实现首页/画廊切换
- "作品预览"橙色按钮 → 跳转 DomeGallery 画廊页
- "首页"按钮 → 纯标识，不跳转
- 导航栏: fixed 定位，glass-bubble-pop 玻璃质感按钮样式
- Hero 标题: "YANGSHUO"（橙色 #F26522）+ "PORTFOLIO"（白色带投影）
- Shader 组件必须包裹在 `<Shader>` 内

## 常见问题修复
- **404 错误**: Vite 缓存损坏 → 删除 `node_modules/.vite` 目录后重启
- **页面空白**: 检查 main.tsx 是否被覆盖、react-dom/client 是否用命名导入 createRoot
- **Shader 报错**: 确保 Swirl/ChromaFlow/FlutedGlass/FilmGrain 在 `<Shader>` 内

## DomeGallery 画廊组件
- 原始 React Bits 组件，3D 球体排列图片 + 鼠标拖拽旋转 + 点击放大
- 依赖: `@use-gesture/react`
- 文件: `src/DomeGallery.jsx` + `src/DomeGallery.css`
- 曾尝试改为 Pinterest 瀑布流 + 无限画布，用户不满意，已恢复原始版本
- 画廊页背景色: `#120F17`（深色）
- App.tsx 中 DomeGallery 传入 props: `grayscale={false} fit={0.85} overlayBlurColor="#120F17" openedImageWidth="400px" openedImageHeight="500px"`
- hover 动效: `.item__image:hover { transform: translateZ(0) scale(1.06); }` + `transition: transform 300ms ease`（2026-06-18 添加）
- 曾尝试集成 BorderGlow 组件（方向性辉光），用户不满意已移除，文件已删除

## 文件备份
备份路径: `D:\bein\杨烁\作品集网页文件`
