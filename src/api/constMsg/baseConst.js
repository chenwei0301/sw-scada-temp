/*
 * @Author: your name
 * @Date: 2021-02-03 11:17:18
 * @LastEditTime: 2021-06-09 09:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\baseConst.js
 */
// export default {
//   ERR_OK: 200,
//   ERR_FAIL_DES: '网络请求失败，请重试！'
// }
// 确认框确认倒计时
export const CONFIRM_OFFTIME = 10
export const CONFIRM_DES_CLOSEAPP = '确认关闭？'
export const ERR_OK = 200
export const ERR_NET_DES = '网络请求失败，请重试！'
export const ERR_API_DES = '网络请求接口返回错误，请重试！'
export const isDevelopment = process.env.NODE_ENV !== 'production'
export const isProduction = process.env.NODE_ENV === 'production'

export default {
  isProduction,
  isDevelopment,
  ERR_API_DES,
  ERR_NET_DES,
  ERR_OK,
  CONFIRM_DES_CLOSEAPP,
  CONFIRM_OFFTIME
}
