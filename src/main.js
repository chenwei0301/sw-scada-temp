/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-07-19 13:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\main.js
 */
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/index'
import electron from 'electron'
import path from 'path'
// import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.prototype.$electron = electron
Vue.prototype.$path = path

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
