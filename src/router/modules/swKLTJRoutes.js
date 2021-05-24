/*
 * @Author: your name
 * @Date: 2021-05-24 17:42:31
 * @LastEditTime: 2021-05-24 17:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swKLTJRoutes.js
 */
const swKLTJRoutes = [
  /** SW4xx KLTJ **/
  { // 客流统计
    path: '/home/KLTJ',
    name: 'KLTJ',
    component: () => import('@/components/Kltj/Kltj.vue')
  }
]
export {
  swKLTJRoutes
}
