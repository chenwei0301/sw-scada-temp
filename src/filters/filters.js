/*
 * @Author: your name
 * @Date: 2021-05-24 15:25:19
 * @LastEditTime: 2021-05-24 17:59:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\filters\filters.js
 */
import Vue from 'vue'
// 导入自定义全局过滤器
import * as filters from '@/filters/index'
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
