/*
 * @Author: your name
 * @Date: 2021-02-08 15:57:36
 * @LastEditTime: 2021-02-24 14:39:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\subSysInfo.js
 */

export default {
  subSys: [
    {
      id: 'dlxt',
      text: '电力系统',
      role: '',
      popSub: true,
      path: '',
      name: '',
      children: [
        { text: '一次系统图', path: '/home/SW404_PSCADA_OnceSystem', name: 'SW404_PSCADA_OnceSystem' },
        { text: '1500V顺控', path: '/home/SW400_PSCADA_1500VSOC', name: 'SW400_PSCADA_1500VSOC' }
      ]
    },
    {
      id: 'hkxt',
      text: '环控系统',
      role: '',
      popSub: true,
      path: '',
      name: '',
      children: [
        { text: '隧道通风系统', path: '/home/SW404_BAS_TunnelSYS', name: 'SW404_BAS_TunnelSYS' },
        { text: '大系统', path: '/home/SW404_BAS_BigSYS', name: 'SW404_BAS_BigSYS' },
        { text: '小系统K1', path: '/home/SW404_BAS_LittleSYS_k1', name: 'SW404_BAS_LittleSYS_k1' },
        { text: '电扶梯', path: '/home/SW404_BAS_ELS', name: 'SW404_BAS_ELS' },
        { text: '冷水系统', path: '/home/SW404_BAS_Coldwater', name: 'SW404_BAS_Coldwater' },
        { text: 'EPS系统', path: '/home/SW404_BAS_EPS', name: 'SW404_BAS_EPS' },
        { text: '给排水系统', path: '/home/SW404_BAS_PAD', name: 'SW404_BAS_PAD' },
        { text: '模式表', path: '/home/basMode', name: 'BASMode' },
        { text: '时间表', path: '/home/basTime', name: 'BASTime' },
        { text: '传感器', path: '/home/SW404_BAS_THHello', name: 'SW404_BAS_THHello' }
      ]
    },
    {
      id: 'hzbj',
      text: '火灾系统',
      role: '',
      popSub: true,
      path: '',
      name: '',
      children: [
        { text: '系统图', path: '/home/SW404_FAS_System', name: 'SW404_FAS_System' },
        { text: '站厅', path: '/home/SW404_FAS_StationHall', name: 'SW404_FAS_StationHall' },
        { text: '站台', path: '/home/SW404_FAS_PlatForm', name: 'SW404_FAS_PlatForm' },
        { text: '气灭房间', path: '/home/SW404_FAS_QM_1', name: 'SW404_FAS_QM_1' },
        { text: '隧道区间', path: '/home/SW404_FAS_Tunnel', name: 'SW404_FAS_Tunnel' },
        { text: '感温光纤', path: '/home/SW404_FAS_Fiber', name: 'SW404_FAS_Fiber' },
        { text: '400V强切', path: '/home/SW404_FAS_QQ', name: 'SW404_FAS_QQ' },
        { text: '感温电缆', path: '/home/SW404_FAS_GWDL', name: 'SW404_FAS_GWDL' },
        { text: '出入口', path: '/home/SW404_FAS_Passage_1', name: 'SW404_FAS_Passage_1' },
        { text: '防火分区', path: '/home/SW404_FAS_FHFQ_1', name: 'SW404_FAS_FHFQ_1' },
        { text: '防火阀', path: '/home/SW404_FAS_FA', name: 'SW404_FAS_FA' },
        { text: '电气火灾', path: '/home/SW404_FAS_EFMS', name: 'SW404_FAS_EFMS' }
      ]
    },
    {
      id: 'gbxt',
      text: '广播系统',
      role: '',
      popSub: false,
      path: '/home/PA_STATION',
      name: 'PA_STATION',
      children: []
    },
    {
      id: 'sjp',
      text: '售检票',
      role: '',
      popSub: false,
      path: '/home/SW404_AFC',
      name: 'SW404_AFC',
      children: []
    },
    {
      id: 'spjk',
      text: '视频监控',
      role: '',
      popSub: false,
      path: '/home/CCTV_STATION',
      name: 'CCTV_STATION',
      children: []
    },
    {
      id: 'ckxx',
      text: '乘客信息',
      role: '',
      popSub: false,
      path: '/home/PIS',
      name: 'PIS',
      children: []
    },
    {
      id: 'ztm',
      text: '站台门',
      role: '',
      popSub: false,
      path: '/home/SW404_PSD',
      name: 'SW404_PSD',
      children: []
    },
    {
      id: 'xhxt',
      text: '信号系统',
      role: '',
      popSub: false,
      path: '/home/SW400_ATS_1',
      name: 'SW400_ATS_1',
      children: []
    },
    {
      id: 'ups',
      text: 'UPS系统',
      role: '',
      popSub: true,
      path: '',
      name: '',
      children: [
        { text: 'UPS', path: '/home/SW404_UPS', name: 'SW404_UPS' },
        { text: '巡检仪', path: '/home/SW404_UPS_XJY', name: 'SW404_UPS_XJY' }
      ]
    },
    {
      id: 'jzgj',
      text: '集中告警',
      role: '',
      popSub: false,
      path: '/home/SW400_ALM_1',
      name: 'SW400_ALM_1',
      children: []
    },
    {
      id: 'zhjk',
      text: '综合监控',
      role: '',
      popSub: false,
      path: '/home/SW404_ZHJK',
      name: 'SW404_ZHJK',
      children: []
    },
    {
      id: 'kltj',
      text: '客流统计',
      role: 'MDASCTU',
      popSub: false,
      path: '/home/KLTJ',
      name: 'KLTJ',
      children: []
    },
    {
      id: 'zhcz',
      text: '智慧车站',
      role: 'MDASCTU',
      popSub: false,
      path: '/home/SW404_ZHCZ',
      name: 'SW404_ZHCZ',
      children: []
    }
  ]
}
