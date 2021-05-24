/*
 * @Author: your name
 * @Date: 2021-05-24 17:40:42
 * @LastEditTime: 2021-05-24 17:41:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swZHJKRoutes.js
 */
const swZHJKRoutes = [
  /** SW404 ZHJK **/
  { // 综合监控
    path: '/home/SW404_ZHJK',
    name: 'SW404_ZHJK',
    component: () => import('@/views/sw404/SW404_ZHJK.vue')
  }
]
export {
  swZHJKRoutes
}
