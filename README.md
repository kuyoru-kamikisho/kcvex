```textmate
  /
 /_  _., __  _.,
/ <_(__\/</_/ /\_
```

以 **精小而快速** 的理念设计的高效率布局 UI 库，同时适用于 **Vue 2.7+** 与 **Vue 3**。

本库不是要取代 Element / Vuetify 等一站式 UI 框架，而是用轻量布局组件与指令补齐常用能力，并尽量不拖累最终包体积。

> **2.0.0**：组件已预构建为 JS（ESM / CJS / UMD），并提供 TypeScript 类型与 IDE 提示。从 `1.8.x` 升级时，原有 `import { KSheet } from 'kcvex/v2'` 等写法可保持不变。

---

## 目录

- [安装](#安装)
- [快速开始](#快速开始)
- [导入方式说明](#导入方式说明)
- [CDN / UMD](#cdn--umd)
- [组件](#组件)
- [指令](#指令)
- [样式表切片](#样式表切片)
- [内置过渡动画](#内置过渡动画)
- [TypeScript 与 IDE 提示](#typescript-与-ide-提示)
- [参与开发](#参与开发)
- [更新日志](#更新日志)

---

## 安装

```bash
npm install kcvex
# 或
yarn add kcvex
# 或
pnpm add kcvex
```

`vue` 为 peerDependency，请确保项目中已安装 Vue 2.7+ 或 Vue 3。

---

## 快速开始

默认入口面向 **Vue 3**（与 1.8.x 一致）：

```js
import 'kcvex/style' // 可选：工具类样式
import { KSheet, KBtn } from 'kcvex'
// 等价于
import { KSheet, KBtn } from 'kcvex/v3'
```

Vue 2 项目请使用 `/v2`：

```js
import 'kcvex/style'
import { KSheet, KBtn } from 'kcvex/v2'
import { Ripple, Scroll } from 'kcvex/directive'
```

选项式 API 需注册组件 / 指令：

```js
export default {
  components: { KSheet, KBtn },
  directives: { Ripple, Scroll },
}
```

模板中使用：

```html
<k-sheet width="100px" height="40px" class="elevation-4 d-flex align-ct justify-ct" v-ripple>
  ...
</k-sheet>
```

---

## 导入方式说明

| 路径 | 说明 |
|------|------|
| `kcvex` / `kcvex/v3` | Vue 3 组件 |
| `kcvex/v2` | Vue 2 组件 |
| `kcvex/directive` | 指令（Vue2 / Vue3 兼容） |
| `kcvex/tools` | 工具函数 `unitgen` / `upperFirst` |
| `kcvex/style` | 全部工具类样式 |
| `kcvex/kc/style/*.css` | 按需引入单个样式文件 |

2.0 起同时提供：

1. **`package.json#exports`**：现代 Node / Vite / Webpack 5+ 推荐
2. **根目录兼容入口**（`v2.js`、`v3.js`、`directive.js` 等）：不依赖 `exports` 映射，较低版本打包器也能解析短路径

产物格式：

- `dist/*/index.mjs` — ESM
- `dist/*/index.cjs` — CommonJS
- `dist/*/index.umd.js` — UMD（CDN）

组件样式会随对应入口一并引入；无需再单独配置 `.vue` 单文件编译来消费本库。

---

## CDN / UMD

```html
<!-- Vue 3 示例 -->
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/kcvex@2/dist/v3/index.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/kcvex@2/dist/style/index.css" />
<link rel="stylesheet" href="https://unpkg.com/kcvex@2/dist/v3/index.css" />
```

```html
<!-- Vue 2 示例 -->
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/kcvex@2/dist/v2/index.umd.js"></script>
```

全局变量名：`KcvexV3` / `KcvexV2` / `KcvexDirective` / `KcvexTools`。

---

## 组件

源码位于 [`kc/`](./kc/)。发布包中为预构建 JS，行为与 1.8.x 保持一致。

### KBtn

强化版 `button`，可快速设置颜色、尺寸、圆角等，提供默认插槽。

### KDivider

分割线组件。

### KExpandTransition

抽屉式伸缩展开过渡，适用 Vue2 / Vue3（请从对应入口导入）。提供默认插槽。

### KOverlay

遮罩层，支持挂载到指定 DOM、Esc 关闭等。提供默认插槽。

### KProgressCircular

环形进度 / 加载指示器（尺寸以像素为参考）。

### KSheet

强化版 `div`，可快速设置宽高、颜色、溢出等，提供默认插槽。

---

## 指令

指令设计为 Vue2 / Vue3 尽量通用，从 `kcvex/directive` 导入。

### Ripple

Material Design 风格点击波纹。

```vue
<template>
  <k-btn v-ripple style="--ripple-color: red;"></k-btn>
</template>
<script>
import { KBtn } from 'kcvex/v2'
import { Ripple } from 'kcvex/directive'

export default {
  directives: { Ripple },
  components: { KBtn },
}
</script>
```

| CSS 变量 | 默认值 |
|----------|--------|
| `--ripple-opacity` | `.1` |
| `--ripple-duration` | `.3` |
| `--ripple-color` | `currentColor` |

### Scroll

当内容高度超过容器时，驱动滚动条做自动滚动（非 DOM 复制型跑马灯）。

部分行为依赖指令的 `update` 钩子。直接改对象内部字段可能不触发更新，推荐用计算属性返回新对象，例如：

```vue
<template>
  <k-sheet
    @mouseenter.native="hovered = true"
    @mouseleave.native="hovered = false"
    height="300px"
    overflow="auto"
    v-scroll="scrollObject"
  >
    <k-sheet height="1000px" color="grey">...</k-sheet>
  </k-sheet>
</template>
<script>
import { KSheet } from 'kcvex/v2'
import { Scroll } from 'kcvex/directive'

export default {
  directives: { Scroll },
  components: { KSheet },
  data: () => ({ hovered: false }),
  computed: {
    scrollObject() {
      return { factor: 0.2, pause: this.hovered }
    },
  },
}
</script>
```

参数说明：

| 字段 | 默认 | 说明 |
|------|------|------|
| `destroy` | `false` | 为 `true` 时立即终止，无法再设回；需改 `key` 重建 |
| `direction` | `'y'` | `'x'` \| `'y'` |
| `factor` | `1` | 每帧像素距离 |
| `infinite` | `true` | 是否无限滚动 |
| `pause` | `false` | 外观暂停（帧循环仍在） |
| `redundancy` | `300` | 冗余高度阈值 |
| `reverse` | `false` | 反向 |

---

## 样式表切片

```js
import 'kcvex/style'
```

也可按需引入：

```css
@import "kcvex/kc/style/flex.css";
```

若已使用 Tailwind 等完整原子化方案，可不必引入本库工具类（个别组件自带样式不受影响）。

常用前缀：

| 文件 / 类别 | 前缀示例 | 说明 |
|-------------|----------|------|
| background | `bg-` | 背景 |
| cursor | `c-` | 鼠标样式 |
| display | `d-` | 如 `d-flex` |
| elevation | `elevation-` | 阴影高度 |
| flex | `flex-` / `align-` / `justify-` | 弹性布局 |
| margin | `m*-` | `n * 4`px，如 `ml-3` → 12px |
| padding | `p*-` | 同上 |
| overflow | `overflow-` | 溢出 |
| position | `position-` | 定位 |
| round | `round-` | 圆角（2–16 偶数） |
| size | `w-` / `h-` | 宽高比例 |
| text | `text-` | 文本 |
| selection | `inselectable` | 禁止选中 |
| fade / slide / scroll | 过渡名 | 见下表 |

完整类名见 [`kc/style`](./kc/style/)。

---

## 内置过渡动画

需引入对应样式（或全量 `kcvex/style`）后，配合 `<transition name="...">` 使用：

| name | 说明 |
|------|------|
| `kfade` | 渐隐 |
| `scroll-x` / `scroll-y` | 滚动过渡 |
| `scroll-x-reverse` / `scroll-y-reverse` | 反向滚动 |
| `slide-x` / `slide-y` | 滑动 |
| `slide-x-reverse` / `slide-y-reverse` | 反向滑动 |

---

## TypeScript 与 IDE 提示

- 包内含 `.d.ts`，对 `kcvex`、`kcvex/v2`、`kcvex/v3`、`kcvex/directive`、`kcvex/tools` 有类型支持
- Vetur：`json/tags.json`、`json/attributes.json`
- JetBrains：`web-types.json`

### 类型会不会随组件 props 自动更新？

**不会。** 改 `kc/**/*.vue` 里的 `props` **不会**自动改写 `.d.ts` / `web-types.json`。

类型与 IDE 提示的**唯一来源**是：

| 文件 | 作用 |
|------|------|
| `json/tags.json` | 组件有哪些属性（属性名列表） |
| `json/attributes.json` | 每个属性的类型与说明文字 |

生成脚本：`scripts/generate-types.mjs` → 写出 `dist/*/index.d.ts` 与根目录 `web-types.json`。

### 新增 / 删除 / 修改 props 后如何更新声明

1. **先改组件实现**（`kc/v2`、`kc/v3` 中对应 `.vue`，两端保持一致）
2. **再改元数据 JSON**（与实现同步）：
   - 在 `json/tags.json` 对应组件的 `attributes` 数组中增删属性名
   - 在 `json/attributes.json` 中增删或修改 `"组件名/属性名"` 条目（`type`、`description`）
3. **重新生成类型**：

```bash
# 只更新类型与 web-types（日常改 props 够用）
yarn build:types

# 或完整构建（发布前推荐）
yarn build
```

示例：给 `KSheet` 新增 `opacity` prop 时，除了改 `.vue`，还要：

```json
// json/tags.json — 在 KSheet.attributes 中加入
"opacity"

// json/attributes.json — 新增条目
"KSheet/opacity": {
  "type": "string\n",
  "description": "Specify opacity."
}
```

然后执行 `yarn build:types`。删除属性时反过来：从两个 JSON 里去掉对应项再生成即可。

> 本地用 `yarn dev:v2` / `yarn dev:v3` 调试时直接引用源码，不依赖 `.d.ts`；类型声明主要影响**发布后**消费方的代码提示与类型检查。

---

## 参与开发

### 仓库结构

| 目录 | 作用 |
|------|------|
| `kc/` | 组件与指令**源码**（`kc/v2`、`kc/v3`、`kc/directive`、`kc/style`） |
| `v2/` | Vue2 本地调试项目；`yarn build:lib` 产出 `dist/v2` |
| `v3/` | Vue3 本地调试项目；`yarn build:lib` 产出 `dist/v3` |
| `test/` | 模拟「从 npm 安装后」的消费方验证项目 |
| `build/` | 公共构建插件与 directive/tools/style 的 Vite 配置 |
| `scripts/` | 清理产物、生成类型等脚本 |
| `json/` | 组件标签 / 属性元数据（生成类型与 IDE 提示的来源） |
| `dist/` | `yarn build` 输出（发布用） |

### 环境准备

```bash
# 根目录：安装构建依赖
yarn install

# 调试项目依赖（按需）
yarn --cwd v2 install
yarn --cwd v3 install
yarn --cwd test install
```

### 常用命令

```bash
# 构建全部产物 + 生成类型（发布前必跑）
yarn build

# 仅生成类型与 web-types（改了 json 或 props 元数据后）
yarn build:types

# 本地调试组件（改 kc 源码，热更新）
yarn dev:v2
yarn dev:v3
```

调试项目直接引用 `../kc/...` 源码，便于改组件后立即查看效果。

### 修改组件 props 的检查清单

1. 更新 `kc/v2`、`kc/v3` 中的组件 `props`
2. 同步更新 `json/tags.json`、`json/attributes.json`（**不会**从 `.vue` 自动推断）
3. 执行 `yarn build:types`（或 `yarn build`）刷新 `.d.ts` 与 `web-types.json`
4. 在 `v2/` / `v3/` 中验证行为；发布前用 `test/` 验证安装路径

### 验证发布包

```bash
yarn build
# test/package.json 中已使用 "kcvex": "file:.."
yarn --cwd test install
yarn --cwd test dev
```

### 贡献建议

1. 在 `kc/v2` 与 `kc/v3` 同步实现组件行为（除非某端不适用）
2. 改 props 时务必同步 `json/tags.json`、`json/attributes.json`，并执行 `yarn build:types`
3. 执行 `yarn build`，确保类型与产物生成成功
4. 用 `v2/`、`v3/` 做功能验证，用 `test/` 做安装路径验证
5. 提交 PR 前不要改动与需求无关的组件行为，保持对旧版导入路径的兼容

---

## 更新日志

### 2.0.0

- 组件预构建为 ESM / CJS / UMD，消费方无需再编译本库的 `.vue` 文件
- 增加根目录兼容入口，降低对高版本 Node / `exports` 的依赖
- 根据 `json/*` 自动生成 TypeScript 声明与 `web-types.json`
- 保持与 1.8.x 相同的导入路径与组件 API

### 历史摘要

- **1.8.0** 环形进度指示器
- **1.7.0** Scroll 指令；修复 1.6.4 导入问题
- **1.6.0** Ripple 指令
- **1.5.0** 简化组件文件命名与导入
- **1.4.0** 起废弃 KStyle
- **1.3.0** 起部分组件按 Vue 版本拆分，需从 `/v2` 或 `/v3` 导入
- **1.2.0** 以前版本存在严重问题，请勿使用
