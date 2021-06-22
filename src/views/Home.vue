<!--
 * @Author: your name
 * @Date: 2021-01-29 08:46:21
 * @LastEditTime: 2021-06-22 09:20:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\views\Home.vue
-->
<template>
  <el-container class="container">
    <HomeTitleBar class="home-titleBar" :display="display"></HomeTitleBar>
    <HomeHeader class="home-header"></HomeHeader>
    <el-main class="home-main">
        <router-view></router-view>
    </el-main>
    <el-footer class="home-footer" height='135px'>
      <HomeFooter></HomeFooter>
    </el-footer>
  </el-container>
</template>

<script>
import HomeTitleBar from '@/components/HomeTitleBar/HomeTitleBar.vue'
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import HomeFooter from '@/components/HomeFooter/HomeFooter.vue'
import SwWebSocket from '@/plugins/modules/webSocket.js'
import { decodeBase64 } from '@/api/base/common.js'
import sSysInfo from '@/api/db/s_sysinfo'
export default {
  data () {
    return {
      display: 0,
      ws: null
    }
  },
  watch: {
    display: function (val, oldVal) {
      // c1onsole.log(val, oldVal)
    }
  },
  components: {
    HomeTitleBar,
    HomeHeader,
    HomeFooter
  },
  methods: {
    // 获取路由参数并设置属性
    initRouterparams () {
      console.log('home:', this.$route)
      const params = this.$route.params
      if (params.display !== undefined) {
        this.display = parseInt(params.display)
      }
    },

    initSWWebSocket () {
      const arr = ['index', decodeBase64(sessionStorage.getItem('ISCS_username'))]
      this.ws = new SwWebSocket('/index', arr, this.getSocketdata)
    },

    getSocketdata (obj) {
      console.log('==')
    }
  },
  beforeCreate () {},
  created () {
    console.log('session:', sSysInfo.getSysInfoFromSession())
    // this.initRouterparams()
  },
  beforeMount () {},
  mounted () {

  },
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {
    // this.ws.close()
  },
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {}
}
</script>

<style lang="scss" scope>
.container::-webkit-scrollbar{
    display: none;
  }
.container{
  background-color: #b3c0d1;
  height: 100%;
  width: 100%;
  position: absolute;
  min-width: 1024px;
  display: flex;
  flex-flow: column;
  .home-header{
    padding: 0;
    // border: none;
  }
  .home-main::-webkit-scrollbar{
    display: none;
  }
  .home-main{
    flex: 1;
    padding: 0;
    background: rgba(0, 0, 0);
  }
  .home-footer{
    background:#1d2531;
    padding: 0;
  }
}
</style>
