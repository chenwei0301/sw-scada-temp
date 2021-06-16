<!--
 * @Author: your name
 * @Date: 2021-02-24 16:57:59
 * @LastEditTime: 2021-06-15 16:13:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeFooterBarTime\HomeFooterBarTime.vue
-->

<template>
    <div id="bar-time" v-cloak>{{time}}</div>
</template>

<script>
export default {
  data () {
    return {
      time: null
    };
  },
  filters: {
  },
  methods: {
    setLocalTime () {
      this.time = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss dddd')
    },

    IntervalLocalTime () {
      this.setLocalTime()
      setInterval(() => {
        this.setLocalTime()
      }, 1000)
    }

  },
  beforeCreate () {},
  created () {
    this.IntervalLocalTime()
  },
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
#bar-time{
  width: 226px;
  height: 32px;
  line-height: 32px;
  margin: 0 10px;
  color: #7ecef4;
  font-size: 14px;
  background: url('../../assets/image/time.png');
  text-align: center;
}
</style>
