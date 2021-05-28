<!--
 * @Author: your name
 * @Date: 2021-05-27 17:46:13
 * @LastEditTime: 2021-05-27 17:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\VDR.vue
-->
<template>
  <div class="VDR">
    <vue-draggable-resizable :active.sync="active" class="vdr1" :grid="[20,20]" :x="10" :y="10">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  components: {
  },
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
.VDR{
  //  background-color:#8ec2f3;
   height: 100%;
   width: 100%;
  .vdr1{
    background-color: lightcoral;
  }
}
</style>
