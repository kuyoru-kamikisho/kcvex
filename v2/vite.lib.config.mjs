import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import { libInjectCss } from '../build/lib-inject-css.mjs'

const dir = dirname(fileURLToPath(import.meta.url))
const root = resolve(dir, '..')

export default defineConfig({
  plugins: [vue2(), vue2Jsx(), libInjectCss()],
  build: {
    emptyOutDir: true,
    outDir: resolve(root, 'dist/v2'),
    lib: {
      entry: resolve(root, 'kc/v2/index.js'),
      name: 'KcvexV2',
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
