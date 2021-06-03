/*
 * @Author: your name
 * @Date: 2021-05-24 17:03:04
 * @LastEditTime: 2021-05-28 17:44:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\router\modules\tabBarRoutes.js
 */
const swTabBarRoutes = [
  /** tabBar **/
  { // 角色管理
    path: '/home/UserManager',
    name: 'UserManager',
    meta: { title: '角色管理', icon: '' },
    component: () => import('@/components/UserManager/UserManager.vue')
  },
  { // 权限管理
    path: '/home/RoleManager',
    name: 'RoleManager',
    meta: { title: '权限管理', icon: '' },
    component: () => import('@/components/RoleManager/RoleManager.vue')
  },
  { // 权限移交
    path: '/home/TransferManager',
    name: 'TransferManager',
    meta: { title: '权限移交', icon: '' },
    component: () => import('@/components/TransferManager/TransferManager.vue')
  },
  { // 联动编辑
    path: '/home/LinkManager',
    name: 'LinkManager',
    meta: { title: '联动编辑', icon: '' },
    component: () => import('@/components/LinkManager/LinkManager.vue')
  },
  { // 联动执行
    path: '/home/LinkAction',
    name: 'LinkAction',
    meta: { title: '联动执行', icon: '' },
    component: () => import('@/components/LinkAction/LinkAction.vue')
  },
  { // 实时报警
    path: '/home/OnlineAlert',
    name: 'OnlineAlert',
    meta: { title: '实时报警', icon: '' },
    component: () => import('@/components/OnlineAlert/OnlineAlert.vue')
  },
  { // 历史报警
    path: '/home/HistroyAlert',
    name: 'HistroyAlert',
    meta: { title: '历史报警', icon: '' },
    component: () => import('@/components/HistroyAlert/HistroyAlert.vue')
  },
  { // 禁止报警
    path: '/home/BanningAlert',
    name: 'BanningAlert',
    meta: { title: '禁止报警', icon: '' },
    component: () => import('@/components/BanningAlert/BanningAlert.vue')
  },
  { // 运行日志
    path: '/home/RunningLog',
    name: 'RunningLog',
    meta: { title: '运行日志', icon: '' },
    component: () => import('@/components/RunningLog/RunningLog.vue')
  },
  { // 操作日志
    path: '/home/OpreateLog',
    name: 'OpreateLog',
    meta: { title: '操作日志', icon: '' },
    component: () => import('@/components/OpreateLog/OpreateLog.vue')
  },
  { // 目标图
    path: '/home/GoldPicture',
    name: 'GoldPicture',
    meta: { title: '目标图', icon: '' },
    component: () => import('@/components/GoldPicture/GoldPicture.vue')
  }
]

export {
  swTabBarRoutes
}
