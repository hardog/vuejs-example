'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
  INCR, DECR, PAYLOAD, USER
} from './types';

// 启用组件
Vue.use(Vuex);

const stores = new Vuex.Store({
  state: {
    count: 0,
    pload: {},
    user: {}
  },
  mutations: {
    [INCR]: state => state.count++,
    [DECR]: state => state.count--,
    [PAYLOAD](state, payload){
      state.pload = JSON.stringify(payload);
    },
    [USER](state, user){
      state.user = user;
    }
  },
  getters: {
    appendHead(state){
      return `hardog, ${state.count}`;
    }
  },
  actions: {
    query({commit}, name){
      axios
      .get(`https://cnodejs.org/api/v1/user/${name}`)
      .then((d) => {
        let data = (d.data || {}).data;
        commit('user', {
          name: data.loginname,
          avator: data.avatar_url
        });
      })
      .catch((e) => {
        commit('user', e);
      });
    }
  }
});


export default stores;