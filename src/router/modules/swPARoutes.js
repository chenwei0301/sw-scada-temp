/*
 * @Author: your name
 * @Date: 2021-05-24 17:15:27
 * @LastEditTime: 2021-05-24 17:15:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swPARoutes.js
 */
const swPARoutes = [
  /** SW4xx PA **/
  { // 广播系统 station
    path: '/home/PA_STATION',
    name: 'PA_STATION',
    component: () => import('@/components/PaStation/PaStation.vue')
  },
  { // 广播系统 center
    path: '/home/PA_CENTER',
    name: 'PA_CENTER',
    component: () => import('@/components/PaCenter/PaCenter.vue')
  }
]
export {
  swPARoutes
}
