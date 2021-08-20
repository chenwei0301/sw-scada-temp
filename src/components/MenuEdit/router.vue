<!--
 * @Author: your name
 * @Date: 2021-07-28 14:02:44
 * @LastEditTime: 2021-08-16 14:38:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\DataPoint\Index.vue
-->
<template>
  <div class="DataPoint">
    <!-- 面包屑导航 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="title-bread">菜单路由配置</el-breadcrumb-item>
    </el-breadcrumb> -->
    <!-- 搜索筛选 -->
    <div class="elSearch">

    <el-form :inline="true" :model="formInline">
      <el-form-item class="user-search" label="所属系统：">
      <el-select v-model="formInline.module_id" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>
      <el-form-item class="user-search" label="菜单名：">
        <el-input  v-model="formInline.title" placeholder="菜单名"></el-input>
      </el-form-item>
      <el-form-item class="user-search">
        <el-button  type="primary" icon="el-icon-search" @click.prevent="whererouter(formInline)">搜索</el-button>
        <el-button  type="info" icon="el-icon-refresh-right" @click.prevent="getrouter()">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!--列表-->
    <div class="actClass">

        <el-button  type="primary" icon="el-icon-plus" @click="handleEdit()">添加</el-button>
        <el-button  type="danger" icon="el-icon-delete" @click="deleterouterflag(selectdata)">删除</el-button>
    </div>
    <el-table  height="720" @selection-change="selectChange" empty-text=" "
    :data="listData" highlight-current-row v-loading="loading" border element-loading-text="拼命加载中"
    style="width: 100%" :header-cell-style="{background:'#DCDCDC', color:'#000'}" class="listtable">
      <el-table-column  align="center" type="selection" width="60">
      </el-table-column>
      <!-- <el-table-column sortable prop="menu_id" label="菜单id">
      </el-table-column> -->
      <el-table-column sortable prop="parent_id" label="父级菜单id" >
      </el-table-column>
      <el-table-column sortable prop="module_id" label="所属系统" >
        <template slot-scope="scope">
            {{ scope.row.module_id | moduleFilter}}
        </template>
      </el-table-column>
      <el-table-column align="center" sortable prop="menu_type" label="导航类型">
        <template slot-scope="scope">
            {{ scope.row.menu_type | flagDesFilter}}
        </template>
      </el-table-column>
      <el-table-column sortable prop="display_order" label="菜单序号" >
      </el-table-column>
      <el-table-column sortable prop="title" label="菜单名" >
      </el-table-column>
      <el-table-column sortable prop="path" label="路径" >
      </el-table-column>
      <el-table-column sortable prop="redirect" label="重定向" >
      </el-table-column>
      <el-table-column sortable prop="component" label="组件" >
      </el-table-column>
      <el-table-column sortable prop="name" label="名称" >
      </el-table-column>
      <el-table-column sortable prop="icon" label="图标" >
      </el-table-column>
      <el-table-column sortable prop="always_show" label="始终显示" >
      </el-table-column>
      <el-table-column sortable prop="create_time" label="创建时间" width="140">
        <template slot-scope="scope">
          <div>{{ scope.row.create_time | dateFormat }}</div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="update_time" label="更新时间" width="140">
        <template slot-scope="scope">
          <div>{{ scope.row.update_time | dateFormat }}</div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="remark" label="备注" >
      </el-table-column>
      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <el-link size="mini" type="primary" @click="handleEdit(scope.row)" icon="el-icon-edit-outline">编辑</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <!-- <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination> -->
    <!-- 编辑界面 -->
    <el-dialog :title="title" class="dialogClass"  :visible.sync="editFormVisible" @close="closeDialog" :modal='false' :close-on-click-modal='false' >
      <el-form label-width="140px" label-position="right" :model="editForm"  ref="editForm" class="elFrom">
        <!-- <el-form-item label="角色id" prop="role_id">
          <el-input size="small" v-model="editForm.role_id" auto-complete="off" placeholder="角色id"></el-input>
        </el-form-item> -->
        <el-row>
          <el-col :span='12'>
            <el-form-item label="父级菜单id:" prop="parent_id">
              <el-input size="small" v-model="editForm.parent_id" auto-complete="off" placeholder="父级菜单id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='12' >
            <el-form-item label="所属系统:" prop="module_id"
            :rules="[{ required: true, message: '请选择所属系统', trigger: 'blur' }]">
              <el-select v-model="editForm.module_id" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value"
                  :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span='12'>
            <el-form-item  label="导航类型:" prop="menu_type"
            :rules="[{ required: true, message: '请选择导航类型', trigger: 'blur' }]">
              <el-select v-model="editForm.menu_type" placeholder="请选择">
                <el-option v-for="items in modules" :key="items.val"
                  :label="items.label" :value="items.val">
                </el-option>
            </el-select>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item  label="菜单序号:" prop="display_order"
            :rules="[{ required: true, message: '请输入菜单序号', trigger: 'blur' }]">
              <el-input size="small" v-model="editForm.display_order" auto-complete="off" placeholder="菜单序号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span='12'>
            <el-form-item  label="菜单名:" prop="title"
            :rules="[{ required: true, message: '请输入菜单名', trigger: 'blur' }]">
              <el-input size="small" v-model="editForm.title" auto-complete="off" placeholder="菜单名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item  label="路径:" prop="path">
              <el-input size="small" v-model="editForm.path" auto-complete="off" placeholder="路径"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span='12'>
            <el-form-item  label="重定向:" prop="redirect">
              <el-input size="small" v-model="editForm.redirect" auto-complete="off" placeholder="重定向"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item  label="组件:" prop="component">
              <el-input size="small" v-model="editForm.component" auto-complete="off" placeholder="组件"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span='12'>
            <el-form-item  label="图标:" prop="icon">
              <el-input size="small" v-model="editForm.icon" auto-complete="off" placeholder="图标"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item  label="始终显示:" prop="always_show">
              <el-switch class="switch"  v-model="editForm.always_show"
                active-text='是'
                active-color="#13ce66"
                inactive-text='否'
                inactive-color="#ff4949"
                >
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
            <el-form-item  label="备注:" prop="remark">
              <el-input size="small" v-model="editForm.remark" auto-complete="off" placeholder="备注"></el-input>
            </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" type="danger" @click="closeDialog">取消</el-button>
        <el-button size="small" type="primary" :loading="loading" class="title" @click="Selectionfunction(editForm)">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import sRouter from '@/api/db/s_router'
