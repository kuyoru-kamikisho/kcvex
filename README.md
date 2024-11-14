适用于 [vue2](https://v2.vuejs.org/) 和 [vue3](https://vuejs.org/) 的 `VExpandTransition` 等 组件，
使用vscode等idea工具以具备更加完善的代码提示特性✨

<!-- TOC -->
  * [更新日志](#更新日志)
  * [基础使用](#基础使用)
  * [组件](#组件)
    * [Components](#components)
      * [KBtn](#kbtn)
      * [KDivider](#kdivider)
      * [KExpandTransition](#kexpandtransition)
      * [KOverlay](#koverlay)
      * [KSheet](#ksheet)
    * [指令](#指令)
      * [Ripple](#ripple)
    * [关于样式表切片](#关于样式表切片)
<!-- TOC -->

## 更新日志

- 1.2.0 以前的版本存在严重bug，因此尽量不要使用
- 1.3.0 以后的版本开始，一些之前可以在vue2和vue3通用的组件将不再通用，因此需要格外注意
- 1.4.0 以后开始将废弃 KStyle 组件
- 1.5.0 以后开始移除组件文件名称的数字标识，简化了导入方式

## 基础使用

基于模块化开发：

1. 首先，引入组件
   ```shell
   # 使用yarn或npm等包管理器安装最新版本的kcvex，新版本具备更完善的代码提示
   yarn add kcvex
   # 或
   npm install kcvex
   ```
2. 在项目中使用
   ```javascript
   // 按需要导入样式表，也许只有在组件的样式出现问题时您可能才需要导入，推荐导入
   import 'kcvex/style'
   // vue2组件:
   import { KExpandTransition } from 'kcvex/v2'
   
   // vue3组件:
   import { KExpandTransition } from 'kcvex/v3'
   
   // 导入指令:
   import { Ripple } from 'kcvex/directive'
   ```
   ```javascript
   // 选项式组件
   ...
   component:{ KExpandTransition }
   ...
   ```
2. 在模板中使用
   ```html
   <k-expand-transition>
     ...
   </k-expand-transition>
   ```

## 组件

所有Vue小部件都位于 [kc目录](./kc/)。

### Components

#### KBtn

`强化版 button` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

#### KDivider

`分割线` 组件，可快速设置一定的样式，详情可以看该组件的 props

#### KExpandTransition

适用于任何 vue 版本 的`抽屉伸缩展开渐变动画组件`，提供默认插槽，
与`KExpandTransition`具备完全相同的props

#### KOverlay

`遮罩` 组件，可快速设置一定的样式，支持跨Dom结构进行渲染，详情可以看该组件的 props，提供默认插槽
与`KOverlay`拥有完全相同的props

#### KSheet

`强化版 div` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

### 指令

#### Ripple

由于指令本身通常是一个对象，因此被设计为vue2和vue3都兼容的。

基于 material design 设计规范衍生的元素点击波纹效果，
使用该指令可以快速地为指定元素创建点击波纹效果，
为元素添加以下样式可以设定一些属性

| CSS Attribute     | Default Value |
|-------------------|---------------|
| --ripple-opacity  | .1            |
| --ripple-duration | .47           |
| --ripple-color    | currentColor  |

### 关于样式表切片

```js
import 'kcvex/style'
```

kcvex 提供大量易于记忆的常用样式切片，详情可以看该组件的 [style列表](./kc/style.js)，
一些布局组件也用到了这里面的样式类，比如 `KBtn` 的默认阴影效果。

如果您不导入这些切片，则您不可以直接使用这些切片，`个别`组件的样式可能会受此影响。

当然，为了最终的包大小考虑，您已可以只导入其中的部分样式表，就像下面这样：

```css
@import "kcvex/kc/style/flex.css";
```
