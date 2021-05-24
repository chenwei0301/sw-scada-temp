/*
 * @Author: your name
 * @Date: 2021-05-24 17:11:32
 * @LastEditTime: 2021-05-24 17:25:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\sw404BASRoutes.js
 */
const swBASRoutes = [
/** SW404 BAS **/
  { // 隧道通风系统
    path: '/home/SW404_BAS_TunnelSYS',
    name: 'SW404_BAS_TunnelSYS',
    component: () => import('@/views/sw404/SW404_BAS_TunnelSYS.vue')
  },
  { // 大系统
    path: '/home/SW404_BAS_BigSYS',
    name: 'SW404_BAS_BigSYS',
    component: () => import('@/views/sw404/SW404_BAS_BigSYS.vue')
  },
  { // 小系统K1
    path: '/home/SW404_BAS_LittleSYS_k1',
    name: 'SW404_BAS_LittleSYS_k1',
    component: () => import('@/views/sw404/SW404_BAS_LittleSYS_k1.vue')
  },
  { // 电扶梯
    path: '/home/SW404_BAS_ELS',
    name: 'SW404_BAS_ELS',
    component: () => import('@/views/sw404/SW404_BAS_ELS.vue')
  },
  { // 冷水系统
    path: '/home/SW404_BAS_Coldwater',
    name: 'SW404_BAS_Coldwater',
    component: () => import('@/views/sw404/SW404_BAS_Coldwater.vue')
  },
  { // EPS系统
    path: '/home/SW404_BAS_EPS',
    name: 'SW404_BAS_EPS',
    component: () => import('@/views/sw404/SW404_BAS_EPS.vue')
  },
  { // 给排水系统
    path: '/home/SW404_BAS_PAD',
    name: 'SW404_BAS_PAD',
    component: () => import('@/views/sw404/SW404_BAS_PAD.vue')
  },
  { // 模式表
    path: '/home/basMode',
    name: 'BASMode',
    component: () => import('@/components/BASMode/BASMode.vue')
  },
  { // 时间表
    path: '/home/basTime',
    name: 'BASTime',
    component: () => import('@/components/BASTime/BASTime.vue')
  },
  { // 传感器
    path: '/home/SW404_BAS_THHello',
    name: 'SW404_BAS_THHello',
    component: () => import('@/views/sw404/SW404_BAS_THHello.vue')
  },

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
  swBASRoutes
}
