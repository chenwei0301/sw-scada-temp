<!--
 * @Author: your name
 * @Date: 2021-05-19 17:52:36
 * @LastEditTime: 2021-07-08 10:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Edit.vue
-->
<template>
  <div class="funcTest">
    <!-- <h4>{{msg | uppercase  }}</h4> -->
    <h4>{{msg | uppercaseFirst  }}</h4>

    <sSysInfo></sSysInfo>

    <staticRouter></staticRouter>

    <sArea></sArea>

    <sRouter></sRouter>

    <Axios></Axios>

    <Toast></Toast>

  </div>
</template>

<script>
import sArea from '@/components/FunctionTest/s_area.vue'
import sRouter from '@/components/FunctionTest/s_router.vue'
import sSysInfo from '@/components/FunctionTest/s_sysinfo.vue'
import Axios from '@/components/FunctionTest/axios.vue'
import Toast from '@/components/FunctionTest/toast.vue'
import staticRouter from '@/../public/WebConfigure/components/static_router.vue'

import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      active: false,
      msg: 'this is an function page'
    }
  },
  components: {
    sArea,
    sRouter,
    Axios,
    Toast,
    staticRouter,
    sSysInfo
  },
  mixins: [Vue2Filters.mixin],
  methods: {
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    console.log('route:', this.$route.params)
  },
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
.vdr1{
    background-color: lightcoral;
}
</style>
