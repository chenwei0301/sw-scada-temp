/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-05-28 17:48:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { APPTITLE } from '@/api/appConfig.js'
// import Home from '@/views/Home.vue'

import { swBaseRoutes } from '@/router/modules/swBaseRoutes'
import { swTabBarRoutes } from '@/router/modules/swTabBarRoutes'
import { swPSCADARoutes } from '@/router/modules/swPSCADARoutes'
import { swBASRoutes } from '@/router/modules/swBASRoutes'
import { swPARoutes } from '@/router/modules/swPARoutes'
import { swAFCRoutes } from '@/router/modules/swAFCRoutes'
import { swCCTVRoutes } from '@/router/modules/swCCTVRoutes'
import { swPISRoutes } from '@/router/modules/swPISRoutes'
import { swPSDRoutes } from '@/router/modules/swPSDRoutes'
import { swATSRoutes } from '@/router/modules/swATSRoutes'
import { swUPSRoutes } from '@/router/modules/swUPSRoutes'
import { swALMRoutes } from '@/router/modules/swALMRoutes'
import { swZHJKRoutes } from '@/router/modules/swZHJKRoutes'
import { swKLTJRoutes } from '@/router/modules/swKLTJRoutes'
import { swZHCZRoutes } from '@/router/modules/swZHCZRoutes'

Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push

// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   meta: { title: APPTITLE },
  //   component: () => import('@/views/Login.vue')
  // },
  // {
  //   path: '/',
  //   name: 'Function',
  //   meta: { title: APPTITLE },
  //   component: () => import('@/views/Function.vue')
  // },
  {
    path: '/',
    name: 'gedi',
    meta: { title: APPTITLE, icon: '' },
    alwaysShow: true,
    component: () => import('@/views/Edit.vue'),
    // component: () => import('@/views/VDR.vue'),
    // component: () => import('@/views/gedi.vue'),
    redirect: '',
    children: []
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: '主页', icon: '' },
    alwaysShow: true,
    component: () => import('@/views/Home.vue'),
    redirect: '/home/main',
    children: [
      ...swBaseRoutes,
      ...swTabBarRoutes,
      ...swPSCADARoutes,
      ...swBASRoutes,
      ...swPARoutes,
      ...swAFCRoutes,
      ...swCCTVRoutes,
      ...swPISRoutes,
      ...swPSDRoutes,
      ...swATSRoutes,
      ...swUPSRoutes,
      ...swALMRoutes,
      ...swZHJKRoutes,
      ...swKLTJRoutes,
      ...swZHCZRoutes
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  next() // 执行进入路由，如果不写就不会进入目标页
})

router.afterEach((to, from) => {
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title
  }
})

export default router
