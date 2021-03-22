import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式
import "../node_modules/vue-easytable/libs/theme-default/index.css";
// 引入组件库
import {
  VeTable,
  VePagination,
  VeIcon,
  VeLoading,
  VeLocale
} from "vue-easytable";

Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
