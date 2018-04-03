'use strict';

// 页面
import Test from '@src/pages/test.vue';
import Cal from '@src/pages/cal.vue';
import Compose from '@src/pages/compose.vue';

const routes = [
  { path: '/test', component: Test },
  { path: '/cal', component: Cal },
  { path: '/compose', component: Compose}
];

export default routes;