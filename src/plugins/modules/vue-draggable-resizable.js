/*
 * @Author: your name
 * @Date: 2021-05-26 09:07:02
 * @LastEditTime: 2021-07-02 17:00:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\vue-draggable-resizable.js
 */
import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

// 自定义样式
import '@/styles/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
