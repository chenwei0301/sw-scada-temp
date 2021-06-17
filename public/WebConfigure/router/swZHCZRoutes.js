/*
 * @Author: your name
 * @Date: 2021-06-17 16:03:22
 * @LastEditTime: 2021-06-17 16:07:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\public\WebConfigure\router\swZHCZRoutes.js
 */

const swZHCZRoutes = [
  /** SW404 ZHCZ **/
  { // 智慧车站
    path: '/home/SW404_ZHCZ',
    name: 'SW404_ZHCZ',
    // component: () => import('@/views/sw404/SW404_ZHCZ.vue')
    component: () => import('@/../public/WebConfigure/view/SW404_ZHCZ.vue')
  }
]
export {
  swZHCZRoutes
}
