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
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary" @click=confirmDialog>关闭</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
// import sRight from '@/api/db/s_right'

export default {
  name: 'MenuDialog',
  props: {
    title: {
      type: [String]
    }
  },
  // 存放 数据
  data () {
    return {
      // title: '授权',
      dialogVisible: false,
      dialogWidth: '600px',
      top: '15vh',
      activeName: 'first'
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
    setDialogVisible: function (roleId) {
      this.dialogVisible = true
    },
    confirmDialog () {
      console.log('confirmDialog');
      this.dialogVisible = false
    },
    cancelDialog: function () {
      console.log('cancelDialog');
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
    background-color: #bfd0e2;
  }
}
</style>
