<!--
 * @Author: your name
 * @Date: 2021-06-07 16:51:49
 * @LastEditTime: 2021-06-08 09:38:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\public\static\static_router.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-06-03 10:27:55
 * @LastEditTime: 2021-06-03 11:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\s_router.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>
    <el-button @click.prevent="getRouter" type="primary">getRouter</el-button>
    <el-button @click.prevent="addRouter" type="primary">addRouter</el-button>
    <el-button @click.prevent="updateRouter" type="primary">updateRouter</el-button>
    <el-button @click.prevent="deleteRouter" type="primary">deleteRouter</el-button>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import sRouter from '@/api/db/s_router'
import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      active: false,
      msg: 'this is table named s_router function Test'
    }
  },
  components: {
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    async getRouter () {
      console.table('getRouter')
      var ret = await sRouter.getRouter(this, '*')
      console.table(ret)
      this.$message({
        showClose: true,
        message: 'ok',
        type: 'success'
      })
    },

    async addRouter () {
      console.table('addRouter')
    },

    updateRouter () {
      console.info('updateAreas')
    },

    deleteRouter () {
      console.info('deleteAreas')
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
