/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-05-19 17:24:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import HomeMain from '@/components/HomeMain/HomeMain.vue'
import { APPTITLE } from '@/api/appConfig.js'

Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push

// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   meta: { title: APPTITLE },
  //   // component: () => import('@/views/Login.vue')
  //   component: () => import('@/views/Function.vue')
  // },
  // {
  //   path: '/',
  //   name: 'Function',
  //   meta: { title: APPTITLE },
  //   component: () => import('@/views/Function.vue')
  // },
  {
    path: '/',
    name: 'UserRole',
    // meta: { title: APPTITLE },
    component: () => import('@/views/Edit.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/main',
    children: [
      { // 路线图
        path: '/home/main',
        name: 'HomeMain',
        meta: { title: APPTITLE },
        component: HomeMain
      },

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
      },

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
      },

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
      },

      /** SW4xx PA **/
      { // 广播系统 station
        path: '/home/PA_STATION',
        name: 'PA_STATION',
        component: () => import('@/components/PaStation/PaStation.vue')
      },
      { // 广播系统 center
        path: '/home/PA_CENTER',
        name: 'PA_CENTER',
        component: () => import('@/components/PaCenter/PaCenter.vue')
      },

      /** SW404 AFC **/
      { // 售检票
        path: '/home/SW404_AFC',
        name: 'SW404_AFC',
        component: () => import('@/views/sw404/SW404_AFC.vue')
      },

      /** SW4xx CCTV **/
      { // 视频监控 station
        path: '/home/CCTV_STATION',
        name: 'CCTV_STATION',
        component: () => import('@/components/CctvStation/CctvStation.vue')
      },
      { // 视频监控 center
        path: '/home/CCTV_CENTER',
        name: 'CCTV_CENTER',
        component: () => import('@/components/CctvCenter/CctvCenter.vue')
      },

      /** SW4xx PIS **/
      { // 乘客信息
        path: '/home/PIS',
        name: 'PIS',
        component: () => import('@/components/Pis/Pis.vue')
      },

      /** SW404 AFC **/
      { // 站台门
        path: '/home/SW404_PSD',
        name: 'SW404_PSD',
        component: () => import('@/views/sw404/SW404_PSD.vue')
      },

      /** SW400 ATS **/
      { // 信号系统
        path: '/home/SW400_ATS_1',
        name: 'SW400_ATS_1',
        component: () => import('@/views/sw400/SW400_ATS_1.vue')
      },

      /** SW404 UPS **/
      { // UPS
        path: '/home/SW404_UPS',
        name: 'SW404_UPS',
        component: () => import('@/views/sw404/SW404_UPS.vue')
      },
      { // 巡检仪
        path: '/home/SW404_UPS_XJY',
        name: 'SW404_UPS_XJY',
        component: () => import('@/views/sw404/SW404_UPS_XJY.vue')
      },

      /** SW400 ALM **/
      { // 集中告警
        path: '/home/SW400_ALM_1',
        name: 'SW400_ALM_1',
        component: () => import('@/views/sw400/SW400_ALM_1.vue')
      },

      /** SW404 ZHJK **/
      { // 综合监控
        path: '/home/SW404_ZHJK',
        name: 'SW404_ZHJK',
        component: () => import('@/views/sw404/SW404_ZHJK.vue')
      },

      /** SW4xx KLTJ **/
      { // 客流统计
        path: '/home/KLTJ',
        name: 'KLTJ',
        component: () => import('@/components/Kltj/Kltj.vue')
      },

      /** SW404 ZHCZ **/
      { // 智慧车站
        path: '/home/SW404_ZHCZ',
        name: 'SW404_ZHCZ',
        component: () => import('@/views/sw404/SW404_ZHCZ.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  next() // 执行进入路由，如果不写就不会进入目标页
})

router.afterEach((to, from) => {
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title
  }
})

export default router
