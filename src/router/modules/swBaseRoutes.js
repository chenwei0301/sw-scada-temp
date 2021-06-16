/*
 * @Author: your name
 * @Date: 2021-05-24 17:16:48
 * @LastEditTime: 2021-06-15 16:09:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swBaseRoutes.js
 */
const swBaseRoutes = [
  { // 路线图
    path: '/home/main',
    name: 'HomeMain',
    component: () => import('@/components/HomeMain/HomeMain.vue')
  }
]
export {
  swBaseRoutes
}
