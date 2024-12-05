import Vue from 'vue'
import App from './App.vue'
import {Ripple, Scroll} from '../../kc/directive/index.js'

Vue.directive('ripple',Ripple)
Vue.directive('scroll',Scroll)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
