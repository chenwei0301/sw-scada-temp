/*
 * @Author: your name
 * @Date: 2021-05-24 17:11:32
 * @LastEditTime: 2021-06-08 16:12:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\sw404BASRoutes.js
 */
const swBASRoutes = [
/** SW404 BAS **/
  { // 隧道通风系统
    path: '/home/SW404_BAS_TunnelSYS',
    name: 'SW404_BAS_TunnelSYS',
    component: () => import('@/views/sw404/SW404_BAS_TunnelSYS.vue')
  },
  { // 大系统
    path: '/home/SW404_BAS_BigSYS',
    name: 'SW404_BAS_BigSYS',
    component: () => import('@/views/sw404/SW404_BAS_BigSYS.vue')
  },
  { // 小系统K1
    path: '/home/SW404_BAS_LittleSYS_k1',
    name: 'SW404_BAS_LittleSYS_k1',
    component: () => import('@/views/sw404/SW404_BAS_LittleSYS_k1.vue')
  },
  { // 电扶梯
    path: '/home/SW404_BAS_ELS',
    name: 'SW404_BAS_ELS',
    component: () => import('@/views/sw404/SW404_BAS_ELS.vue')
  },
  { // 冷水系统
    path: '/home/SW404_BAS_Coldwater',
    name: 'SW404_BAS_Coldwater',
    component: () => import('@/views/sw404/SW404_BAS_Coldwater.vue')
  },
  { // EPS系统
    path: '/home/SW404_BAS_EPS',
    name: 'SW404_BAS_EPS',
    component: () => import('@/views/sw404/SW404_BAS_EPS.vue')
  },
  { // 给排水系统
    path: '/home/SW404_BAS_PAD',
    name: 'SW404_BAS_PAD',
    component: () => import('@/views/sw404/SW404_BAS_PAD.vue')
  },
  { // 模式表
    path: '/home/basMode',
    name: 'BASMode',
    component: () => import('@/components/BASMode/BASMode.vue')
  },
  { // 时间表
    path: '/home/basTime',
    name: 'BASTime',
    component: () => import('@/components/BASTime/BASTime.vue')
  },
  { // 传感器
    path: '/home/SW404_BAS_THHello',
    name: 'SW404_BAS_THHello',
    component: () => import('@/views/sw404/SW404_BAS_THHello.vue')
  }
]
export {
  swBASRoutes
}
