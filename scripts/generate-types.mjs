/**
 * 根据 json/tags.json 与 json/attributes.json 自动生成：
 * - dist 下各入口的 index.d.ts（组件 / 指令 / tools 类型）
 * - web-types.json（JetBrains IDE 提示）
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const tags = JSON.parse(readFileSync(resolve(root, 'json/tags.json'), 'utf8'))
const attributes = JSON.parse(readFileSync(resolve(root, 'json/attributes.json'), 'utf8'))

const COMPONENTS = Object.keys(tags)

function normalizeType(raw) {
  if (!raw) return 'unknown'
  const t = String(raw).replace(/\n/g, '').trim()
  if (!t) return 'unknown'
  // 常见联合：number|string
  if (t.includes('|')) {
    return t
      .split('|')
      .map((s) => s.trim())
      .filter(Boolean)
      .join(' | ')
  }
  return t
}

function propDocs(component, prop) {
  const meta = attributes[`${component}/${prop}`] || {}
  return {
    type: normalizeType(meta.type) || 'unknown',
    description: (meta.description || '').trim(),
  }
}

function jsDoc(description, indent = '  ') {
  if (!description) return ''
  const lines = description.split(/\r?\n/).map((l) => `${indent} * ${l}`)
  return `${indent}/**\n${lines.join('\n')}\n${indent} */\n`
}

function generateComponentPropsInterface(name) {
  const attrs = tags[name].attributes || []
  const lines = [`export interface ${name}Props {`]
  for (const prop of attrs) {
    const { type, description } = propDocs(name, prop)
    lines.push(jsDoc(description).replace(/\n$/, ''))
    lines.push(`  ${prop}?: ${type}`)
  }
  lines.push('}')
  return lines.filter(Boolean).join('\n')
}

function generateVueModuleDts(vueImportPath) {
  const propsBlocks = COMPONENTS.map(generateComponentPropsInterface).join('\n\n')
  const exports = COMPONENTS.map(
    (name) =>
      `export declare const ${name}: DefineComponent<${name}Props, {}, any, {}, {}, {}, {}, {}, string, {}, {}, {}>`
  ).join('\n')

  return `/* eslint-disable */
/* 本文件由 scripts/generate-types.mjs 根据 json/tags.json、json/attributes.json 自动生成，请勿手改 */
import type { DefineComponent } from '${vueImportPath}'

${propsBlocks}

${exports}

export type KcvexComponents = {
${COMPONENTS.map((n) => `  ${n}: typeof ${n}`).join('\n')}
}

declare const _default: KcvexComponents
export default _default
`
}

function generateDirectiveDts() {
  return `/* eslint-disable */
/* 本文件由 scripts/generate-types.mjs 自动生成，请勿手改 */
import type { ObjectDirective } from 'vue'

export interface ScrollBindingValue {
  /** 销毁帧动画，一旦置为 true，指令会立刻终止，不可再通过设回 false 恢复；如需重新运行请更改元素的 key */
  destroy?: boolean
  /** 滚动方向 */
  direction?: 'x' | 'y'
  /** 帧距离因子，越大滚动越快 */
  factor?: number
  /** 是否无限播放 */
  infinite?: boolean
  /** 是否暂停（外观暂停，帧循环仍在执行） */
  pause?: boolean
  /** 冗余高度。仅当内容高度 > 容器高度 + 冗余高度 时滚动 */
  redundancy?: number
  /** 反转滚动方向 */
  reverse?: boolean
}

export declare const Ripple: ObjectDirective<HTMLElement, boolean | undefined>
export declare const Scroll: ObjectDirective<HTMLElement, ScrollBindingValue | boolean | undefined>

export type KcvexDirectives = {
  Ripple: typeof Ripple
  Scroll: typeof Scroll
}
`
}

function generateToolsDts() {
  return `/* eslint-disable */
/* 本文件由 scripts/generate-types.mjs 自动生成，请勿手改 */

/** 将英文字符串的首字母变更为大写 */
export declare function upperFirst(str: string): string

/**
 * 单位补充器，默认补充单位为 px
 * @param s 数值或已带单位的字符串
 * @param u 单位，默认 px
 */
export declare function unitgen(s: number | string, u?: string): string
`
}

function generateWebTypes() {
  const htmlAttrs = []
  const vueComponents = COMPONENTS.map((name) => {
    const attrs = (tags[name].attributes || []).map((prop) => {
      const { type, description } = propDocs(name, prop)
      return {
        name: prop,
        description,
        value: { kind: 'expression', type },
      }
    })
    // kebab-case 标签名供模板使用
    const kebab = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    return {
      name,
      description: tags[name].description || `${name} component`,
      'doc-url': 'https://github.com/kuyoru-kamikisho/kcvex',
      attributes: attrs,
      slots: [{ name: 'default', description: 'Default slot' }],
      js: {
        events: [],
        symbols: [],
      },
      // 同时注册 kebab 别名提示
      aliases: [kebab],
    }
  })

  return {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    name: 'kcvex',
    version: '2.0.0',
    contributions: {
      html: {
        'vue-components': vueComponents,
        attributes: htmlAttrs,
      },
    },
  }
}

function ensureDir(filePath) {
  const dir = dirname(filePath)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

function write(filePath, content) {
  ensureDir(filePath)
  writeFileSync(filePath, content, 'utf8')
  console.log('written:', filePath.replace(root + '\\', '').replace(root + '/', ''))
}

// Vue 2 / 3 组件类型（DefineComponent 在两端均可用于声明）
const v2Dts = generateVueModuleDts('vue')
const v3Dts = generateVueModuleDts('vue')
write(resolve(root, 'dist/v2/index.d.ts'), v2Dts)
write(resolve(root, 'dist/v3/index.d.ts'), v3Dts)

write(resolve(root, 'dist/directive/index.d.ts'), generateDirectiveDts())
write(resolve(root, 'dist/tools/index.d.ts'), generateToolsDts())

// style 入口无运行时导出
write(
  resolve(root, 'dist/style/index.d.ts'),
  `/* eslint-disable */\n/* 样式入口，无运行时导出 */\nexport {}\n`
)

const webTypes = generateWebTypes()
write(resolve(root, 'web-types.json'), JSON.stringify(webTypes, null, 2) + '\n')

console.log('Type declarations generated successfully.')
