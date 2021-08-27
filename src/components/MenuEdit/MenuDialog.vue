/* eslint-disable quotes */
<!--
 * @Author: your name
 * @Date: 2021-08-17 09:17:20
 * @LastEditTime: 2021-08-26 09:37:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\MenuEdit\MenuDialog.vue
-->

<template>
  <div class="MenuDialog">
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

        <el-form
          :model="form"
          :label-position="labelPosition"
          :label-width=formLabelWidth
          :rules="rules"
          ref="form"
          class="demo-ruleForm"
          >

          <el-row>
            <el-col :span="24">
              <el-form-item label="类型">
                <el-radio-group v-model="form.menu_type" @change=changeMenuType>
                  <el-radio label="list">目录</el-radio>
                  <el-radio label="menu">菜单</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="所属系统">
                <!-- <el-input v-model="form.module_id" size="mini" clearable></el-input> -->
                <el-select v-model="form.module_id" size="mini" :style="{width:'100%'}" placeholder="请选择">
                  <el-option
                    v-for="item in modulelist"
                    :key="item.module_id"
                    :label="item.module_title"
                    :value="item.module_id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="图标" class="tubiao">
                <el-popover placement="bottom-start" width="260" trigger="focus" popper-class="properClass">
                  <el-input v-model="form.icon" size="mini" slot="reference" clearable></el-input>
                  <div class="iconBox">
                    <ul style="display:" class="iconList">
                      <li v-for='(item, index) in iconArr' :key=index><el-button :class=item size="mini" @click="iconSelect(item)"></el-button></li>
                    </ul>
                  </div>
                </el-popover>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="标题" prop="title">
                <el-input v-model="form.title" size="mini" maxlength="20" show-word-limit clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="名称" prop="name">
                <el-input v-model="form.name" size="mini" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>

<!--
          <el-row>
            <el-col :span="12">
            </el-col>
            <el-col :span="12">
            </el-col>
          </el-row>
-->
          <el-row v-if="form.menu_type==='menu'">
            <el-col :span="12">
              <el-form-item label="路由">
                <el-input v-model="form.path" size="mini" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="重定向">
                <el-input v-model="form.redirect" size="mini" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="上级节点">
                <el-popover placement="bottom-start" width="260" trigger="focus" popper-class="properClass" :disabled="form.menu_type==='list'">
                  <el-input v-model="form.parent_title" size="mini" slot="reference" clearable :disabled="form.menu_type==='list'"></el-input>
                  <div class="menuBox">
                    <el-tree :data="menulist" :props="defaultProps" highlight-current @node-click="handleNodeClick"></el-tree>
                  </div>
                </el-popover>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="排序号">
                <el-input-number
                  label="排序号"
                  placeholder="请填写排序号"
                  v-model="form.display_order"
                  :min="0"
                  size="mini"
                  step-strictly
                  controls-position="right"
                  :style="{width:'100%'}"
                  @change="displayOrderChange"
                  ></el-input-number>
                </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="是否显示">
                <el-switch v-model="form.always_show" size="mini"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="路由缓存" v-if="form.menu_type==='menu'">
                <el-radio-group v-model="form.pathCache">
                  <el-radio label="1">开启</el-radio>
                  <el-radio label="0">关闭</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row v-if="form.menu_type==='menu'">
            <el-col :span="24">
              <el-form-item label="文件路径">
                <el-input v-model="form.component" size="mini"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form.remark" size="mini" placeholder="请输入内容" :autosize="{ minRows: 2, maxRows: 4}" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary" @click=confirmDialog>确 定</el-button>
          <el-button size="mini" type="danger" @click=cancelDialog>取 消</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import sRouter from '@/api/db/s_router'
