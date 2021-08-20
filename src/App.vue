<!--
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-08-18 14:10:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\App.vue
-->
<template>
  <!-- <div id="app" ondragstart="return false"> -->
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import sRouter from '@/api/db/s_router'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {},
  methods: {},
  beforeCreate () {},
  created () {},
  beforeMount () {
    // 加载home 动态路由
    sRouter.addAsyncRoutes(this)
  },
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
}
</script>

<style lang="scss">
#app{
  -webkit-user-select: none;
  border-radius: 5px;
  height: 100%;
}
.properClass{
  padding: 2px;
  .menuBox{
    height: 180px;
    overflow: auto;
  }
  .iconBox {
    height: 180px;
    overflow: auto;
    .iconList li {
      display: inline-block;
      .el-button {
        margin: 2px 2px;
        padding: 8px;
      }
    }
  }
}
</style>
