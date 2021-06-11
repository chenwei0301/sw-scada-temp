/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-06-11 15:34:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoadingBar } from 'view-design'
// import sRouter from '@/api/db/s_router'

// import { swBaseRoutes } from '@/router/modules/swBaseRoutes'
// import { swTabBarRoutes } from '@/router/modules/swTabBarRoutes'
// import { swPSCADARoutes } from '@/router/modules/swPSCADARoutes'
// import { swBASRoutes } from '@/router/modules/swBASRoutes'
// import { swFASRoutes } from '@/router/modules/swFASRoutes'
// import { swPARoutes } from '@/router/modules/swPARoutes'
// import { swAFCRoutes } from '@/router/modules/swAFCRoutes'
// import { swCCTVRoutes } from '@/router/modules/swCCTVRoutes'
// import { swPISRoutes } from '@/router/modules/swPISRoutes'
// import { swPSDRoutes } from '@/router/modules/swPSDRoutes'
// import { swATSRoutes } from '@/router/modules/swATSRoutes'
// import { swUPSRoutes } from '@/router/modules/swUPSRoutes'
// import { swALMRoutes } from '@/router/modules/swALMRoutes'
// import { swZHJKRoutes } from '@/router/modules/swZHJKRoutes'
// import { swKLTJRoutes } from '@/router/modules/swKLTJRoutes'
// import { swZHCZRoutes } from '@/router/modules/swZHCZRoutes'

Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push

// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// var items = []
// async function UnRegisteredRouterList () {
//   var ret = await sRouter._UnRegisteredRouter()
//   for (let index = 0; index < ret.length; index++) {
//     items.push(ret[index])
//   }
// }
// UnRegisteredRouterList()

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'login' },
    component: () => import('@/views/Login.vue')
  },
  // {
  //   path: '/',
  //   name: 'Function',
  //   meta: { title: APPTITLE },
  //   component: () => import(@/views/Function.vue')
  // },
  {
    path: '/',
    name: 'gedi',
    meta: { title: 'gedi', icon: '' },
    alwaysShow: true,
    component: () => import('@/views/Edit.vue'),
    // component: (resolve) => require(['@/views/Edit.vue'], resolve),
    // component: () => import('@/views/gedi.vue'),
    // redirect: '/gedi',
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
  }
  // ,
  // {
  //   path: '/home',
  //   name: 'Home',
  //   meta: { title: '主页', icon: '' },
  //   alwaysShow: true,
  //   component: () => import('@/views/Home.vue'),
  //   // redirect: '/home/main',
  //   children: []
  // }
]

export const asyncRoutes = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '主页', icon: '' },
    alwaysShow: true,
    component: () => import('@/views/Home.vue'),
    // redirect: '/home/main',
    children: []
  }
]

const router = new VueRouter({
  routes: constantRoutes,
  mode: 'hash'
})

router.beforeEach(async (to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  LoadingBar.start()
  console.log('from:', from)
  console.log('to:', to)
  // if (from.path === '/') {
  //   var ret = await sRouter._UnRegisteredRouter()
  //   console.log('ret:', ret)
  //   constantRoutes[constantRoutes.length - 1].children = ret
  //   console.log('constantRoutes:', constantRoutes)
  //   // 动态添加路由
  //   // router.addRoutes(constantRoutes)
  //   router.selfaddRoutes(constantRoutes)
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
