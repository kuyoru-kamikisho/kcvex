/**
 * Vite library 模式下把提取出的 CSS 注入为入口 JS 的副作用导入，
 * 这样 `import { KBtn } from 'kcvex/v2'` 时组件样式会一并生效。
 */
export function libInjectCss() {
  return {
    name: 'kcvex-lib-inject-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      if (options.format === 'umd' || options.format === 'iife') return

      const cssFile = Object.keys(bundle).find((file) => file.endsWith('.css'))
      if (!cssFile) return

      const statement =
        options.format === 'cjs'
          ? `require('./${cssFile}');\n`
          : `import './${cssFile}';\n`

      for (const file of Object.keys(bundle)) {
        const chunk = bundle[file]
        if (chunk.type === 'chunk' && chunk.isEntry) {
          chunk.code = statement + chunk.code
        }
      }
    },
  }
}
