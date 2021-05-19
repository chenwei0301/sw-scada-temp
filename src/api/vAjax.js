/*
 * @Author: sw0447
 * @Date: 2021-02-03 13:32:58
 * @LastEditTime: 2021-05-18 09:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\vAjax.js
 */
import { ERR_NET_DES, ERR_API_DES } from '@/api/baseConst.js'
import { HTTP_IP } from '@/api/ip.js'
export default function VueAjax (obj, api, param, timeout = 5000) {
  if (api !== '/login') {
    param.token = sessionStorage.getItem('ISCS_token')
    param.ui = sessionStorage.getItem('ISCS_ui')
  }
  return new Promise((resolve, reject) => {
    obj.$ajax({
      url: HTTP_IP + api,
      type: 'get',
      dataType: 'json',
      timeout: timeout,
      data: param,
      success: (result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          obj.$layer.msg('<span style="color:#8a0606">' + ERR_API_DES + '</span>')
          reject(new Error('请求无返回'))
        }
      },
      error: (jqXHR) => {
        obj.$layer.msg('<span style="color:#8a0606">' + ERR_NET_DES + '</span>')
        console.log(jqXHR)
        reject(new Error('请求错误'))
      }
    })
  })
}
