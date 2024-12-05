import { createApp } from 'vue'
import App from './App.vue'
import {Ripple,Scroll} from '../../kc/directive/index.js'

const app = createApp(App);
app.directive('ripple', Ripple)
app.directive('scroll', Scroll)
app.mount('#app')
