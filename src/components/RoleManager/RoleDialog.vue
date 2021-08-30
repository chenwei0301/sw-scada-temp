/* eslint-disable quotes */
<!--
 * @Author: your name
 * @Date: 2021-08-30 14:13:41
 * @LastEditTime: 2021-08-30 16:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\RoleManager\RoleDialog.vue
-->

<template>
  <div class="RoleDialog">
      <el-dialog
        v-drag
        :width=dialogWidth
        :top=top
        :modal="false"
        :close-on-click-modal="false"
        :destroy-on-close="false"
        :visible.sync=dialogVisible
        :custom-class="'border-dialog'"
        @open=open
        @opened=opened
        @close=close
        @closed=closed
        >
        <div slot="title" class="dialog-title">
          <span>{{title}}</span>
        </div>

        <div class="dialog-content">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="线路1" name="first">
              <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                highlight-current
                empty-text=" "
                :style="{height:'240px', overflow: 'auto'}"
                :default-expanded-keys="[]"
                :default-checked-keys=defaultCheckKeys
                :props="defaultProps"
                @check=check
                >
                </el-tree>
            </el-tab-pane>

<!--
            <el-tab-pane label="线路2" name="second">线路2
            </el-tab-pane>
-->
          </el-tabs>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary" @click=confirmDialog>关 闭</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import sRight from '@/api/db/s_right'

export default {
  name: 'MenuDialog',
  props: {},
  // 存放 数据
  data () {
    return {
      title: '授权',
      dialogVisible: false,
      dialogWidth: '600px',
      top: '15vh',
      activeName: 'first',
      data: [],
      module: [],
      behavior: [],
      behaComb: '',
      defaultCheckKeys: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  // 计算 属性
  computed: {
  },
  // 监听 属性
  watch: {},
  // 存放 过滤器
  filters: {},
  // 存放 方法
  methods: {
    async getFormateRight (roleId) {
      var ret = await sRight.FormateRightForTree(roleId)
      this.data = ret.data
      this.module = ret.module
      this.behavior = ret.behavior
      this.behaComb = ret.behaComb
      this.defaultCheckKeys = ret.defaultCheckKeys
    },
    async check (data, node) {
      // console.log('check', data, node);
      // 判断当前节点id 是否在已选择节点当中 从而判断是否选中
      const check = node.checkedKeys.indexOf(data.id) > -1
      const temp = data.id.split('-')
      const para = {
        type: data.type,
        role_id: parseInt(temp[0]),
        area_id: temp[1]
      }
      if (data.type === 'area') { // 选择area节点 各module设置所有behavior
        // 分离id
        para.behavior = check ? this.behaComb : ''
      } else if (data.type === 'module') { // 选择module节点   设置所有behavior
        para.module_id = temp[2]
        para.behavior = check ? this.behaComb : ''
      } else if (data.type === 'behavior') { // 选择behavior节点  设置对应behavior
        para.module_id = temp[2]
        para.behavior_id = temp[3]
      }
      await sRight.updateRightInfoForType(para, check, this.module)
    },
    setDialogVisible: function (roleId) {
      this.dialogVisible = true
      this.getFormateRight(roleId)
    },
    confirmDialog () {
      this.dialogVisible = false
    },
    open: function () {
    },
    opened: function () {
    },
    close: function () {
    },
    closed: function () {
    },
    handleClick (tab, event) {
      console.log(tab, event);
    }

  },

  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {},
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
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
  destroyed () {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.RoleDialog{
  .border-dialog{
    border-radius: 10px;
    .el-dialog__title{
      font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      color: #FFFFFF;
    }
    .el-dialog__header{
      text-align: left;
      padding: 10px;
      color: #ffffff;
      background: #333333;
      border-top-left-radius:10px;
      border-top-right-radius:10px;
      .el-dialog__headerbtn{
        top: 10px;
        right: 10px;
        .el-dialog__close{
          color: #ffffff;
        }
      }
    }
    .el-dialog__body{
      padding: 15px 20px 15px 15px;
      margin-left: 0px;
      color: #606266;
      font-size: 14px;
    }
    .el-dialog__footer{
      padding: 10px 20px;
      background: #333333;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px;
    }
    .el-form-item {
      margin: 0 5px 10px 5px;
    }
    .el-form-item__error{
      padding-top: 0px;
    }
  }
  .dialog-content{
    height: 300px;
    padding: 5px;
    //background-color: #bfd0e2;
  }
}
</style>
