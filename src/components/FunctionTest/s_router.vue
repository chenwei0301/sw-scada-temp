/* eslint-disable quotes */
<!--
 * @Author: your name
 * @Date: 2021-06-03 10:27:55
 * @LastEditTime: 2021-06-08 17:34:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\s_router.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>

    <el-button @click.prevent="getRouter" type="primary">getRouter</el-button>

    <el-button @click.prevent="whereRouter" type="primary">whereRouter</el-button>

    <el-button @click.prevent="insertRouter" type="primary">insertRouter</el-button>

    <el-button @click.prevent="updateRouter" type="primary">updateRouter</el-button>

    <el-button @click.prevent="deleteRouter" type="primary">deleteRouter</el-button>

    <el-button @click.prevent="getRouterMenu" type="primary">getRouterMenu</el-button>

    <el-button @click.prevent="test" type="primary">test</el-button>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import sRouter from '@/api/db/s_router'
import Vue2Filters from 'vue2-filters'
import appConfig from '@/api/appConfig'
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
      var ret = await sRouter.getRouterAsync({ field: '*' })
      console.table(ret)
    },

    async insertRouter () {
      const para = {
        menu_id: null,
        parent_id: 40,
        module_id: 6,
        isMenu: 0,
        display_order: 1,
        title: '广播系统(中心)',
        path: '/home/PA_CENTER',
        redirect: '',
        component: '@/components/PaCenter/PaCenter.vue',
        name: 'PA_CENTER',
        icon: '',
        always_show: 1,
        // create_time: '',
        // update_time: '',
        remark: 'menu_PA'
      }
      var ret = await sRouter.insertRouterAsync(para)
      console.log(ret)
      if (ret.affectedRows > 0) {
        console.log('insert success')
      } else if (ret.affectedRows === 0) {
        console.log('insert is already exist')
      }
      if (ret.warningCount > 0) {
        console.log('insert warning')
      }
    },

    async whereRouter () {
      const para = {
        selectFilter: '*',
        // eslint-disable-next-line quotes
        whereFilter: "parent_id=1 or module_id=1 order by menu_id ASC"
      }
      var ret = await sRouter.whereRouterAsync(para)
      console.log(ret)
    },

    async updateRouter () {
      const para = {
        // eslint-disable-next-line quotes
        setFilter: "parent_id=3,update_time=NOW()",
        // eslint-disable-next-line quotes
        whereFilter: "menu_id=5"
      }
      var ret = await sRouter.updateRouterAsync(para)
      console.log(ret)
      if (ret.affectedRows > 0) {
        console.log('update success')
      } else if (ret.affectedRows === 0) {
        console.log('update not pattern')
      }
      if (ret.warningCount > 0) {
        console.log('update warning')
      }
    },

    async deleteRouter () {
      const para = {
        field: 'menu_id',
        fieldVal: 5
      }
      var ret = await sRouter.deleteRouterAsync(para)
      console.log(ret)
      if (ret.affectedRows > 0) {
        console.log('delete success')
      } else if (ret.affectedRows === 0) {
        console.log('not exist')
      }
      if (ret.warningCount > 0) {
        console.log('delete warning')
      }
    },

    test () {
      console.log(appConfig('appTitle'))
    },

    async getRouterMenu () {
      var ret = await sRouter.getRouterMenuAsync()
      console.info(ret)
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
