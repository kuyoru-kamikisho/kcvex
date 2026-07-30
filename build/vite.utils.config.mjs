import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { libInjectCss } from './lib-inject-css.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function libEntry(name, entry) {
  return {
    emptyOutDir: false,
    outDir: resolve(root, `dist/${name}`),
    lib: {
      entry: resolve(root, entry),
      name: `Kcvex${name[0].toUpperCase()}${name.slice(1)}`,
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
  }
}

export default defineConfig(({ mode }) => {
  if (mode === 'tools') {
    return { plugins: [], build: libEntry('tools', 'kc/tools.js') }
  }
  if (mode === 'style') {
    return {
      plugins: [libInjectCss()],
      build: {
        emptyOutDir: false,
        outDir: resolve(root, 'dist/style'),
        lib: {
          entry: resolve(root, 'kc/style.js'),
          name: 'KcvexStyle',
          formats: ['es', 'cjs'],
          fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
        },
        rollupOptions: {
          output: {
            assetFileNames: 'index[extname]',
          },
        },
        cssCodeSplit: false,
        sourcemap: true,
        minify: true,
      },
    }
  }
  return { plugins: [libInjectCss()], build: libEntry('directive', 'kc/directive/index.js') }
})
