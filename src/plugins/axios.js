/*
 * @Author: your name
 * @Date: 2021-04-08 15:50:43
 * @LastEditTime: 2021-05-18 16:44:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\plugins\axios.js
 */
import axios from 'axios'
import { HTTP_IP } from '@/api/ip'
const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  // 配置公共的请求头
  // axios.defaults.baseURL = '/api'
  axios.defaults.baseURL = HTTP_IP
  // axios.defaults.baseURL = 'http://127.0.0.1:8888/api/2.0'
  axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  // 配置超时时间
  // axios.defaults.timeout = 3000;

  // 1.请求拦截器
  axios.interceptors.request.use(config => {
    // console.log(config.url)
    // 任何一部都会经过这一步,在发送请求前做些什么
    // config.headers.Authorization = 'Negotiate ' + 'YCgGBisGAQUFAqAeMBygGjAYBgorBgEEAYI3AgIeBgorBgEEAYI3AgIK'
    // 这里一定要return 否则配置不成功
    return config
  }, function (err) {
  // 请求错误的时候
    console.error(err)
  })

  // 2.响应拦截器
  axios.interceptors.response.use(res => {
  // 接收响应后做些什么
    // var data = res.data;
    // return data;
    // const code = res.data.code
    return res
  }, error => {
  // 打印错误
    console.error(error)
  })

  // 添加实例方法
  Vue.prototype.$axios = axios
}

export default MyHttpServer
