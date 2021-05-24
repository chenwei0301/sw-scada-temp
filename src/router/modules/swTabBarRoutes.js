/*
 * @Author: your name
 * @Date: 2021-05-24 17:03:04
 * @LastEditTime: 2021-05-24 17:30:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\tabBarRoutes.js
 */
const swTabBarRoutes = [
  /** tabBar **/
  { // 角色管理
    path: '/home/UserManager',
    name: 'UserManager',
    component: () => import('@/components/UserManager/UserManager.vue')
  },
  { // 权限管理
    path: '/home/RoleManager',
    name: 'RoleManager',
    component: () => import('@/components/RoleManager/RoleManager.vue')
  },
  { // 权限移交
    path: '/home/TransferManager',
    name: 'TransferManager',
    component: () => import('@/components/TransferManager/TransferManager.vue')
  },
  { // 联动编辑
    path: '/home/LinkManager',
    name: 'LinkManager',
    component: () => import('@/components/LinkManager/LinkManager.vue')
  },
  { // 联动执行
    path: '/home/LinkAction',
    name: 'LinkAction',
    component: () => import('@/components/LinkAction/LinkAction.vue')
  },
  { // 实时报警
    path: '/home/OnlineAlert',
    name: 'OnlineAlert',
    component: () => import('@/components/OnlineAlert/OnlineAlert.vue')
  },
  { // 历史报警
    path: '/home/HistroyAlert',
    name: 'HistroyAlert',
    component: () => import('@/components/HistroyAlert/HistroyAlert.vue')
  },
  { // 禁止报警
    path: '/home/BanningAlert',
    name: 'BanningAlert',
    component: () => import('@/components/BanningAlert/BanningAlert.vue')
  },
  { // 运行日志
    path: '/home/RunningLog',
    name: 'RunningLog',
    component: () => import('@/components/RunningLog/RunningLog.vue')
  },
  { // 操作日志
    path: '/home/OpreateLog',
    name: 'OpreateLog',
    component: () => import('@/components/OpreateLog/OpreateLog.vue')
  },
  { // 目标图
    path: '/home/GoldPicture',
    name: 'GoldPicture',
    component: () => import('@/components/GoldPicture/GoldPicture.vue')
  }
]

export {
  swTabBarRoutes
}
