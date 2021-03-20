import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// WebSocket封装方法
import * as socketApi from './api/socket'
Vue.prototype.socketApi = socketApi

//import './utils/flexible.js';

Vue.prototype.$store = store
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
