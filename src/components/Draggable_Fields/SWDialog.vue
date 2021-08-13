<!--
 * @Author: your name
 * @Date: 2021-08-11 17:40:19
 * @LastEditTime: 2021-08-12 09:59:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\SWDialog.vue
-->
<template>
  <div class="SWDialog">
      <el-dialog
        v-drag
        :width=dialogWidth
        :top=top
        :modal="false"
        :close-on-click-modal="false"
        :destroy-on-close="true"
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

        <el-form :model="form">
          <el-form-item label="活动名称" :label-width=formLabelWidth >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width=formLabelWidth>
            <el-select v-model="form.region" placeholder="请选择活动区域" :style="{width:'100%'}">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button size="mini"  type="primary" @click=confirmDialog>确 定</el-button>
          <el-button size="mini" type="danger" @click=cancelDialog>取 消</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SWDialog',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    title: {
      type: [String]
    },
    dialogData: {
      type: [Object]
    }
  },
  // 存放 数据
  data () {
    return {
      dialogVisible: false,
      dialogWidth: '400px',
      formLabelWidth: '90px',
      top: '30vh',

      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    setDialogVisible: function (flag) {
      this.dialogVisible = flag
    },
    confirmDialog: function () {
      console.log('confirmDialog')
      // ...

      this.dialogVisible = false
    },
    cancelDialog: function () {
      console.log('cancelDialog')
      this.dialogVisible = false
    },
    open: function () {
    },
    opened: function () {
    },
    close: function () {
    },
    closed: function () {
    }
  },
  // 监听 属性
  watch: {},
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {},
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {},
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
  errorCaptured: (err, vm, info) => {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.SWDialog{
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
    //background-color: lightsalmon;
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
}
}
</style>
