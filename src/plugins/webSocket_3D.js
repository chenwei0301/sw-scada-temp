/*
 * @Author: your name
 * @Date: 2021-06-01 17:01:40
 * @LastEditTime: 2021-06-03 08:53:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\webSocket_3D.js
 */
const isDevelopment = process.env.NODE_ENV !== 'production';
const TIME_OUT = 120 * 1000
const RECONNECT_INTERVAL = 5000

export default class Socket {
  constructor (wsUrl, par, Callback) {
    this.wsUrl = wsUrl
    this.par = par
    this.Callback = Callback
    this.ws = null
    this.lockReconnect = false
    this.heartTimer = null
    this.reConnectTimer = null
    this._WebSocketSet()
  }

  _WebSocketSet () {
    try {
      if ('WebSocket' in window) {
        this.ws = new WebSocket(this.wsUrl)
        this.ws.onopen = res => {
          this.lockReconnect = true
          // 心跳检测重置
          this.stopHeartCheck()
          this.startHeartCheck()
          this.stopReConnectWebsocket()
          if (isDevelopment) {
            console.log('socket连接成功:' + this.wsUrl)
          }
          this.ws.send(this.par)
        }
        this.ws.onmessage = res => {
          this.lockReconnect = true
          if (res.data !== 'pong') {
            const msg = JSON.parse(res.data)
            if (isDevelopment) {
              console.log('数据已接收:', msg)
            }
            this.Callback(msg)
          }
        }
        this.ws.onerror = res => {
          if (isDevelopment) {
            console.log('socket连接错误')
          }
        }
        this.ws.onclose = res => {
          this.lockReconnect = false
          if (isDevelopment) {
            console.log('socket连接关闭:' + this.wsUrl)
          }
          this.stopHeartCheck()
          this.stopReConnectWebsocket()
          this.reConnectWebsocket()
        }
      } else {
        if (isDevelopment) {
          console.log('当前浏览器 Not support websocket')
        }
      }
    } catch (error) {
      this.lockReconnect = false
      this.stopHeartCheck()
      this.stopReConnectWebsocket()
      this.reConnectWebsocket()
      if (isDevelopment) {
        console.log(error)
      }
    }
  }

  send (para) {
    this.ws.send(para)
  }

  close () {
    this.stopHeartCheck()
    this.stopReConnectWebsocket()
    this.ws.close()
  }

  startHeartCheck (arg = 'ping') {
    this.heartTimer = setInterval(() => {
      this.ws.send(arg)
      console.log(arg)
    }, TIME_OUT)
  }

  stopHeartCheck () {
    clearInterval(this.heartTimer)
    this.heartTimer = null
  }

  reConnectWebsocket () {
    this.reConnectTimer = setInterval(() => {
      console.log('reConnectTimer')
      if (!this.lockReconnect) {
        console.log('reConnectTimer---ok')
        this._WebSocketSet()
      }
    }, RECONNECT_INTERVAL)
  }

  stopReConnectWebsocket () {
    clearInterval(this.reConnectTimer)
    this.reConnectTimer = null
  }
}
