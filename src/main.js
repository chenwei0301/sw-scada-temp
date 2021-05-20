/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-05-20 09:31:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\main.js
 */
// import devtools from '@vue/devtools'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/plugins/vue-layer'
import '@/plugins/element'
import '@/plugins/assets'
import '@/plugins/v-ajax'
import '@/plugins/moment'
import '@/plugins/axios'
import '@/plugins/mysql'
import '@/plugins/qs'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
