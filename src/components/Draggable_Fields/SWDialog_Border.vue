<!--
 * @Author: your name
 * @Date: 2021-08-12 09:50:35
 * @LastEditTime: 2021-08-17 10:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\SWDialog_Border.vue
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
          <el-form-item label="宽度" :label-width=formLabelWidth >
            <el-input-number
              label="边框宽度"
              v-model="form.width"
              :min="0"
              size="small"
              :style="{width:'100%'}"
              @change="widthChange"
              ></el-input-number>
          </el-form-item>

          <el-form-item label="颜色" :label-width=formLabelWidth >
            <div :style="{display:'flex', flex:1}">
              <el-color-picker
                v-model="form.color"
                show-alpha
                size='mini'
                @change=colorChange
                :style="{top:'5px'}"
                ></el-color-picker>
              <span :style="{'margin-left':'5px'}">{{form.color}}</span>
            </div>
          </el-form-item>

          <el-form-item label="风格" :label-width=formLabelWidth>
            <!-- <el-radio v-model="form.style" label="1"><p>none</p></el-radio>
            <el-radio v-model="form.style" label="2"><p>solid</p></el-radio>
            <el-radio v-model="form.style" label="3"><p>dashed</p></el-radio> -->
            <el-radio
              v-for="(item, index) in optionsStyles"
              v-model="form.style"
              :key=index
              :label=item.val
              ><p :style='cssStyles(item.val)'>{{item.text}}</p>
            </el-radio>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary" @click=confirmDialog>确 定</el-button>
          <el-button size="mini" type="danger" @click=cancelDialog>取 消</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SWDialog_Border',
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
      dialogWidth: '500px',
      formLabelWidth: '60px',
      top: '30vh',
      optionsStyles: [
        { val: 'none', text: 'none 无边框' },
        { val: 'solid', text: 'solid 实线边框' },
        { val: 'dashed', text: 'dashed 虚线边框' },
        { val: 'dotted', text: 'dotted 点状边框' },
        { val: 'double', text: 'double 双线边框' },
        { val: 'groove', text: 'groove 凹槽边框,其效果取决于颜色值' },
        { val: 'ridge', text: 'ridge 垄状边框,其效果取决于颜色值' },
        { val: 'inset', text: '3D inset边框,其效果取决于颜色值' },
        { val: 'outset', text: '3D outset边框,其效果取决于颜色值' }
      ],
      // optionsStyles: ['none', 'solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'],
      form: {
        width: 1,
        color: '',
        style: 'solid'
      }
    };
  },
  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    cssStyles: function (val) {
      const arr = {}
      arr['border-width'] = this.form.width + 'px'
      arr['border-color'] = this.form.color
      arr['border-style'] = val
      // console.log(arr)
      return arr
    },
    setDialogVisible: function (flag) {
      this.dialogVisible = flag
    },
    confirmDialog: function () {
      console.log('confirmDialog')
      // ...
      const v = {
        Property: 'border',
        Value: this.form.width + 'px ' + this.form.style + ' ' + this.form.color
      }
      console.log(v);
      this.$emit('standardConfigChange', v)
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
    },
    widthChange: function (val) {
      console.log('widthChange:', val)
    },
    colorChange: function (val) {
      console.log('colorChange:', val)
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
<style lang="scss">
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
.el-radio{
  margin: 5px 0;
  width: 100%;
  display: flex;
  flex: 1;
  .el-radio__label {
    width: 100%;
  }
  p {
    display: inline-block;
    width: 100%;
    text-align: left;
    // border: 1px solid #333333;
  }
}
}
</style>
