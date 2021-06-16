/*
 * @Author: your name
 * @Date: 2021-02-03 11:09:38
 * @LastEditTime: 2021-03-08 13:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\base\common.js
 */
import { WSHOST } from '@/api/ip.js'

// 字符串转base64
export function encodeBase64 (str) {
  // 对字符串进行编码
  var encode = encodeURI(str);
  // 对编码的字符串转化base64
  var base64 = btoa(encode);
  return base64;
}

// base64转字符串
export function decodeBase64 (base64) {
  // 对base64转编码
  var decode = atob(base64);
  // 编码转字符串
  var str = decodeURI(decode);
  return str;
}

// websocket请求参数拼接用户token
export function setWebSocketPara (para) {
  var tokenArr = [sessionStorage.getItem('ISCS_token'), sessionStorage.getItem('ISCS_ui')]
  return tokenArr.concat(para)
}

// websocket请求url
export function getWebSocketUrl (url) {
  return WSHOST + url
}
