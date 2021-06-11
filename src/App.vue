<!--
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-06-11 15:31:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\App.vue
-->
<template>
  <div id="app" ondragstart="return false">
    <router-view/>
  </div>
</template>

<script>
import sRouter from '@/api/db/s_router'
import { asyncRoutes } from '@/router'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {},
  methods: {
    async addUnRegisteredRouter () {
      var ret = await sRouter._UnRegisteredRouter()
      // console.table(ret)
      for (var i = 0; i < ret.length; i++) {
        this.$router.addRoute('Home', ret[i])
      }
      // console.info(this.$router)
    },
    async init () {
      asyncRoutes[0].children = await sRouter._UnRegisteredRouter()
      this.$router.addRoutes(asyncRoutes)
    }
  },
  beforeCreate () {},
  created () {
    // 动态添加路由
    // this.addUnRegisteredRouter()
    this.init()
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
}
</script>

<style lang="scss">
#app{
  -webkit-user-select: none;
  border-radius: 5px;
  height: 100%;
}
</style>
