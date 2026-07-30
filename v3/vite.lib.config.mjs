import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { libInjectCss } from '../build/lib-inject-css.mjs'

const dir = dirname(fileURLToPath(import.meta.url))
const root = resolve(dir, '..')

export default defineConfig({
  plugins: [vue(), vueJsx(), libInjectCss()],
  build: {
    emptyOutDir: true,
    outDir: resolve(root, 'dist/v3'),
    lib: {
      entry: resolve(root, 'kc/v3/index.js'),
      name: 'KcvexV3',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.mjs'
        if (format === 'cjs') return 'index.cjs'
        return 'index.umd.js'
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: 'index[extname]',
        exports: 'named',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: true,
  },
})
