/*
 * @Author: your name
 * @Date: 2021-05-24 17:16:48
 * @LastEditTime: 2021-05-24 17:18:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swBaseRoutes.js
 */
// import { APPTITLE } from '@/api/appConfig.js'
const swBaseRoutes = [
  { // 路线图
    path: '/home/main',
    name: 'HomeMain',
    // meta: { title: APPTITLE },
    component: () => import('@/components/HomeMain/HomeMain.vue')
  }
]
export {
  swBaseRoutes
}
