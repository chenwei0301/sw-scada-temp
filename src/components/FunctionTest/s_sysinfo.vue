<!--
 * @Author: your name
 * @Date: 2021-06-16 10:16:18
 * @LastEditTime: 2021-06-16 10:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\s_sysinfo.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>
    <el-button @click.prevent="setSysInfo" type="primary">setSysInfo</el-button>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import sSysInfo from '@/api/db/s_sysinfo'

export default {
  data () {
    return {
      active: false,
      msg: 'this is table named s_sysinfo function Test'
    }
  },
  components: {
  },
  methods: {
    async setSysInfo () {
      const para = {
        filter: '*'
      }
      var ret = await sSysInfo.getSysInfoAsync(para)
      console.table(ret)
      if (ret.length) {
        console.log('setLocalInfo')
        this.$store.commit('setLocalInfo', ret[0])
      }
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
  errorCaptured: (err, vm, info) => {}
}
</script>

<style lang="scss" scoped>
.func-group{
  padding: 10px;
}
</style>
