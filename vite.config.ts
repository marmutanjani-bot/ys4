import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  cacheDir: false, // 禁用 .vite 缓存，避免缓存损坏导致页面无法访问
  server: {
    hmr: {
      overlay: false, // 禁用 HMR 错误遮罩
    },
  },
})
