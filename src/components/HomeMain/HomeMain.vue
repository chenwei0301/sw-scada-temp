<!--
 * @Author: your name
 * @Date: 2021-02-01 13:49:56
 * @LastEditTime: 2021-03-05 09:37:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeMain\HomeMain.vue
-->
<template>
    <div class="main-home">
      <div class="mainImg-Title">
        <img :src="mainImg_Title" alt="">
      </div>
      <div class="mainImg-Line">
        <div class="mainImg-Line-imgDiv">
          <img :src="mainImg_Line" alt="">
          <ul>
            <li :class="[stationSted == item.id ? 'stationSted': '']" v-for="(item, index) in stationList" :key='index'></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import swStationList from '@/api/stationInfo.js'
export default {
  data () {
    return {
      mainImg_Title: require('@/assets/image/mainTitle.png'),
      mainImg_Line: require('@/assets/image/stationLine.png'),
      stationList: [],
      stationSted: null
    };
  },
  watch: {
    $route (to, from) {
      // console.log(to, from)
      this.stationSted = this.$route.query.id
    }
  },
  methods: {
    // 组件初始化执行函数
    componentInit () {
      this.stationList = swStationList.station
      this.stationSted = swStationList.localInfo.stationId
    },

    // 获取路由参数并设置属性
    initRouterparams () {
      // const query = this.$route.query
      // console.log('query:', query)
    }
  },
  beforeCreate () {},
  created () {
    this.componentInit()
    this.initRouterparams()
  },
  beforeMount () {},
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
.main-home{
  background: url(../../assets/image/main_bg.jpg);
  position: relative;
  height: 735px;
  .mainImg-Title{
    margin: 0 auto;
    width: 480px;
    img{
      margin-top: 20px;
    }
  }
  .mainImg-Line{
    width: 1200px;
    margin: 0 auto;
    .mainImg-Line-imgDiv{
      width: 1123px;;
      height: 620px;
      position: relative;
      ul{
        display: block;
        li{
          width: 24px;
          height: 24px;
          position: absolute;
          border-radius: 12px;
          background: url(../../assets/image/station_default.png);
          box-shadow: 0 0 10px #00ffff;
        }
        .stationSted{
          background: url(../../assets/image/station_click.png);
        }
        li:nth-child(1){
          left: 0;
          top: 398px;
        }
        li:nth-child(2) {
          left: 71px;
          top: 398px;
        }
        li:nth-child(3) {
          left: 136px;
          top: 398px;
        }
        li:nth-child(4) {
          left: 191px;
          top: 398px;
        }
        li:nth-child(5) {
          left: 256px;
          top: 436px;
        }
        li:nth-child(6) {
          left: 332px;
          top: 436px;
        }
        li:nth-child(7) {
          left: 374px;
          top: 455px;
        }
        li:nth-child(8) {
          left: 414px;
          top: 472px;
        }
        li:nth-child(9) {
          left: 474px;
          top: 482px;
        }
        li:nth-child(10) {
          left: 512px;
          top: 483px;
        }
        li:nth-child(11) {
          left: 550px;
          top: 482px;
        }
        li:nth-child(12) {
          left: 588px;
          top: 483px;
        }
        li:nth-child(13) {
          left: 625px;
          top: 483px;
        }
        li:nth-child(14) {
          left: 668px;
          top: 483px;
        }
        li:nth-child(15) {
          left: 689px;
          top: 502px;
        }
        li:nth-child(16) {
          left: 715px;
          top: 522px;
        }
        li:nth-child(17) {
          left: 749px;
          top: 518px;
        }
        li:nth-child(18) {
          left: 787px;
          top: 500px;
        }
        li:nth-child(19) {
          left: 829px;
          top: 484px;
        }
        li:nth-child(20) {
          left: 862px;
          top: 454px;
        }
        li:nth-child(21) {
          left: 858px;
          top: 408px;
        }
        li:nth-child(22) {
          left: 865px;
          top: 357px;
        }
        li:nth-child(23) {
          left: 900px;
          top: 296px;
        }
        li:nth-child(24) {
          left: 909px;
          top: 240px;
        }
        li:nth-child(25) {
          left: 920px;
          top: 207px;
        }
        li:nth-child(26) {
          left: 922px;
          top: 172px;
        }
        li:nth-child(27) {
          left: 919px;
          top: 137px;
        }
        li:nth-child(28) {
          left: 943px;
          top: 95px;
        }
        li:nth-child(29) {
          left: 941px;
          top: 47px;
        }
        li:nth-child(30) {
          left: 964px;
          top: 21px;
        }
        li:nth-child(31) {
          left: 984px;
          top: 0px;
        }
      }
    }
    img{
      display: inline-block;
    }
  }
}
</style>
