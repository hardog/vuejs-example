'use strict';

import Vue from 'vue';
import App from './app.vue';
import vueRouter from 'vue-router';
import routes from './routes';

// use的插件不是实例化后的插件
Vue.use(vueRouter);
const Router = new vueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App),
});
