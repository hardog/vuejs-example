'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import {
  INCR, DECR, PAYLOAD
} from './types';

// 启用组件
Vue.use(Vuex);

const stores = new Vuex.Store({
  state: {
    count: 0,
    pload: {}
  },
  mutations: {
    [INCR]: state => state.count++,
    [DECR]: state => state.count--,
    [PAYLOAD](state, payload){
      state.pload = JSON.stringify(payload);
    }
  },
  getters: {
    appendHead(state){
      return `hardog, ${state.count}`;
    }
  }
});


export default stores;