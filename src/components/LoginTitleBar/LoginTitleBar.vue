<!--
 * @Author: your name
 * @Date: 2021-02-01 10:15:28
 * @LastEditTime: 2021-03-03 09:20:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\LoginTitleBar\LoginTitleBar.vue
-->
<template>
  <div class="myHeader">
    <el-image :src="headerIcon"  fit="'contain'" class="header-icon"></el-image>
    <div class="header-btn">
      <div class="header-btn-quit" @click.prevent="quit" >
        <img :src="quitImg" title="关闭"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  data () {
    return {
      display: 0,
      headerIcon: require('@/assets/icons/24x24.png'),
      headerTitle: require('@/assets/image/loginTitle.png'),
      quitImg: require('@/assets/image/close.png')
    };
  },
  methods: {
    header_dblclick () {
      console.log('header_dblclick')
      return false;
    },
    quit_dblclick () {
      console.log('quit_dblclick')
    },
    quit () {
      ipcRenderer.send('main-close', this.display)
    }
  }
}
</script>
<style lang="scss" scope>
.myHeader {
  background: linear-gradient(to left, #3882ad, #10395a);
  height: 30px;
  text-align: center;
  -webkit-app-region: drag;
  .header-icon{
    position: absolute;
    width: 24px;
    left: 0px;
    padding: 3px 0;
  }
  .header-btn {
    position: relative;
    height: 100%;
    float: right;
    .header-btn-quit {
      -webkit-app-region: no-drag;
      position: absolute;
      right: 10px;
      width: 20px;
    }
    img{
      width: 100%;
      margin-top: 5px;
    }
  }
}
</style>
