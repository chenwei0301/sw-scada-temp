/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-03-02 10:16:50
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
    localInfo: {}
  },
  getters: {

  },
  mutations: {
    setUserRole (state, data) {
      state.userRole = data;
    },
    setLocalInfo (state, data) {
      state.localInfo = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
