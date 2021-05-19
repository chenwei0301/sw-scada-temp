/*
 * @Author: your name
 * @Date: 2021-02-08 08:52:33
 * @LastEditTime: 2021-05-18 10:09:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\ip.js
 */
export default ['http://127.0.0.1:8888',
  'http://127.0.0.1:8889',
  'http://127.0.0.1:8890',
  'http://127.0.0.1:8891'
]

const APIVERSION = '/api/2.0'
const PTOTOCOL_HTTP = 'http://'
const PTOTOCOL_WS = 'ws://'
const PORT = ':8888'

export const IP = '127.0.0.1'
export const HTTP_IP = PTOTOCOL_HTTP + IP + PORT + APIVERSION
// export const HTTP_IP = PTOTOCOL_HTTP + IP
export const WSHOST = PTOTOCOL_WS + IP + PORT// webSocket 地址
