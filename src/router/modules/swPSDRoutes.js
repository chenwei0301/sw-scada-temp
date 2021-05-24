/*
 * @Author: your name
 * @Date: 2021-05-24 17:33:39
 * @LastEditTime: 2021-05-24 17:33:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swPSDRoutes.js
 */
const swPSDRoutes = [
  /** SW404 PSD **/
  { // 站台门
    path: '/home/SW404_PSD',
    name: 'SW404_PSD',
    component: () => import('@/views/sw404/SW404_PSD.vue')
  }
]
export {
  swPSDRoutes
}
