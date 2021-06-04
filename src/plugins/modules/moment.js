/*
 * @Author: your name
 * @Date: 2021-05-20 08:57:09
 * @LastEditTime: 2021-06-03 16:25:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\moment.js
 */
import Vue from 'vue'
import Moment from 'moment'
import 'moment/locale/zh-cn'

Vue.prototype.$moment = Moment

// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return Moment(dataStr).format(pattern);
})

Vue.filter('toDate', function (dataStr, format = 'YYYY-MM-DD') {
  return Moment(dataStr).format(format)
  // return Moment(dataStr).format(format || 'YYYY-MM-DD')
})
// Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss dddd') {
//   return Moment(dataStr).format(pattern);
// })
