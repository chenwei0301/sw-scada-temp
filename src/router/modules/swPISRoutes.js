/*
 * @Author: your name
 * @Date: 2021-05-24 17:32:06
 * @LastEditTime: 2021-05-24 17:32:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swPISRoutes.js
 */
const swPISRoutes = [
  /** SW4xx PIS **/
  { // 乘客信息
    path: '/home/PIS',
    name: 'PIS',
    component: () => import('@/components/Pis/Pis.vue')
  }
]
export {
  swPISRoutes
}