import iconArr from '@/api/draggable/iconClass'
export default {
  name: 'MenuDialog',
  props: {
    title: {
      type: [String]
    },
    menulist: {
      type: [Array]
    },
    modulelist: {
      type: [Array]
    }
  },
  // 存放 数据
  data () {
    return {
      dialogVisible: false,
      dialogWidth: '800px',
      formLabelWidth: '80px',
      labelPosition: 'left',
      top: '15vh',
      form: {
        menu_id: 0,
        menu_type: 'list',
        module_id: '',
        title: '',
        name: '',
        parent_id: 1,
        parent_title: '',
        path: '',
        pathCache: '1',
        redirect: '',
        component: '',
        always_show: true,
        icon: '',
        display_order: '',
        remark: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      iconArr: iconArr,
      dialogType: ''
    }
  },
  // 计算 属性
  computed: {
    menuListId: function () {
      var ids = []
      this.menulist.forEach(element => {
        ids.push(element.menu_id)
      })
      return ids
    }
  },
  // 监听 属性
  watch: {},
  // 存放 过滤器
  filters: {},
  // 存放 方法
  methods: {
    async setData (type, data) {
      this.dialogType = type
      if (type === 'new') {
      } else if (type === 'newLine') {

      } else if (type === 'edit') {
        const formData = {
          menu_id: data.menu_id,
          menu_type: data.path === '' ? 'list' : 'menu',
          title: data.title,
          module_id: String(data.module_id),
          name: data.name,
          parent_id: data.parent_id,
          parent_title: '',
          // parent_title: '',
          path: data.path,
          pathCache: '1',
          redirect: data.redirect,
          component: data.component,
          always_show: Boolean(data.always_show),
          icon: data.icon,
          display_order: data.display_order,
          remark: data.remark
        }
        this.form = formData
        this.setParentTitle(data.parent_id)
      }
    },
    setDialogVisible: function (type, data) {
      this.setData(type, data)
      this.dialogVisible = true
    },
    changeMenuType: function (val) {
      console.log(val);
      if (val === 'list') {
        this.form.parent_id = 1
        this.form.parent_title = ''
      }
    },
    async confirmDialog () {
      if (this.dialogType === 'new') {
        var para = this.form
        // 重复判断  判断同一 parent_id 下，  display_order不能有重复
        const filter = 'parent_id=' + para.parent_id + ' and display_order=' + para.display_order
        const checkRes = await sRouter.whereRouterAsync({ selectFilter: '*', whereFilter: filter })
        if (checkRes.length > 0) {
          this.$message({
            showClose: true,
            message: '当前序号已被占用，请重新选择序号！',
            type: 'warning',
            center: true,
            duration: 2000,
            offset: 50
          })
          return false
        }

        console.log(this.menuListId);
        console.log(para);
        console.log(this.menuListId.indexOf(para.parent_id));
        // 是否二级节点选择了目录类型
        if (this.menuListId.indexOf(para.parent_id) < 0 && para.menu_type === 'menu') {
          this.$message({
            showClose: true,
            message: '当前仅支持二级菜单，请重新类型或者上级节点！',
            type: 'warning',
            center: true,
            duration: 2000,
            offset: 50
          })
          return false
        }
        para.menu_id = null
        para.menu_type = para.menu_type === 'list' ? 3 : 4
        para.module_id = 1
        const ret = await sRouter.insertRouterAsync(para)

        let msgType = ''
        let msg = ''
        if (ret.affectedRows > 0) {
          msgType = 'success'
          msg = '新增成功'
          this.resetForm('form')
          this.$emit('MenuRefresh')
        } else if (ret.affectedRows === 0) {
          msgType = 'error'
          msg = '新增失败'
        }
        if (ret.warningCount > 0) {
          msgType = 'warning'
          msg = '新增错误'
        }
        this.$message({
          showClose: true,
          message: msg,
          type: msgType,
          center: true,
          duration: 2000,
          offset: 50
        })
      } else if (this.dialogType === 'edit') {
        const data = this.form
        // eslint-disable-next-line quotes
        const filter = "parent_id=" + data.parent_id +
                        // eslint-disable-next-line quotes
                        ",module_id=" + data.module_id +
                        // eslint-disable-next-line quotes
                        ",menu_type=" + (data.menu_type === "list" ? 3 : 4) +
                        // eslint-disable-next-line quotes
                        ",display_order=" + data.display_order +
                        // eslint-disable-next-line quotes
                        ",path='" + data.path +
                        // eslint-disable-next-line quotes
                        "',redirect='" + data.redirect +
                        // eslint-disable-next-line quotes
                        "',component='" + data.component +
                        // eslint-disable-next-line quotes
                        "',name='" + data.name +
                        // eslint-disable-next-line quotes
                        "',icon='" + data.icon +
                        // eslint-disable-next-line quotes
                        "',always_show=" + data.always_show +
                        // eslint-disable-next-line quotes
                        ",remark='" + data.remark +
                        // eslint-disable-next-line quotes
                        "',update_time=NOW()"
        const para = {
          setFilter: filter,
          whereFilter: 'menu_id=' + data.menu_id
        }
        const ret = await sRouter.updateRouterAsync(para)
        let msgType = ''
        let msg = ''
        if (ret.affectedRows > 0) {
          msgType = 'success'
          msg = '更新成功'
          this.resetForm('form')
          this.$emit('MenuRefresh')
        } else if (ret.affectedRows === 0) {
          msgType = 'error'
          msg = '更新失败'
        }
        if (ret.warningCount > 0) {
          msgType = 'warning'
          msg = '更新错误'
        }
        this.$message({
          showClose: true,
          message: msg,
          type: msgType,
          center: true,
          duration: 2000,
          offset: 50
        })
      }
    },
    cancelDialog: function () {
      this.resetForm('form')
    },
    open: function () {
    },
    opened: function () {
    },
    close: function () {
      this.resetForm('form')
    },
    closed: function () {
    },
    displayOrderChange: function (val) {
      console.log('displayOrderChange:', val)
    },
    handleNodeClick (obj, node, comp) {
      console.log(obj, node, comp)
      this.form.parent_title = obj[this.defaultProps.label]
      this.form.parent_id = obj.menu_id
    },
    iconSelect: function (item) {
      this.form.icon = item
    },
    resetForm: function (formName) {
      this.form = this.setFormDefault()
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    },
    setFormDefault: function () {
      return {
        menu_type: 'list',
        title: '',
        name: '',
        parent_id: 1,
        parent_title: '',
        path: '',
        pathCache: '1',
        redirect: '',
        component: '',
        always_show: true,
        icon: '',
        display_order: '',
        remark: ''
      }
    },
    setParentTitle: function (id) {
      if (id === 1 || id === '') {
        this.form.parent_title = ''
      } else {
        this.recircle(this.menulist, id)
      }
    },
    recircle: function (arr, id) {
      console.log('recircle:', id);
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].menu_id === id) {
          this.form.parent_title = arr[i].title
          return
        } else {
          // if (arr.children.length > 0) {
          //   this.recircle(arr[i].children, id)
          // }
          for (var j = 0; j < arr[i].children.length; j++) {
            if (arr[i].children[j].menu_id === id) {
              this.form.parent_title = arr[i].children[j].title
              return
            }
          }
        }
      }
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
    // console.log('MenuDialog:', this.menulist)
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
.MenuDialog{
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
}
</style>
