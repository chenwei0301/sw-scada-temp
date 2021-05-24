/*
 * @Author: your name
 * @Date: 2021-05-24 17:20:10
 * @LastEditTime: 2021-05-24 17:26:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swAFCRoutes.js
 */
const swAFCRoutes = [
/** SW404 AFC **/
  { // 售检票
    path: '/home/SW404_AFC',
    name: 'SW404_AFC',
    component: () => import('@/views/sw404/SW404_AFC.vue')
  }
]
export {
  swAFCRoutes
}
