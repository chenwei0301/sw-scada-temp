/*
 * @Author: your name
 * @Date: 2021-05-20 09:02:52
 * @LastEditTime: 2021-05-20 09:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\vue-layer.js
 */
import Vue from 'vue'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'

Vue.prototype.$layer = layer(Vue)
// Vue.prototype.$layer = layer({
//   msgtime: 3 // 目前只有一项，即msg方法的默认消失时间，单位：秒
// })
