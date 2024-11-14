import Vue from 'vue'
import App from './App.vue'
import {Ripple} from '../../kc/directive'

Vue.directive('ripple',Ripple)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
