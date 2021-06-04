/*
 * @Author: your name
 * @Date: 2021-06-04 16:59:53
 * @LastEditTime: 2021-06-04 17:31:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\index.js
 */
import Vue from 'vue'
import '@/plugins/modules/vue-toast-notification'
import '@/plugins/modules/vue2-filters'
import '@/plugins/modules/vue-layer'
import '@/plugins/modules/element'
import '@/plugins/modules/styles'
import '@/plugins/modules/v-ajax'
import '@/plugins/modules/moment'
import '@/plugins/modules/axios'
import '@/plugins/modules/mysql'
import '@/plugins/modules/qs'
import '@/filters/filters'
import '@/plugins/modules/vue-draggable-resizable'

import prototype from '@/plugins/modules/prototype'

Vue.use(prototype)
