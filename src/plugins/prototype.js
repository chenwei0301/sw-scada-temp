/*
 * @Author: your name
 * @Date: 2021-05-24 15:16:00
 * @LastEditTime: 2021-05-24 15:19:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\prototype.js
 */
export default {
  install (Vue) {
    Vue.prototype.getToken = getToken
  }
}

var getToken = function () {
  console.log('getToken')
}