// import Pagination from '@/components/Pagination/Pagination'

export default {
  name: 'DataPoint',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      default: 'DataPoint'
    }
    // ...
  },
  // 创建实例时传递 props。主要作用是方便测试。
  // propsData: {},
  // 存放 数据
  data () {
    return {
      nshow: true, // switch开启
      fshow: false, // switch关闭
      loading: false, // 是显示加载
      editFormVisible: false, // 控制编辑页面显示与隐藏
      // title: "添加",
      title: 'DataPoint',
      editForm: {
        menu_id: '',
        parent_id: '',
        module_id: '',
        menu_type: '',
        display_order: '',
        title: '',
        path: '',
        redirect: '',
        component: '',
        name: '',
        icon: '',
        always_show: '',
        create_time: '',
        update_time: '',
        remark: ''
      },
      formInline: {
        module_id: '',
        title: '',
        page: 1,
        limit: 10,
        permission: ''
      },
      // 选择数据
      selectdata: [],
      userparm: [], // 搜索权限
      listData: [], // 用户数据
      // 分页参数
      pageparm: {
        currentPage: 1, // 当前页面
        pageSize: 10, // 页面大小
        total: 10
      },
      modules: [{ val: 0, label: '主页home' },
        { val: 1, label: '工具栏导航' },
        { val: 2, label: '工具栏导航界面' },
        { val: 3, label: '主页导航' },
        { val: 4, label: '主页导航界面' },
        { val: 5, label: '界面内调用弹出' }],
      options: [{ value: 1, label: '系统管理' },
        { value: 2, label: '电力系统' },
        { value: 3, label: '环控系统' },
        { value: 4, label: '火灾报警' },
        { value: 5, label: '门禁系统' },
        { value: 6, label: '广播系统' },
        { value: 7, label: '售检票' },
        { value: 8, label: '视频监控' },
        { value: 9, label: '乘客信息' },
        { value: 10, label: '屏蔽门' },
        { value: 11, label: '信号系统' },
        { value: 12, label: '集中告警' },
        { value: 13, label: '统计分析' },
        { value: 14, label: 'UPS系统' },
        { value: 15, label: '综合管理' }],
      updateTime: Date.now()
    };
  },
  /**
   * 数据发生改变
   */

  watch: {
    // 时间观察
    updateTime (newVal, oldVal) {
      console.log('updateTime--', newVal, oldVal)
      this.setDataTotal()
    }
  },

  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    // 数据总数查询
    async setDataTotal () {
      if (this.formInline.module_id === '' && this.formInline.title === '') {
      // if (this.formInline.title === '') {
        const retCount = await sRouter.getRouterAsync({
          field: 'COUNT(*)'
          // order: 'by menu_id ASC'
        })
        this.pageparm.total = retCount[0]['COUNT(*)']
      } else {
        const retCount = await sRouter.whereRouterAsync({
          selectFilter: 'COUNT(*)',
          whereFilter: "module_id like '" + this.formInline.module_id + "'" + ' ' + "and title like '%" + this.formInline.title + "%'"
        })
        this.pageparm.total = retCount[0]['COUNT(*)']
      }
    },
    // 查询数据
    async getrouter () {
      const para = {
        // selectFilter: 'role_id,role_name,role_des,(case is_enable when  "0" then "禁用" else "启用" end) as is_enable,create_time,update_time',
        selectFilter: '*',
        whereFilter: '1=1 limit 10'
      }
      var ret = await sRouter.whereRouterAsync(para)
      // console.table(ret)
      this.formInline.module_id = ''
      this.formInline.title = ''
      this.listData = ret
      this.updateTime = Date.now()
      ret.forEach(element => {
        // console.log(this.$moment(element.update_time).format('yyyy-MM-DD HH:mm:ss') + '.' + element.update_timeMS.toString())
      })
      // console.log(this.formInline.page, this.formInline.limit, this.listData.length)
    },
    // 条件过滤查询
    async whererouter (formInline) {
      // console.log('whererouter')
      const para = {
        selectFilter: '*',
        whereFilter: "module_id like '" + formInline.module_id + "'" + ' ' + "and title like '%" + formInline.title + "%'"
      }
      var ret = await sRouter.whereRouterAsync(para)
      this.listData = ret
      this.updateTime = Date.now()
      if (formInline.module_id === '' && formInline.title === '') {
      // if (formInline.title === '') {
        this.getrouter()
        this.pageparm.currentPage = 1
        this.pageparm.pageSize = 10
      }
    },
    // 新增数据保存
    async insertrouter (editData) {
      var menuid = editData.menu_id
      var parentid = editData.parent_id
      var moduleid = editData.module_id
      var menutype = editData.menu_type
      var displayorder = editData.display_order
      var title = editData.title
      var path = editData.path
      var redirect = editData.redirect
      var component = editData.component
      var name = editData.name
      var icon = editData.icon
      var alwaysshow = editData.always_show
      var remark = editData.remark
      console.log('editData' + ':' + title);

      const para = {
        selectFilter: '*',
        whereFilter: "module_id='" + moduleid + "'" + ' ' + "and title='" + title + "'"
      }
      var ret = await sRouter.whereRouterAsync(para)
      // var t = new Date()
      // console.log('ret.length' + ':' + ret.length)
      if (ret.length > 0) { // update
        this.$message.error('重复添加，失败！')
      } else { // insert
        sRouter.insertRouterAsync(this, {
          menu_id: menuid,
          parent_id: parentid,
          module_id: moduleid,
          menu_type: menutype,
          display_order: displayorder,
          title: title,
          path: path,
          redirect: redirect,
          component: component,
          name: name,
          icon: icon,
          always_show: alwaysshow,
          remark: remark
          // createtime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
          // updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss')
        })
      }
      this.updateTime = Date.now()
    },
    // 删除数据
    async deleterouter (menuid) {
      // console.info(id)
      // eslint-disable-next-line camelcase
      var m_id = '';
      for (var i = 0; i < menuid.length; i++) {
        // console.log(roleid[i].role_id);
        // eslint-disable-next-line camelcase
        m_id += menuid[i].menu_id;
        if (i < menuid.length - 1) {
          // eslint-disable-next-line camelcase
          m_id += ','
        }
      }
      const para = {
        field: 'menu_id',
        fieldVal: m_id
      }
      var ret = await sRouter.deleterouterAsync(para)
      if (ret.affectedRows > 0) {
        console.log('delete success')
        const retCount = await sRouter.whererouterAsync({
          selectFilter: 'menu_id',
          whereFilter: 'true limit ' + ((this.pageparm.currentPage - 1) * this.pageparm.pageSize) + ',' + this.pageparm.pageSize
        })
        if (retCount.length === 0) {
          --this.pageparm.currentPage
        }
        this.whereRoleForId(this.pageparm)
        this.updateTime = Date.now()
      } else if (ret.affectedRows === 0) {
        console.log('not exist')
      }
      if (ret.warningCount > 0) {
        console.log('delete warning')
      }
    },
    // 删除弹窗提示
    deleterouterflag (menuid) {
      // console.log(roleid)
      // eslint-disable-next-line no-undef
      if (this.selectdata.length > 0) {
        this.$confirm('确定要删除吗?', '信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.deleterouter(menuid)
            this.selectdata = []
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      } else {
        this.$message({
          type: 'warning',
          message: '请选择需要执行的选项！'
        })
      }
    },
    // 更新数据
    async updaterouterSync (row) {
      // console.info('updaterouterSync' + row.role_id)
      var t = new Date()
      const para = {
        menu_id: row.menu_id,
        parent_id: row.parent_id,
        module_id: row.module_id,
        menu_type: row.menu_type,
        display_order: row.display_order,
        title: row.title,
        path: row.path,
        redirect: row.redirect,
        component: row.component,
        name: row.name,
        icon: row.icon,
        always_show: row.always_show === true ? 1 : 0,
        create_time: row.create_time,
        update_Time: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
        remark: row.remark
      }
      sRouter.updateRouterAsync(this, para)
      // console.log('更新数据', this.pageparm)
    },
    // 分页插件事件
    callFather (type, parm) {
      if (type === 'size') {
        this.whereRoleForId(parm)
        this.formInline.title = ''
        // this.updateTime = Date.now()
      } else if (type === 'page') {
        setTimeout(() => {
          this.whereRoleForId(parm)
        }, 20)
        // console.log('page-reload:')
      }
      this.pageparm.currentPage = parm.currentPage
      this.pageparm.pageSize = parm.pageSize
      // this.getrouter(this.formInline)
    },
    // 显示编辑界面
    handleEdit: function (row) {
      this.editFormVisible = true;
      // 深拷贝并赋值
      // this.editForm = Object.assign({}, row)
      if (row !== undefined && row !== 'undefined') {
        this.title = '修改';
        this.editForm.menu_id = row.menu_id;
        this.editForm.parent_id = row.parent_id;
        this.editForm.module_id = row.module_id;
        this.editForm.menu_type = row.menu_type;
        this.editForm.display_order = row.display_order;
        this.editForm.title = row.title;
        this.editForm.path = row.path;
        this.editForm.redirect = row.redirect;
        this.editForm.component = row.component;
        this.editForm.name = row.name;
        this.editForm.icon = row.icon;
        this.editForm.always_show = row.always_show === 1;
        this.editForm.create_time = row.create_time;
        this.editForm.remark = row.remark;
      } else {
        this.title = '添加';
        this.editForm.menu_id = '';
        this.editForm.parent_id = '';
        this.editForm.module_id = '';
        this.editForm.menu_type = '';
        this.editForm.display_order = '';
        this.editForm.title = '';
        this.editForm.path = '';
        this.editForm.redirect = '';
        this.editForm.component = '';
        this.editForm.name = '';
        this.editForm.icon = '';
        this.editForm.always_show = false;
        this.editForm.remark = '';
      }
    },
    // 区分添加和编辑的保存方法
    Selectionfunction (editForm) {
      console.log('修改函数' + editForm.path)
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          if (this.title === '添加') {
            this.insertrouter(editForm)
          } else {
          // console.log('修改函数' + editData.role_id)
            this.updaterouterSync(editForm)
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 选择复选框事件
    selectChange (val) {
      this.selectdata = val;
    },
    // 关闭编辑、增加弹出框
    closeDialog () {
      this.editFormVisible = false;
      this.$refs.editForm.resetFields();
    },
    // 页码跳转函数
    async whereRoleForId (parm) {
      var idFrom = parm.currentPage// 当前页面
      var idTo = parm.pageSize// 页面大小
      const para = {
        selectFilter: '*',
        whereFilter: '1=1 limit ' + '' + (idFrom - 1) * idTo + ',' + idTo
      }
      var ret = await sRouter.whereRouterAsync(para)
      this.listData = ret
      // console.log(Date.now())
    }
  },
  // 监听 属性
  // eslint-disable-next-line no-dupe-keys
  // 存放 过滤器
  filters: {
    flagDesFilter: function (val) {
      switch (val) {
        case 0 :
          return '主页home';
        case 1 :
          return '工具栏导航';
        case 2 :
          return '工具栏导航界面';
        case 3 :
          return '主页导航';
        case 4 :
          return '主页导航界面';
        case 5 :
          return '界面内调用弹出'
      }
    },
    moduleFilter: function (val) {
      switch (val) {
        case 1 :
          return '系统管理';
        case 2 :
          return '电力系统';
        case 3 :
          return '环控系统';
        case 4 :
          return '火灾报警';
        case 5 :
          return '门禁系统';
        case 6 :
          return '广播系统';
        case 7 :
          return '售检票';
        case 8 :
          return '视频监控';
        case 9 :
          return '乘客信息';
        case 10 :
          return '屏蔽门';
        case 11 :
          return '信号系统';
        case 12 :
          return '集中告警';
        case 13 :
          return '统计分析';
        case 14 :
          return 'UPS系统';
        case 15 :
          return '综合管理'
      }
    }
  },
  // 自定义 私有指令
  directives: {},
  // 存放 子组件 注册组件
  components: {
    // Pagination
  },
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {
    this.getrouter()
    this.setDataTotal()
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.DataPoint {
  width: 100%;
  height: 100%;
  // background: rgba(215, 215, 215, 1);
}
.elSearch{
  text-align:center;
  height: 60px;
  background: #ffffff;
  margin-bottom: 10px;
}
.actClass {
  display: flex;
  flex: 1;
  height: 40px;
  margin-top: 10px;
  background: #ffffff;
  padding: 25px 5px;
}
.title-bread {
  font-size: 25px;
  font-weight: 700;
  margin: 6px 10px;
}
.listtable{
  font-family: 'Arial Normal', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  letter-spacing: normal;
  line-height: normal;
  text-transform: none;
}
.user-search {
  font-family: "PingFang SC";
  // font-size: 25px;
  font-weight: 700;
  margin: 10px 10px;
  float: left;
}
.el-dialog {
  border-radius:25px;
}
.dialogClass .el-dialog__title{
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #FFFFFF;
}
.dialogClass .el-dialog__close{
  color: #FFFFFF;
}
.dialogClass .el-dialog__header{
  text-align: left;
  color: #ffffff;
  background: #333333;
  border-top-left-radius:25px;
  border-top-right-radius:25px;
}
.dialogClass .el-dialog__body {
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: 0px;
  color: #606266;
  font-size: 14px;
  margin-top: 20px;
}
.dialogClass .el-dialog__footer {
  text-align: right;
}
.elFrom{
  padding: 0 30px;
}
.el-dialog .el-form-item__label{
  font-size: 20px;
}
.switch {
  left: -40px;
}
</style>
