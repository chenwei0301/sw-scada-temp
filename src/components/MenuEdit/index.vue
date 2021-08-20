<!--
 * @Author: your name
 * @Date: 2021-07-28 14:02:44
 * @LastEditTime: 2021-08-19 16:55:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\DataPoint\Index.vue
-->
<template>
  <div class="MenuEdit">
    <!--列表-->
    <div class="actClass">
        <el-button size="mini" icon="el-icon-refresh" @click="getRrouterMenuList">刷新</el-button>
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="addMenu">新增</el-button>
    </div>

    <el-table
      :data="listData"
      empty-text=" "
      border
      class="tableClass"
      row-key="menu_id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >

        <el-table-column
          label="标题"
          prop="title"
          width="180"
          >
          <template slot-scope="scope">
            <span>{{scope.row.title}}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="图标"
          prop="icon"
          align="center"
          width="60"
          >
          <template slot-scope="scope">
            <span :class="scope.row.icon"></span>
          </template>
        </el-table-column>

        <el-table-column
          label="所属系统"
          prop="module_id"
          align="center"
          width="160"
          >
          <template slot-scope="scope">
            <!-- <span>{{formateModuleId(scope.row.module_id)}}</span> -->
            <el-tag
              type=""
              effect="dark"
              size="mini"
              >{{formateModuleId(scope.row.module_id)}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="类型"
          prop="menu_type"
          align="center"
          width="60"
          >
          <template slot-scope="scope">
            <el-tag
              type=""
              effect="dark"
              size="mini"
              >{{scope.row.menu_type | filter_menuType}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="名称"
          prop="name"
          align="center"
          width="160"
          >
        </el-table-column>

        <el-table-column
          label="节点路由"
          prop="path"
          align="center"
          width="200"
          >
        </el-table-column>

        <el-table-column
          label="重定向"
          prop="redirect"
          align="center"
          width="200"
          >
        </el-table-column>

        <el-table-column
          label="文件路径"
          align="center"
          >
          <template slot-scope="scope">
            <span>{{scope.row.component}}</span>
          </template>
        </el-table-column>

<!--
        <el-table-column
          label="权限"
          prop="module_id"
          align="center"
          width="140"
          >
        </el-table-column>
-->

        <el-table-column
          label="排序号"
          prop="display_order"
          align="center"
          width="60"
          >
          <template slot-scope="scope">
            <el-tag
              type=""
              size="mini"
              >{{scope.row.display_order}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="显示"
          prop="always_show"
          align="center"
          width="60"
          >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.always_show | filter_alwaysShowType"
              size="mini"
              >{{scope.row.always_show | filter_alwaysShow}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="更新时间"
          prop="update_time"
          align="center"
          sortable
          width="160"
          >
          <template slot-scope="scope">
            <span>{{ scope.row.update_time | dateFormat }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="操作"
          align="center"
          width="150"
          >
          <template slot-scope="scope">
            <!-- <el-link
              size="mini"
              type="primary"
              @click="handleEdit('newLine',scope.row)"
            >新增</el-link> -->

            <el-link
              size="mini"
              type="primary"
              @click="handleEdit('edit',scope.row)"
              class="el-icon-edit"
            >编辑</el-link>

            <el-link
              size="mini"
              type="primary"
              @click="handleEdit('delete',scope.row)"
              class="el-icon-delete"
            >删除</el-link>
          </template>
        </el-table-column>

    </el-table>

    <MenuDialog
      ref="MenuDialog"
      :title=dialogTitle
      :modulelist=module.list
      :menulist=listData
      @MenuRefresh=MenuRefresh
      ></MenuDialog>

  </div>
</template>
<script>
import sRouter from '@/api/db/s_router'
import sModule from '@/api/db/s_module'

export default {
  name: 'MenuEdit',
  props: {
    // ...
  },
  data () {
    return {
      listData: [],
      module: {
        obj: {},
        list: []
      },
      dialogTitle: ''

    }
  },
  watch: {
  },
  computed: {},
  filters: {
    filter_menuType: function (val) {
      if (val === 3 || val === '3') {
        return '目录'
      } else if (val === 4 || val === '4') {
        return '菜单'
      }
    },
    filter_alwaysShow: function (val) {
      if (val === 1 || val === '1') {
        return '是'
      } else if (val === 0 || val === '0') {
        return '否'
      }
    },
    filter_alwaysShowType: function (val) {
      if (val === 1 || val === '1') {
        return 'success'
      } else if (val === 0 || val === '0') {
        return 'danger'
      }
    }
  },
  methods: {
    formateModuleId: function (val) {
      return this.module.obj[val] === undefined ? val : this.module.obj[val]
    },
    async getModuleList () {
      const ret = await sModule.getModuleAsync({ filter: 'module_id,module_title' })
      this.module.list = ret
      const objTemp = {}
      if (ret.length > 0) {
        ret.forEach(element => {
          objTemp[element.module_id] = element.module_title
        })
      }
      this.module.obj = objTemp
    },
    async getRrouterMenuList () {
      this.listData = await sRouter.getRouterMenuAsync()
    },
    handleEdit: function (type, row) {
      if (type === 'newLine') {
        this.dialogTitle = '新增'
        this.$refs.MenuDialog.setDialogVisible(type, row)
      } else if (type === 'edit') {
        this.dialogTitle = '编辑'
        this.$refs.MenuDialog.setDialogVisible(type, row)
      } else if (type === 'delete') {
        this.deleteMenuInfo(row)
      }
    },
    deleteMenuInfo: function (row) {
      console.log(row);
      this.$confirm('此操作将永久删除 ' + row.title + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const para = {
          field: 'menu_id',
          fieldVal: row.menu_id
        }
        var ret = await sRouter.deleteRouterAsync(para)
        console.log(ret)
        let msgType = ''
        let msg = ''
        if (ret.affectedRows > 0) {
          msgType = 'success'
          msg = '删除成功'
          this.MenuRefresh()
        } else if (ret.affectedRows === 0) {
          msgType = 'error'
          msg = '删除失败'
        }
        if (ret.warningCount > 0) {
          msgType = 'warning'
          msg = '删除错误'
        }
        this.$message({
          showClose: true,
          message: msg,
          type: msgType,
          center: true,
          duration: 2000,
          offset: 50
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addMenu: function () {
      this.dialogTitle = '新增'
      this.$refs.MenuDialog.setDialogVisible('new', {})
    },
    MenuRefresh () {
      this.getRrouterMenuList()
    }
  },
  directives: {},
  components: {
    MenuDialog: () => import(/* webpackChunkName: "MenuDialog" */'@/components/MenuEdit/MenuDialog')
  },
  /*  生命周期函数  */
  beforeCreate () {},
  created () {
    this.getModuleList()
    this.getRrouterMenuList()
  },
  beforeMount () {
  },
  mounted () {},
  // 运行期间
  beforeUpdate () {},
  updated () {},
  // 被 keep-alive 缓存的组件激活时调用
  activated () {},
  // 被 keep-alive 缓存的组件停用时调用
  deactivated () {},
  // 销毁时期
  beforeDestroy () {},
  destroyed () {},
  // 当捕获一个来自子孙组件的错误时被调用。
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (_err, _vm, _info) => {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.MenuEdit {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .actClass {
    display: flex;
    flex: 1;
    padding: 10px;
  }
  .tableClass{
    font-size: 12px;
    // height: 100%;
    padding: 0 10px;
  }
}
.el-link{
  padding: 0 5px;
  font-size: 12px;
  .el-link--inner {
    padding: 0 3px;
  }
}
</style>
