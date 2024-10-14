适用于 [vue2](https://v2.vuejs.org/) 和 [vue3](https://vuejs.org/) 的 `VExpandTransition` 等 组件

## 基础使用

基于模块化开发：

   1. 首先，引入组件
      ```javascript
      // 适用于 vue2
      import VExpandTransition from 'kcvex/kc/K2ExpandTransition.vue'
      
      // 适用于 vue3
      import VExpandTransition from 'kcvex/kc/K3ExpandTransition.vue'
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

适用于任何 vue 版本 的`抽屉伸缩展开渐变动画组件`，提供默认插槽

### [K3ExpandTransition](./kc/K3ExpandTransition.vue)

支持setup 的任意vue版本 的`抽屉伸缩展开渐变动画组件`，提供默认插槽

### [KBtn](./kc/KBtn.vue)

`强化版 button` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽，适用于 vue2、vue3

### [KDivider](./kc/KDivider.vue)

`分割线` 组件，可快速设置一定的样式，详情可以看该组件的 props，适用于 vue2、vue3

### [KOverlay](./kc/KOverlay.vue)

`遮罩` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽，适用于 vue2、vue3

### [KSheet](./kc/KSheet.vue)

`强化版 div` 组件，可快速设置一定的样式，详情可以看该组件的 props，提供默认插槽，适用于 vue2、vue3

### [KStyle](./kc/KStyle.vue)

`快捷样式表` 组件，提供大量易于记忆的常用样式切片，详情可以看该组件的 style 标签，提供默认插槽，适用于 vue2、vue3

