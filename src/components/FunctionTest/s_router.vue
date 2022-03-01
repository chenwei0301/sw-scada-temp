/* eslint-disable quotes */
<!--
 * @Author: your name
 * @Date: 2021-06-03 10:27:55
 * @LastEditTime: 2021-08-13 17:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\s_router.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>

    <!-- <el-button @click.prevent="langchao" type="primary">浪潮</el-button> -->
    <el-button @click.prevent="getRouter" type="primary">getRouter</el-button>

    <el-button @click.prevent="whereRouter" type="primary">whereRouter</el-button>

    <el-button @click.prevent="insertRouter" type="primary">insertRouter</el-button>

    <el-button @click.prevent="updateRouter" type="primary">updateRouter</el-button>

    <el-button @click.prevent="deleteRouter" type="primary">deleteRouter</el-button>

    <el-button @click.prevent="getUnregisteredRouterAsync" type="primary">getUnregisteredRouterAsync</el-button>

    <el-button @click.prevent="getRouterMenu" type="primary">getRouterMenu</el-button>

    <el-button @click.prevent="test" type="primary">test</el-button>

    <el-button @click.prevent="routertest" type="primary">router</el-button>

    <el-button @click.prevent="routerMenuList" type="primary">routerMenuList</el-button>

    <el-tree :data="treeData" :props="treeProps" @node-click="handleNodeClick"></el-tree>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import sRouter from '@/api/db/s_router'
import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      treeData: [],
      treeProps: {
        children: 'children',
        label: 'title'
      },
      active: false,
      msg: 'this is table named s_router function Test'
    }
  },
  components: {
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    // async langchao () {
    //   var ret = await sRouter.getLangchaoAsync({ field: '*' })
    //   console.table(ret)
    // },

    handleNodeClick (data) {
      console.log(data);
    },
    routertest () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ path: '/vdr' })
    },
    async getRouter () {
      var ret = await sRouter.getRouterAsync({ field: '*' })
      console.table(ret)
    },

    async insertRouter () {
      const para = {
        menu_id: null,
        parent_id: 1,
        module_id: 12,
        menu_type: 3,
        display_order: 10,
        title: '集中告警',
        path: '/home/SW400_ALM_1',
        redirect: '',
        component: '@/views/sw404/SW400_ALM_1.vue',
        name: 'SW400_ALM_1',
        icon: '',
        always_show: 1,
        // create_time: '',
        // update_time: '',
        remark: 'menu'
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

    async test () {
      // console.log(appConfig('appTitle'))
      var ret = await sRouter.getUnregisteredRouterAsync()
      const tempRouter = []
      ret.forEach(element => {
        const temp = {
          path: element.path,
          name: element.name,
          meta: { title: element.title },
          // eslint-disable-next-line quotes
          component: "() => import('" + "element.component" + "')"
        }
        tempRouter.push(temp)
      })
      console.info(tempRouter)
    },

    async getUnregisteredRouterAsync () {
      var ret = await sRouter.getUnregisteredRouterAsync()
      console.table(ret)
    },

    async getRouterMenu () {
      var ret = await sRouter.getRouterMenuAsync()
      console.table(ret)
    },
    async addUnRegisteredRouter () {
      var ret = await sRouter._UnRegisteredRouter()
      for (var i = 0; i < ret.length; i++) {
        this.$router.addRoute('Home', ret[i])
      }
    },
    async routerMenuList () {
      console.log('routerMenuList')
      var ret = await sRouter.getRouterMenuAsync()
      this.treeData = ret
      console.table(ret)
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
