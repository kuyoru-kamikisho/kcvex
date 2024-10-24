适用于 [vue2](https://v2.vuejs.org/) 和 [vue3](https://vuejs.org/) 的 `VExpandTransition` 等 组件，
使用vscode等idea工具以具备更加完善的代码提示特性✨

## 基础使用

基于模块化开发：

   1. 首先，引入组件
      ```shell
      # 1.2.0 以前的版本存在严重bug，因此尽量不要使用
      # 1.3.0 以后的版本开始，一些之前可以在vue2和vue3通用的组件将不再通用，因此需要格外注意
      # 使用yarn或npm等包管理器安装最新版本的kcvex，新版本具备更完善的代码提示
      yarn add kcvex
      ```
   2. 在项目中使用   
      ```javascript
      // 适用于 vue2
      import VExpandTransition from 'kcvex/kc/K2ExpandTransition.vue'
      
      // 适用于 vue3
      import VExpandTransition from 'kcvex/kc/K3ExpandTransition.vue'
      
      // 如果您不喜欢上面这种导入方式，可以尝试下面的方式
      // 简化版导入 (v2) 注意此时的名称
      import { K2ExpandTransition } from 'kcvex'
      // 简化版导入 (v3) 注意此时的名称
      import { K3ExpandTransition } from 'kcvex'
      ```
      ```javascript
      // 选项式组件
      ...
      component:{ VExpandTransition }
      ...
      ```
   2. 在模板中使用
      ```html
      <v-expand-transition>
        ...
      </v-expand-transition>
      ```
      
## 部件文档

关于所有小部件，下面的简易文档可能并不会及时更新，
您可以通过查看 [kc目录](./kc/) 获得所有Vue小部件。

所有组件的样式都是开放式的（未scoped化），因此您可以根据需要调整样式。

### [K2ExpandTransition](./kc/K2ExpandTransition.vue)

适用于任何 vue 版本 的`抽屉伸缩展开渐变动画组件`，提供默认插槽，
与`K3ExpandTransition`具备完全相同的props

### [K3ExpandTransition](./kc/K3ExpandTransition.vue)

支持setup 的任意vue版本 的`抽屉伸缩展开渐变动画组件`，提供默认插槽，
与`K2ExpandTransition`具备完全相同的props

### [K2Btn](./kc/K2Btn.vue)

`强化版 button` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

### [K3Btn](./kc/K3Btn.vue)

`强化版 button` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

### [K2Divider](./kc/K2Divider.vue)

`分割线` 组件，可快速设置一定的样式，详情可以看该组件的 props

### [K3Divider](./kc/K3Divider.vue)

`分割线` 组件，可快速设置一定的样式，详情可以看该组件的 props

### [K2Overlay](./kc/K2Overlay.vue)

`遮罩` 组件，可快速设置一定的样式，支持跨Dom结构进行渲染，详情可以看该组件的 props，提供默认插槽
与`K3Overlay`拥有完全相同的props

### [K3Overlay](./kc/K3Overlay3.vue)

`遮罩` 组件，可快速设置一定的样式，支持跨Dom结构进行渲染，详情可以看该组件的 props，提供默认插槽
与`K2Overlay`拥有完全相同的props

### [K2Sheet](./kc/K2Sheet.vue)

`强化版 div` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

### [K3Sheet](./kc/K3Sheet.vue)

`强化版 div` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽

### [KStyle](./kc/KStyle.vue)

`快捷样式表` 组件，提供大量易于记忆的常用样式切片，详情可以看该组件的 style 标签，提供默认插槽，
一些布局组件也用到了这里面的样式类，比如 `KBtn` 的默认阴影效果。
