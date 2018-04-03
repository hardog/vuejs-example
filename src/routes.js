'use strict';

import Vue from 'vue';
import vueRouter from 'vue-router';
// 页面
import Test from '@src/pages/test.vue';
import Cal from '@src/pages/cal.vue';
import Compose from '@src/pages/compose.vue';
import Storea from '@src/pages/storea.vue';
import Storeb from '@src/pages/storeb.vue';
import Storec from '@src/pages/storec.vue';

// use的插件不是实例化后的插件
Vue.use(vueRouter);

const routes = [
  { path: '/test', component: Test },
  { path: '/cal', component: Cal },
  { path: '/compose', component: Compose},
  { path: '/storea', component: Storea},
  { path: '/storeb', component: Storeb},
  { path: '/storec', component: Storec}
];

const Router = new vueRouter({
  mode: 'hash',
  routes
});

export default Router;