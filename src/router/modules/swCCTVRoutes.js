/*
 * @Author: your name
 * @Date: 2021-05-24 17:29:50
 * @LastEditTime: 2021-05-24 17:48:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swCCTVRoutes.js
 */
const swCCTVRoutes = [
  /** SW4xx CCTV **/
  { // 视频监控 station
    path: '/home/CCTV_STATION',
    name: 'CCTV_STATION',
    component: () => import(/* webpackChunkName: "CCTV_STATION" */'@/components/CctvStation/CctvStation.vue')
  },
  { // 视频监控 center
    path: '/home/CCTV_CENTER',
    name: 'CCTV_CENTER',
    component: () => import(/* webpackChunkName: "CCTV_CENTER" */'@/components/CctvCenter/CctvCenter.vue')
  }
]
export {
  swCCTVRoutes
}
