import Vue from 'vue';
import App from './App.vue';
import router from './router/router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import httpRequest from './utils/httpRequest' // api: https://github.com/axios/axios


// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法


Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
