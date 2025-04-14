import { fileURLToPath, URL } from 'node:url'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueDevTools(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          // 全局导入 Lodash。
          // lodash: [['default', '_']],
          // 或者单独导入 Lodash 模块中的 debounce 和 throttle。
          // lodash: ['debounce', 'throttle'],
        },
      ],
      resolvers: [ElementPlusResolver()],
      viteOptimizeDeps: true,
      eslintrc: { enabled: true, globalsPropValue: 'readonly' },
      dts: false,
    }),
    VueComponents({
      resolvers: [ElementPlusResolver()],
      dts: false,
    }),
    Icons({ autoInstall: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 8192,
    open: true,
    proxy: {
      // '/api': 'some api url'
    },
  },
})
