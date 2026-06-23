# YANGSHUO PORTFOLIO — 项目恢复指南

## 项目信息
- 技术栈：React + Vite + Tailwind CSS + shaders
- 端口：3000
- 工作目录：`c:\Users\[用户名]\WorkBuddy\20260617095156`

---

## 回家后的操作步骤（新电脑）

### 1. 复制项目文件
把本文件夹内的所有内容（不含外层文件夹本身），复制到新电脑的：
```
c:\Users\你的用户名\WorkBuddy\20260617095156
```
如果目录不存在，手动创建。

### 2. 安装依赖
打开终端，进入项目目录：
```bash
cd c:\Users\你的用户名\WorkBuddy\20260617095156
npm install
```

### 3. 启动开发服务器
```bash
node "node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 3000
```

> `npm run dev` 在新电脑可能不生效，请直接用 `node` 调用 `vite.js`。

### 4. 打开 WorkBuddy 对话
登录同一账号，进入本对话，项目即可无缝衔接继续编辑。

---

## 注意事项
- 不要复制 `node_modules`（体积太大，`npm install` 会自动生成）
- 如果新电脑没有 Node.js，请先安装（版本 18+ 即可）
- 如遇 404 错误：删除 `node_modules\.vite` 后重新启动
- 如遇空白页面：检查 `main.tsx` 是否被正确导入

---

备份时间：2026-06-23
