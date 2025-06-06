```textmate    
  /              
 /_  _., __  _., 
/ <_(__\/</_/ /\_
```

<!-- TOC -->

* [简介](#简介)
* [更新日志](#更新日志)
* [基础使用](#基础使用)
* [组件](#组件)
    * [Components](#components)
        * [KBtn](#kbtn)
        * [KDivider](#kdivider)
        * [KExpandTransition](#kexpandtransition)
        * [KOverlay](#koverlay)
        * [KProgressCircular](#kprogresscircular)
        * [KSheet](#ksheet)
    * [指令](#指令)
        * [Ripple](#ripple)
        * [Scroll](#scroll)
    * [关于样式表切片](#关于样式表切片)
* [内置的过渡动画](#内置的过渡动画)

<!-- TOC -->

## 简介

以 精小而快速 的理念设计的高效率布局UI库，同时适用于vue2和vue3！
该库不是让您抛弃Element或者Vuetify等高度成熟的一站式UI库，
因为本库的核心目标是辅助开发人员提高效率，
同时弥补一些即使是这些成熟的库也没有的特性，
使用vscode等idea工具以具备更加完善的代码提示特性✨。

为了能让开发人员高度自定义，本库的任何UI组件都没有设置过多的样式，
也正是因此，本库的组件中未添加`input`这种需要设置很多样式才可能满足需要的组件，
本库不希望开发人员为使用本库而感到拖累，因此任何组件都只是简单的布局性组件，
你可以把这些UI组件看作是稍微强化了的基本HTML元素。

该库几乎是完全原生的，未依赖任何第三方UI库，
因此不必担心对您的最终包大小产生严重拖累。

## 更新日志

- 1.2.0 以前的版本存在严重bug，因此尽量不要使用
- 1.3.0 以后的版本开始，一些之前可以在vue2和vue3通用的组件将不再通用，因此需要格外注意
- 1.4.0 以后开始将废弃 KStyle 组件
- 1.5.0 以后开始移除组件文件名称的数字标识，简化了导入方式
- 1.6.0 添加了按钮波纹指令 Ripple，并在之后修复指令的缺陷
- 1.7.0 添加了按钮滚动指令 Scroll，该指令适用于让列表一直处于滚动动画的需求，修复了1.6.4版本的导入性bug
- 1.8.0 添加了环形进度指示器组件

## 基础使用

        💣请注意，本库的默认导入是面向vue3的库
        这意味着 import {KSheet} from 'kcvex' 与 import {KSheet} from 'kcvex/v3' 的行为是一致的

        💣本组件库不可被较低版本的模块打包器解析，
        因为本库依赖与package.json的exports路径映射，
        因此在使用之前应该先了解一下您的模块打包器（比如Webpack）的版本是否支持exports路径映射

        💣本库适用于支持es2015的项目与浏览器，
        在使用之前应该了解您的项目是否有放弃IE等老旧浏览器的打算

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
   // 样式表导入是可选的
   import 'kcvex/style'
   
   // vue2组件:
   import { KExpandTransition } from 'kcvex/v2'
   
   // vue3组件:
   import { KExpandTransition } from 'kcvex/v3'
   
   // 导入指令:
   import { Ripple } from 'kcvex/directive'
   ```
   ```textmate
   // 在选项式组件需要注册
   ...
   export default {
    directives: {Ripple},
    components: {KExpandTransition},
   }
   ...
   ```
2. 在模板中使用
   ```html
   <!--  使用组件 -->
   <k-expand-transition>
     ...
   </k-expand-transition>
   
   <!-- 使用指令（不要忘记注册指令） -->
   <k-sheet v-ripple width="100px" height="40px" class="elevation-4 d-flex align-ct justify-ct">
     ...
   </k-sheet>
   ```

## 组件

所有Vue小部件都位于 [kc目录](./kc/)。

### Components

#### KBtn

`强化版 button` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

#### KDivider

`分割线` 组件，可快速设置一定的样式，详情可以看该组件的 props

#### KExpandTransition

适用于任何 vue 版本 的`抽屉伸缩展开渐变动画组件`，提供默认插槽

#### KOverlay

`遮罩` 组件，可快速设置一定的样式，支持跨Dom结构进行渲染，详情可以看该组件的 props，提供默认插槽

#### KProgressCircular

`进度环` 组件，可根据值控制环的进度，也可以设置为一直旋转的加载动画，该组件以像素为基础参考单位

#### KSheet

`强化版 div` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

### 指令

由于指令本身通常是一个对象，因此kcvex的所有指令被尽量设计为vue2和vue3都兼容的。

#### Ripple

```vue

<template>
  <k-btn v-ripple style="--ripple-color:red;"></k-btn>
</template>
<script>
  import {KBtn} from 'kcvex/v2'
  import {Ripple} from 'kcvex/directive'

  export default {
    directives: {Ripple},
    components: {KBtn},
  }
</script>
```

基于 material design 设计规范衍生的元素点击波纹效果，
使用该指令可以快速地为指定元素创建点击波纹效果，
为元素添加以下样式可以设定一些属性

| CSS Attribute     | Default Value |
|-------------------|---------------|
| --ripple-opacity  | .1            |
| --ripple-duration | .3            |
| --ripple-color    | currentColor  |

#### Scroll

在一些项目中可能会有类似跑马灯一样让列表不断滚动的效果，
该指令的作用就是让可以滚动的元素实现自动滚动效果。

当内容高度超过父级高度时，该指令的效果才会被表现出来，
因为该指令并不是真正意义上的跑马灯，他操控的是元素的滚动条，
因此在内容高度未超过父级高度或者父级溢出高度的内容被裁剪的情况下，
该指令不会对元素进行滚动。

⚠️尽管scroll指令可以检测到传入参数值的变化，但是需要注意的是，该指令的部分特性依赖于vue指令的update钩子，
这意味着直接修改对象的属性值可能不会触发vue的update钩子，从而导致scroll指令出现预期外的小问题。
<br>因此，以选项式组件为例，<u>推荐您使用下面的方式来控制参数的变化</u>：

```vue

<template>
  <k-sheet @mouseenter.native="hovered=true"
           @mouseleave.native="hovered=false"
           height="300px"
           overflow="auto"
           v-scroll="scrollObject">
    <k-sheet height="1000px" color="grey">
      因为hovered参数不是对象，直接赋值就可以触发vue的update钩子，
      此时，鼠标悬浮会暂停滚动，您可以手动控制滚动位置，
      在鼠标离开后会重新读取当前的滚动距离并开始滚动。
      如果未触发update钩子，则只会读取上一次自动滚动时到达的位置，
      而忽略手动控制到达的滚动位置。
    </k-sheet>
  </k-sheet>
</template>
<script>
  import {KSheet} from 'kcvex/v2'
  import {Scroll} from 'kcvex/directive'

  export default {
    directives: {Scroll},
    components: {KSheet},
    data: () => ({
      hovered: false
    }),
    computed: {
      scrollObject() {
        return {factor: .2, pause: this.hovered}
      }
    }
  }
</script>
```

下面是该指令接收的对象以及参数说明，它完全可以是响应式的！

```textmate
    @param {object} o 指令值
    @param {boolean} [o.destroy=false] 销毁帧动画，一旦置为true，该该指令本身会立刻终止运行，不可通过设置为true重新运行，如果想重新运行，请更改元素的 key 属性值
    @param {'x'|'y'} [o.direction='y'] 滚动方向
    @param {number} [o.factor=1] 帧距离因子，代表每一帧移动的像素距离，该值越大，滚动速度越快，越小则越慢，注意该值的最大值和最小值受设备像素影响，过小时将会失效
    @param {boolean} [o.infinite=true] 是否无限播放
    @param {boolean} [o.pause=false] 是否暂停，注意不等同于禁用，只是外观上暂停，指令本身每一帧都依然在执行
    @param {number} [o.redundancy=300] 冗余高度。只有当 “内容物总高度>(容器盒子高度+冗余高度)” 时才会发生滚动
    @param {boolean} [o.reverse=false] 反转滚动方向
```

### 关于样式表切片

```js
import 'kcvex/style'
```

kcvex 提供大量易于记忆的常用样式切片，相信这些切片可以提高您的开发效率！

详情可以看该组件的 [style列表](./kc/style.js)，
一些布局组件也用到了这里面的样式类，比如 `KBtn` 的默认阴影效果。

如果您不导入这些切片，则您不可以直接使用这些切片，`极个别`组件的样式可能会受此影响。

如果您使用了其他较为成熟的css组件库，比如 [Tailwind CSS](https://tailwindcss.com/)，
则完全没有必要导入本库的样式表切片，因为相对Tailwind CSS而言本组件库的样式表是静态的，
凡是被kcvex导入的样式表无论您是否使用都会被打包进最终产物。

当然，为了最终的包大小考虑，您已可以只导入其中的部分样式表，就像下面这样：

```css
@import "kcvex/kc/style/flex.css";
```

在下面介绍了各类样式表类名的使用规律：

#### background

- 类型：应用于元素背景
- 前缀：`bg-`
- 用例：`bg-repeatx` 等效样式 `background: repeat-x;`

#### cursor

- 类型：应用于鼠标样式
- 前缀：`c-`
- 用例：`c-pointer` 等效样式 `cursor: pointer;`

#### display

- 类型：应用于元素盒类型
- 前缀：`d-`
- 用例：`d-flex` 等效样式 `display: flex;`

#### elevation

- 类型：仿卡片悬浮式阴影
- 前缀：`elevation-` 后接数字，代表阴影高度
- 用例：`elevation-4`
  等效样式 ` box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);`

#### kfade

- 类型：过渡动画，渐变
- 用例：`<transition name="kfade"></transition>`

#### flex

- 类型：弹性盒相关的类，搭配 `d-flex` 快速实现弹性盒布局
- 前缀：`flex-`、`align-`、`justify-`
- 用例：`d-flex align-ct justify-sb` 等效样式 `display: flex;align-items: center;justify-content: center;`

#### margin

- 类型：外边距
- 前缀：`ml-`、`mr-`、`mt-`、`mb-`、`ma-`、`mx-`、`my-` 后接数字
- 数值：前缀后面的数字计算方式为 `n * 4`
- 用例：`ml-3` 等效样式 `margin-left: 12px;`

#### overflow

- 类型：元素溢出规则
- 前缀：`overflow-`
- 用例：`overflow-auto` 等效样式 `overflow: auto;`

#### padding

- 类型：内边距
- 前缀：`pl-`、`pr-`、`pt-`、`pb-`、`pa-`、`px-`、`py-` 后接数字
- 数值：前缀后面的数字计算方式为 `n * 4`
- 用例：`pl-3` 等效样式 `padding-left: 12px;`

#### position

- 类型：定位方式
- 前缀：`position-`
- 用例：`position-absolute` 等效样式 `position: absolute;`

#### round

- 类型：元素盒圆角
- 前缀：`round-` 后接数字，只提供了 2-16 的偶数
- 用例：`round-2` 等效样式 `border-radius: 2px;`

#### scroll

- 类型：过渡动画，滚动
- 用例：`<transition name="scroll-y"></transition>`

#### selection

- 类型：用户是否可以选中内容
- 前缀：无
- 用例：`inselectable` 等效样式 `user-select: none;`

#### size

- 类型：大小
- 前缀：`w-`、`h-`
- 用例：`w-100` 等效样式 `width: 100%;`

#### slide

- 类型：过渡动画，滑动
- 用例：`<transition name="slide-y"></transition>`

#### text

- 类型：大小
- 前缀：`text-`
- 用例：`text-nowrap` 等效样式 `white-space: nowrap;`

## 内置的过渡动画

如果您使用的UI库和以下样式有冲突，可以考虑按需引入style。

| name             | use in                                    |
|------------------|-------------------------------------------|
| kfade            | fade transition                           |
| scroll-x         | scroll transition in horizontal direction |
| scroll-y         | scroll transition in vertical direction   |
| scroll-x-reverse | scroll transition in horizontal direction |
| scroll-y-reverse | scroll transition in vertical direction   |
| slide-x          | slide transition in horizontal direction  |
| slide-y          | slide transition in vertical direction    |
| slide-x-reverse  | slide transition in horizontal direction  |
| slide-y-reverse  | slide transition in vertical direction    |
