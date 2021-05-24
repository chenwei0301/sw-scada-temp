/*
 * @Author: your name
 * @Date: 2021-05-24 17:35:23
 * @LastEditTime: 2021-05-24 17:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swUPSRoutes.js
 */
const swUPSRoutes = [
  /** SW404 UPS **/
  { // UPS
    path: '/home/SW404_UPS',
    name: 'SW404_UPS',
    component: () => import('@/views/sw404/SW404_UPS.vue')
  },
  { // 巡检仪
    path: '/home/SW404_UPS_XJY',
    name: 'SW404_UPS_XJY',
    component: () => import('@/views/sw404/SW404_UPS_XJY.vue')
  }
]
export {
  swUPSRoutes
}
