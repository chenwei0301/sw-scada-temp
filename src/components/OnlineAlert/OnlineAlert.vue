<!--
 * @Author: your name
 * @Date: 2021-02-25 15:22:01
 * @LastEditTime: 2021-04-16 11:49:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\OnlineAlert\OnlineAlert.vue
-->

<template>
  <div class="main">
    <div class="main-title">
      <span>{{staName +" "+ title}}</span>
      <button @click="send">send</button>
      <button @click="close">close</button>
    </div>
  </div>
</template>

<script>
import { decodeBase64 } from '@/api/common.js'
import SwWebSocket from '@/api/webSocket.js'

export default {
  vueName: 'OnlineAlert',
  data () {
    return {
      staName: '',
      title: 'OnlineAlert',
      ws: null
    };
  },
  methods: {
    // 组件初始化执行函数
    componentInit () {
    },

    // 获取路由参数并设置属性
    initRouterparams () {
      const query = this.$route.query
      console.log(query)
      if (query.staName !== undefined) {
        this.staName = query.staName
      }
    },

    send () {
      // var arr = ['index', decodeBase64(sessionStorage.getItem('ISCS_username'))]
      // webSocketSend(setWebSocketPara(arr))
    },

    close () {
      // var arr = ['index_close', decodeBase64(sessionStorage.getItem('ISCS_username'))]
      // webSocketSend(setWebSocketPara(arr))
    },

    getSocketdata (obj) {
      console.log('++')
    }
  },
  beforeCreate () {},
  created () {
    this.initRouterparams()
    this.componentInit()
    // webSocketSend ('index')
  },
  beforeMount () {},
  mounted () {
    var arr = ['index', decodeBase64(sessionStorage.getItem('ISCS_username'))];
    this.ws = new SwWebSocket('/index', arr, this.getSocketdata)
    this.ws.WebSocketSet();
  },
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {
    this.ws.close()
  },
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
};
</script>

<style lang="scss" scope>
.main{
  width: 100%;
  height: 100%;
  .main-title {
    padding: 10px 0;
    span{
    display: block;
    color: azure;
    text-align: center;
    font-size: 20px;
    }
  }
}
</style>
