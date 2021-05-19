/*
 * @Author: willChen
 * @Date: 2021-03-03 08:47:26
 * @LastEditTime: 2021-03-03 08:56:53
 * @LastEditors: Please set willChen
 * @Description: api
 * @FilePath: \swiscs_3d\src\api\api.js
 */

import swVAjax from '@/api/vAjax.js'

// 登录
export function swHttpLogin (obj, param) {
  return swVAjax(obj, '/login', param)
}
// 获取用户权限信息
export function swHttpGetUserRole (obj, param) {
  return swVAjax(obj, '/getUserRole', param)
}
