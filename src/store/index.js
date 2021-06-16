/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-06-16 10:58:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userRole: [],
    sysInfo: {}
  },
  getters: {

  },
  mutations: {
    setUserRole (state, data) {
      state.userRole = data;
    },
    setSysInfo (state, data) {
      state.sysInfo = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
