<!--
 * @Author: your name
 * @Date: 2021-05-19 17:52:36
 * @LastEditTime: 2021-06-03 11:00:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Edit.vue
-->
<template>
  <div class="funcTest">
    <!-- <h4>{{msg | uppercase  }}</h4> -->
    <h4>{{msg | uppercaseFirst  }}</h4>

    <sArea></sArea>

    <sRouter></sRouter>

    <Axios></Axios>

    <Toast></Toast>

    <vue-draggable-resizable :active.sync="active" class="vdr1">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import sArea from '@/components/FunctionTest/s_area.vue'
import sRouter from '@/components/FunctionTest/s_router.vue'
import Axios from '@/components/FunctionTest/axios.vue'
import Toast from '@/components/FunctionTest/toast.vue'

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
    Toast
  },
  mixins: [Vue2Filters.mixin],
  methods: {
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
    // console.log(err, vm, info)
  }
}
</script>

<style lang="scss" scoped>
.vdr1{
    background-color: lightcoral;
}
</style>
