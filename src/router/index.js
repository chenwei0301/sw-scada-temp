/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-06-09 17:25:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import sRouter from '@/api/db/s_router'

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

const items = [{
  // 冷水系统
  path: '/home/SW404_BAS_Coldwater',
  name: 'SW404_BAS_Coldwater',
  component: () => import('@/views/sw404/SW404_BAS_Coldwater.vue')
},
{ // 角色管理
  path: '/home/UserManager',
  name: 'UserManager',
  meta: { title: '角色管理', icon: '' },
  component: () => import('@/components/UserManager/UserManager.vue')
}]
// const UnRegisteredRouterList = async function () {
//   var ret = await sRouter.UnRegisteredRouter()
//   // for (let index = 0; index < ret.length; index++) {
//   //   const element = ret[index];
//   //   items.push(element)
//   // }
//   // return items
//   console.log(ret)
//   return ret
// }

async function UnRegisteredRouterList () {
  var ret = await sRouter.UnRegisteredRouter()
  for (let index = 0; index < ret.length; index++) {
    const element = ret[index];
    items.push(element)
  }
  // return items
  console.log('test', ret)
  return items
}
UnRegisteredRouterList()

export const routes = [
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
    redirect: '',
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
    // redirect: '/home/main',
    children: [
      ...items
    ]
    // children: []
    // children: UnRegisteredRouterList
    // children: [
    //   ...swBaseRoutes,
    //   ...swTabBarRoutes,
    //   ...swPSCADARoutes,
    //   ...swBASRoutes,
    //   ...swFASRoutes,
    //   ...swPARoutes,
    //   ...swAFCRoutes,
    //   ...swCCTVRoutes,
    //   ...swPISRoutes,
    //   ...swPSDRoutes,
    //   ...swATSRoutes,
    //   ...swUPSRoutes,
    //   ...swALMRoutes,
    //   ...swZHJKRoutes,
    //   ...swKLTJRoutes,
    //   ...swZHCZRoutes
    // ]
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

router.selfaddRoutes = function (params) {
  router.matcher = new VueRouter().matcher;
  router.addRoutes(params)
  // router.addRoute(params)
}

export default router
