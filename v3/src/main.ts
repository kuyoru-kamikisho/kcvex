import { createApp } from 'vue'
import App from './App.vue'
import {Ripple} from '../../kc/v3/directive'

const app = createApp(App);
app.directive('ripple', Ripple)
app.mount('#app')
