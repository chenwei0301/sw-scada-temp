/*
 * @Author: your name
 * @Date: 2021-05-24 17:39:16
 * @LastEditTime: 2021-05-24 17:39:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swALMRoutes.js
 */
const swALMRoutes = [
  /** SW400 ALM **/
  { // 集中告警
    path: '/home/SW400_ALM_1',
    name: 'SW400_ALM_1',
    component: () => import('@/views/sw400/SW400_ALM_1.vue')
  }
]
export {
  swALMRoutes
}
