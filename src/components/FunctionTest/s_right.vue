<!--
 * @Author: your name
 * @Date: 2021-08-26 10:59:08
 * @LastEditTime: 2021-08-27 11:36:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\s_right.vue
-->

<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>
    <el-button @click.prevent="getRight" type="primary">getRight</el-button>
    <el-button @click.prevent="getFormateRight" type="primary">getFormateRight</el-button>
    <el-button @click.prevent="addRightBaseInfo" type="primary">addRightBaseInfo</el-button>
    <el-button @click.prevent="insertRight" type="primary">insertRight</el-button>
    <el-button @click.prevent="deleteRight" type="primary">deleteRight</el-button>

    <div :style="{width: '340px'}">
      <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      highlight-current
      empty-text=" "
      :default-expanded-keys="[]"
      :default-checked-keys="['1-400']"
      :props="defaultProps"
      @node-click=nodeClick
      @check-change=checkChange
      @check=check
      >
      </el-tree>
      </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import sRight from '@/api/db/s_right'

export default {
  data () {
    return {
      active: false,
      msg: 'this is table named s_right function Test',
      data: [],
      // data: [{
      //   id: 1,
      //   label: '一级 1',
      //   children: [{
      //     id: 4,
      //     label: '二级 1-1',
      //     children: [{
      //       id: 9,
      //       label: '三级 1-1-1'
      //     }, {
      //       id: 10,
      //       label: '三级 1-1-2'
      //     }]
      //   }]
      // }, {
      //   id: 2,
      //   label: '一级 2',
      //   children: [{
      //     id: 5,
      //     label: '二级 2-1'
      //   }, {
      //     id: 6,
      //     label: '二级 2-2'
      //   }]
      // }, {
      //   id: 3,
      //   label: '一级 3',
      //   children: [{
      //     id: 7,
      //     label: '二级 3-1'
      //   }, {
      //     id: 8,
      //     label: '二级 3-2'
      //   }]
      // }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  components: {
  },
  methods: {
    async getRight () {
      var ret = await sRight.getRightAsync({ filter: '*' })
      console.log(ret)
      if (ret.length) {
      }
    },
    async getFormateRight () {
      // var ret = await sRight.getRightAsyncFormate(1)
      var ret = await sRight.FormateRightForTree(1)
      console.log(ret)
      this.data = ret
    },
    async addRightBaseInfo () {
      // 当添加新权限组
      // sRight.updateRightBaseInfo({ edit: 'add', type: 'role', id: 2 })

      // 当添加新区域
      // sRight.updateRightBaseInfo({ edit: 'add', type: 'area', id: '436' })
      sRight.updateRightBaseInfo({ edit: 'delete', type: 'area', id: '435' })

      // 当添加新子系统
      // sRight.updateRightBaseInfo({ edit: 'add', type: 'module', id: '16' })
      // sRight.updateRightBaseInfo({ edit: 'delete', type: 'module', id: '16' })
    },
    async insertRight () {
      // console.time()
      // for (var j = 400; j < 435; j++) {
      //   for (var i = 1; i < 16; i++) {
      //     sRight.insertRightSync({
      //       role_id: 1,
      //       area_id: j + '',
      //       module_id: i + '',
      //       behavior: ''
      //     })
      //   }
      // }
      // console.timeEnd()

      // console.time()
      // for (var j = 400; j < 435; j++) {
      //   for (var i = 1; i < 16; i++) {
      //     const ret = await sRight.insertRightAsync({
      //       role_id: 1,
      //       area_id: j + '',
      //       module_id: i + '',
      //       behavior: ''
      //     })
      //   }
      // }
      // console.timeEnd()
    },
    deleteRight () {
      console.log('deleteRight');
      sRight.deleteRightSync({
        role_id: 2,
        area_id: '433',
        module_id: '17'
      })
    },
    nodeClick (data, node, obj) {
      console.log('nodeClick', data, node, obj);
    },
    checkChange (event, data, node, obj) {
      console.log('checkChange', event, data, node, obj);
    },
    check (data, node) {
      console.log('check', data, node);
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
