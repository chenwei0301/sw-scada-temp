/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-08-11 17:11:54
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
import '@/directives/drag'
// import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.prototype.$electron = electron
Vue.prototype.$path = path

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
