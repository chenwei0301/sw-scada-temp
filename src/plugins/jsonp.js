import originJsonp from 'jsonp'
/*
  封装原jsonp插件，返回promise对象
  url： 请求地址
  data：请求的json参数
  option：其他json参数，默认直接写空对象即可
*/
// 这时候Url是不带参数的，我们让data变成参数，data在具体定义获取具体内容的时候再单独配置
export default function jsonp (url, data, option) {
// 看url是否有问号的意思就是只在第一次加参数的时候加一个问号，剩下就是加&
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  url += '?' + param(data)
  return new Promise((resolve, reject) => {
  // originJsonp中的参数说明可以到前言中的github中查看
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
/*
  封装url参数的拼接  将data数据遍历，前提data是一个数组
 */
function param (data) {
  let url = ''
  for (var k in data) {
    const value = data[k] !== undefined ? data[k] : ''
    // 防止参数为中文时出现乱码，把字符串作为 URI 组件进行编码
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 删除第一个&符号
  return url ? url.substring(1) : ''
}
