/*
 * @Author: your name
 * @Date: 2021-05-24 17:43:26
 * @LastEditTime: 2021-05-24 17:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swZHCZRoutes.js
 */

const swZHCZRoutes = [
  /** SW404 ZHCZ **/
  { // 智慧车站
    path: '/home/SW404_ZHCZ',
    name: 'SW404_ZHCZ',
    component: () => import('@/views/sw404/SW404_ZHCZ.vue')
  }
]
export {
  swZHCZRoutes
}
