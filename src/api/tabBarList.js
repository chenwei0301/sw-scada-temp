/*
 * @Author: your name
 * @Date: 2021-02-25 14:32:32
 * @LastEditTime: 2021-02-26 13:18:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\tabBarList.js
 */

export default [{
  id: 'role',
  text: '权限管理',
  type: 1,
  defaultSrc: 'setUser.png',
  disabledtSrc: 'setUser-disable.png',
  activeSrc: 'setUser.png',
  popup: true,
  path: '',
  name: '',
  children: [
    { id: 'UserManager', text: '角色管理', path: '/home/UserManager', name: 'UserManager' },
    { id: 'RoleManager', text: '权限管理', path: '/home/RoleManager', name: 'RoleManager' }
  ]
},
{
  id: 'print',
  text: '打印',
  type: 2,
  defaultSrc: 'print.png',
  disabledtSrc: 'print-disable.png',
  activeSrc: 'print.png',
  popup: false,
  path: '',
  name: '',
  children: []
},
{
  id: 'help',
  text: '帮助',
  type: 3,
  defaultSrc: 'help.png',
  disabledtSrc: 'help-disable.png',
  activeSrc: 'help.png',
  popup: false,
  path: '',
  name: '',
  children: []
},
{
  id: 'pushAlert',
  text: '报警推图',
  type: 4,
  defaultSrc: 'tuitu.png',
  disabledtSrc: 'tuitu-disable.png',
  activeSrc: 'tuitu.gif',
  popup: false,
  path: '',
  name: '',
  children: []
},
{
  id: 'transfer',
  text: '权限移交',
  type: 5,
  defaultSrc: 'transfer.png',
  disabledtSrc: 'transfer-disable.png',
  activeSrc: 'transfer.gif',
  popup: false,
  path: '/home/TransferManager',
  name: 'TransferManager',
  children: []
},
{
  id: 'link',
  text: '联动',
  type: 5,
  defaultSrc: 'link.png',
  disabledtSrc: 'link-disable.png',
  activeSrc: 'link.gif',
  popup: true,
  path: '',
  name: '',
  children: [
    { id: 'LinkManager', text: '联动编辑', path: '/home/LinkManager', name: 'LinkManager' },
    { id: 'LinkAction', text: '联动执行', path: '/home/LinkAction', name: 'LinkAction' }
  ]
},
{
  id: 'alert',
  text: '报警管理',
  type: 1,
  defaultSrc: 'alarm.png',
  disabledtSrc: 'alarm-disable.png',
  activeSrc: 'alarm.png',
  popup: true,
  path: '',
  name: '',
  children: [
    { id: 'OnlineAlert', text: '实时报警', path: '/home/OnlineAlert', name: 'OnlineAlert' },
    { id: 'HistroyAlert', text: '历史报警', path: '/home/HistroyAlert', name: 'HistroyAlert' },
    { id: 'BanningAlert', text: '禁止报警', path: '/home/BanningAlert', name: 'BanningAlert' }
  ]
},
{
  id: 'log',
  text: '日志管理',
  type: 1,
  defaultSrc: 'log.png',
  disabledtSrc: 'log-disable.png',
  activeSrc: 'log.png',
  popup: true,
  path: '',
  name: '',
  children: [
    { id: 'RunningLog', text: '运行日志', path: '/home/RunningLog', name: 'RunningLog' },
    { id: 'OpreateLog', text: '操作日志', path: '/home/OpreateLog', name: 'OpreateLog' }
  ]
}
]
