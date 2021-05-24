/*
 * @Author: your name
 * @Date: 2021-05-24 17:34:30
 * @LastEditTime: 2021-05-24 17:34:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swATSRoutes.js
 */
const swATSRoutes = [
  /** SW400 ATS **/
  { // 信号系统
    path: '/home/SW400_ATS_1',
    name: 'SW400_ATS_1',
    component: () => import('@/views/sw400/SW400_ATS_1.vue')
  }
]
export {
  swATSRoutes
}
