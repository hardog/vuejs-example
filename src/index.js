'use strict';

import Vue from 'vue';
import App from './app.vue';
import Router from './routes';
import Stores from './store';

new Vue({
  el: '#app',
  router: Router,
  store: Stores,
  render: h => h(App),
});
