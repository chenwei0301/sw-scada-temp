/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-05-26 09:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\main.js
 */
// import devtools from '@vue/devtools'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/plugins/vue-toast-notification'
import '@/plugins/vue2-filters'
import '@/plugins/vue-layer'
import '@/plugins/element'
import '@/plugins/styles'
import '@/plugins/v-ajax'
import '@/plugins/moment'
import '@/plugins/axios'
import '@/plugins/mysql'
import '@/plugins/qs'
import '@/filters/filters'
import prototype from '@/plugins/prototype'

import '@/plugins/vue-draggable-resizable'

Vue.use(prototype)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
