import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base:'programTest/',
  server:{
    /* 使用代理 */
    proxy: {
      '/api': {
        target: 'https://www',  // 目标代理服务器地址
        changeOrigin: true,                          // 允许跨域
      },
    },
  },
  // publicDir:'/'
})
