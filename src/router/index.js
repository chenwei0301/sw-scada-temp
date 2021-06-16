/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-06-16 11:32:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoadingBar } from 'view-design'

import { swBaseRoutes } from '@/router/modules/swBaseRoutes'
// import { swBASRoutes } from '@/router/modules/swBASRoutes'

Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push

// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'login' },
    alwaysShow: true,
    component: () => import('@/views/Base/OA_Login.vue')
  },
  {
    path: '/gedi',
    name: 'gedi',
    meta: { title: 'gedi', icon: '' },
    alwaysShow: true,
    component: () => import('@/views/gedi.vue'),
    children: []
  },
  {
    path: '/edit',
    name: 'Edit',
    meta: { title: 'edit', icon: '' },
    alwaysShow: true,
    component: () => import('@/views/Edit.vue'),
    children: []
  },
  {
    path: '/vdr',
    name: 'VDR',
    meta: { title: 'VDR', icon: '' },
    alwaysShow: true,
    component: () => import('@/views/VDR.vue'),
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
      ...swBaseRoutes
    ]
  }
]

// export const asyncRoutes = [
//   {
//     path: '/home',
//     name: 'Home',
//     meta: { title: '主页', icon: '' },
//     alwaysShow: true,
//     component: () => import('@/views/Home.vue'),
//     redirect: '/home/main',
//     children: [
//       ...swBaseRoutes,
//       ...swBASRoutes
//     ]
//   }
// ]

const router = new VueRouter({
  routes: constantRoutes,
  mode: 'hash'
})

router.beforeEach(async (to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  LoadingBar.start()
  // console.log('from:', from)
  // console.log('to:', to)
  // if (from.path === '/') {
  // }
  next() // 执行进入路由，如果不写就不会进入目标页
})

router.afterEach((to, from) => {
  LoadingBar.finish()
  // if (to.meta.title) { // 判断是否有标题
  //   document.title = to.meta.title
  // }
})

router.selfaddRoutes = function (params) {
  router.matcher = new VueRouter({
    mode: 'hash'
  }).matcher;
  router.addRoutes(params)
}

export default router
