<!--
 * @Author: willChen
 * @Date: 2021-02-01 13:08:01
 * @LastEditTime: 2021-03-03 14:05:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeTitleBar\HomeTitleBar.vue
-->
<template>
  <div class="titleBar">
    <el-image :src="titleBarIcon"  fit="'contain'" class="titleBar-icon"></el-image>
    <span v-cloak class="titleBar-title">{{appTitle}}</span>
    <div class="titleBar-btn">
      <div class="min" @click="min">
        <img :src="minImg" title="最小化"/>
      </div>
      <div class="max" @click="max">
        <img :src="maxImg" title="最大化"/>
      </div>
      <div class="close" @click="close">
          <img :src="closeImg" title="关闭"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  props: {
    display: { // 当前显示显示器编号
      default: 0,
      type: Number,
      required: true
    }
  },
  data () {
    return {
      appTitle: '合肥地铁4号线综合监控',
      titleBarIcon: require('../../assets/image/icon.png'),
      minImg: require('../../assets/image/min.png'),
      maxImg: require('../../assets/image/max.png'),
      closeImg: require('../../assets/image/close.png')
    };
  },
  methods: {
    min () {
      ipcRenderer.send('main-min', this.display);
    },

    max () {
      ipcRenderer.send('main-max', this.display);
    },

    close () {
      ipcRenderer.send('main-close', this.display);
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {
  },
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
};
</script>

<style lang="scss" scoped>
.titleBar {
  background: linear-gradient(to left, #3882ad, #10395a);
  width: 100%;
  height: 30px;
  min-width: 320px;
  line-height: 30px;
  text-align: center;
  -webkit-app-region: drag;
  .titleBar-icon{
    position: absolute;
    width: 25px;
    left: 4px;
  }
  .titleBar-title{
    font-size: 14px;
    color: #ababad;
  }
  .titleBar-btn {
    position: relative;
    height: 100%;
    float: right;
    div{
      -webkit-app-region: no-drag;
      position: absolute;
    }
    img{
      width: 100%;
      margin-top: 6px;
    }
    .min {
      right: 70px;
      width: 20px;
    }
    .max {
      right: 40px;
      width: 20px;
    }
    .close {
      right: 10px;
      width: 20px;
    }
  }
}
</style>
