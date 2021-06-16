<!--
 * @Author: your name
 * @Date: 2021-06-15 11:12:41
 * @LastEditTime: 2021-06-15 11:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Base\OA-Login.vue
-->
<template>
<div class="login-view">
  <LoginBody class="login-view-content"></LoginBody>
</div>
</template>

<script>
import LoginBody from '@/components/LoginBody/LoginBody.vue'
export default {
  data () {
    return {}
  },
  components: {
    LoginBody
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

<style lang="scss" scope>
.login-view{
  background:linear-gradient(to right, #3882ad, #10395a);
  height: 100%;
  .login-view-content{
  overflow: auto;
  }
  .login-view-content::-webkit-scrollbar{
    display: none;
  }
}
</style>
