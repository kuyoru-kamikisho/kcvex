小提示：新的版本已经迁移到 [kcvex](https://www.npmjs.com/package/kcvex)，
然而如果您只需要使用抽屉打开与收缩效果组件，则完全不必使用 `kcvex` 库，
`kcvex` 库里加了一些额外的小组件，比如弹窗遮罩、小卡片、样式专用等小组件，
这些新增的组件可以让您在无需安装其他UI库的情况下快速实现一些布局。

小提示：`kcvex` 库与该版本并不兼容，尽管他们来自同一个仓库，
在 `kcvex` 里面的组件前缀都变成了 `K`，
引入路径也发生了变化。

**该库为适用于 [vue2](https://v2.vuejs.org/) 和 [vue3](https://vuejs.org/) 的 `VExpandTransition` 抽屉组件**

使用方式：

基于模块化开发：

1. 首先，引入组件
   ```javascript
   // 适用于 vue2
   import VExpandTransition from 'vexpandtransition/v2'
   
   // 适用于 vue3 （vue3里面也可以使用v2版本的组件，两者只是在开发形式上有所区别）
   import VExpandTransition from 'vexpandtransition/v3'
   
   // 如果引入失败无法解析 (v2)
   import VExpandTransition from 'vexpandtransition/v2/src/VExpandTransition.vue'
   // 如果引入失败无法解析 (v3)
   import VExpandTransition from 'vexpandtransition/v3/src/VExpandTransition.vue'
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

npm版不支持cdn引入，如果需要，
您可以前往 [github](https://github.com/kuyoru-kamikisho/kcvex/tree/legacy) 页面下载源码进行预构建。