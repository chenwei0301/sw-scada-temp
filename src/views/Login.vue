<!--
 * @Author: your name
 * @Date: 2021-01-28 16:29:41
 * @LastEditTime: 2021-06-08 09:06:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\views\login.vue
-->
<template>
<div class="login-view">
  <LoginTitleBar class="login-view-titleBar"></LoginTitleBar>
  <LoginBody class="login-view-content"></LoginBody>
</div>
</template>

<script>
import LoginTitleBar from '@/components/LoginTitleBar/LoginTitleBar.vue'
import LoginBody from '@/components/LoginBody/LoginBody.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    LoginTitleBar,
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
  height: 100%;
  .login-view-content{
  overflow: auto;
  height: calc(100% - 30px);
  }
  .login-view-content::-webkit-scrollbar{
    display: none;
  }
  }

</style>
