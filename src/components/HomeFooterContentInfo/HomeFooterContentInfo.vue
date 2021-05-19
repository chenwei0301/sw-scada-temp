<!--
 * @Author: willChen
 * @Date: 2021-02-24 17:06:37
 * @LastEditTime: 2021-03-05 14:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeFooterContentInfo\HomeFooterContentInfo.vue
-->

<template>
    <div class="bar-content-info">
      <div class="bar-content-info-left" @click.prevent="allAlertClick"><span>全报警</span></div>
      <div class="bar-content-info-right">
        <div class="content-info content-info-unAck">
          <span>未确认&nbsp;</span>
          <span v-cloak>{{unAckAlertNum}}</span>
        </div>
        <div class="content-info content-info-all">
          <span>总报警&nbsp;</span>
          <span v-cloak>{{allAlertNum}}</span>
        </div>
        <div class="content-info content-info-other">
          <div class="content-info-sound" @click.prevent="soundClick">
            <img class="soundPic-off" :class="{'soundPic-on':alertSound}" title="开启/关闭">
          </div>
          <div class="content-info-mbt" @click.prevent="mbtClick">
            <span>目标图</span>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import swStationList from '@/api/stationInfo.js'
export default {
  data () {
    return {
      unAckAlertNum: 12345,
      allAlertNum: 165464,
      alertSound: false
    };
  },
  methods: {
    // 全报警按钮点击
    allAlertClick () {
      this.$router.push({ path: '/home/OnlineAlert', query: { id: swStationList.localInfo.stationId, staName: swStationList.localInfo.stationName, title: '实时报警' } })
    },

    // 报警声音点击
    soundClick () {
      this.alertSound = !this.alertSound
    },

    // 目标图点击
    mbtClick () {
      this.$router.push({ path: '/home/GoldPicture', query: { id: swStationList.localInfo.stationId, staName: swStationList.localInfo.stationName, title: '目标图' } })
    }

  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {
  }
};
</script>

<style lang="scss" scoped>
.bar-content-info{
  width: 200px;
  height: 80px;
  margin: 0 10px;
  display: flex;
  .bar-content-info-left{
    width: 30px;
    height: 100%;
    text-align: center;
    padding: 10px 0;
    margin: 0 5px;
    background: url(../../assets/image/allAlert.png);
    span{
      color: #7ecef4;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .bar-content-info-right{
    height: 100%;
    margin: 0 5px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .content-info{
      width: 140px;
      height: 24px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
    span{
        line-height: 24px;
    }
    .content-info-unAck{
      color: #C4302B;
      background: url(../../assets/image/num_bg.png);
    }
    .content-info-all{
      color: #FFD900;
      background: url(../../assets/image/num_bg2.png);
    }
    .content-info-other{
      .content-info-sound{
        .soundPic-off{
          content: url(../../assets/image/sound_off.png);
        }
        .soundPic-on{
          content: url(../../assets/image/sound_on.png);
        }
      }
      .content-info-mbt{
        width: 80px;
        height: 24px;
        background: url(../../assets/image/mbt.png);
        text-align: center;
        span{
         color: #7ecef4;
         font-size: 16px;
         font-weight: 600;
        }
      }
    }
  }
}
</style>
