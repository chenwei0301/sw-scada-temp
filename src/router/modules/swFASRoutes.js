/*
 * @Author: your name
 * @Date: 2021-06-08 16:11:32
 * @LastEditTime: 2021-06-08 16:29:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\swFASRoutes.js
 */
const swFASRoutes = [
  /** SW404 FAS **/
  { // 系统图
    path: '/home/SW404_FAS_System',
    name: 'SW404_FAS_System',
    component: () => import('@/views/sw404/SW404_FAS_System.vue')
  },
  { // 站厅
    path: '/home/SW404_FAS_StationHall',
    name: 'SW404_FAS_StationHall',
    component: () => import('@/views/sw404/SW404_FAS_StationHall.vue')
  },
  { // 站台
    path: '/home/SW404_FAS_PlatForm',
    name: 'SW404_FAS_PlatForm',
    component: () => import('@/views/sw404/SW404_FAS_PlatForm.vue')
  },
  { // 气灭房间
    path: '/home/SW404_FAS_QM_1',
    name: 'SW404_FAS_QM_1',
    component: () => import('@/views/sw404/SW404_FAS_QM_1.vue')
  },
  { // 隧道区间
    path: '/home/SW404_FAS_Tunnel',
    name: 'SW404_FAS_Tunnel',
    component: () => import('@/views/sw404/SW404_FAS_Tunnel.vue')
  },
  { // 感温光纤
    path: '/home/SW404_FAS_Fiber',
    name: 'SW404_FAS_Fiber',
    component: () => import('@/views/sw404/SW404_FAS_Fiber.vue')
  },
  { // 400V强切
    path: '/home/SW404_FAS_QQ',
    name: 'SW404_FAS_QQ',
    component: () => import('@/views/sw404/SW404_FAS_QQ.vue')
  },
  { // 感温电缆
    path: '/home/SW404_FAS_GWDL',
    name: 'SW404_FAS_GWDL',
    component: () => import('@/views/sw404/SW404_FAS_GWDL.vue')
  },
  { // 出入口
    path: '/home/SW404_FAS_Passage_1',
    name: 'SW404_FAS_Passage_1',
    component: () => import('@/views/sw404/SW404_FAS_Passage_1.vue')
  },
  { // 防火分区
    path: '/home/SW404_FAS_FHFQ_1',
    name: 'SW404_FAS_FHFQ_1',
    component: () => import('@/views/sw404/SW404_FAS_FHFQ_1.vue')
  },
  { // 防火阀
    path: '/home/SW404_FAS_FA',
    name: 'SW404_FAS_FA',
    component: () => import('@/views/sw404/SW404_FAS_FA.vue')
  },
  { // 电气火灾
    path: '/home/SW404_FAS_EFMS',
    name: 'SW404_FAS_EFMS',
    component: () => import('@/views/sw404/SW404_FAS_EFMS.vue')
  }
]
export {
  swFASRoutes
}
