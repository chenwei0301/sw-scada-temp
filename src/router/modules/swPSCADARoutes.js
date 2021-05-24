/*
 * @Author: your name
 * @Date: 2021-05-24 17:06:19
 * @LastEditTime: 2021-05-24 17:26:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\SW400_PSCADARoutes.js
 */
const swPSCADARoutes = [
/** SW404 PSCADA **/
  { // 一次系统图
    path: '/home/SW404_PSCADA_OnceSystem',
    name: 'SW404_PSCADA_OnceSystem',
    component: () => import('@/views/sw400/SW404_PSCADA_OnceSystem.vue')
  },
  { // 1500V顺控
    path: '/home/SW400_PSCADA_1500VSOC',
    name: 'SW400_PSCADA_1500VSOC',
    component: () => import('@/views/sw400/SW400_PSCADA_1500VSOC.vue')
  }
]
export {
  swPSCADARoutes
}
