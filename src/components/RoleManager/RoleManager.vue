<!--
 * @Author: your name
 * @Date: 2021-07-28 14:02:44
 * @LastEditTime: 2021-08-26 14:26:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\DataPoint\Index.vue
-->
<template>
  <div class="DataPoint">
    <!-- 面包屑导航 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="title-bread">权限配置</el-breadcrumb-item>
    </el-breadcrumb> -->
    <!-- 搜索筛选 -->
    <div class="elSearch">

    <el-form :inline="true" :model="formInline">
      <!-- <el-form-item class="user-search" label="角色id：">
        <el-input  v-model="formInline.role_id" placeholder="角色id"></el-input>
      </el-form-item> -->
      <el-form-item class="user-search" label="角色名：">
        <el-input  v-model="formInline.role_name" placeholder="角色名"></el-input>
      </el-form-item>
      <el-form-item class="user-search">
        <el-button  type="primary" icon="el-icon-search" @click.prevent="whereRoles(formInline)">搜索</el-button>
        <el-button  type="info" icon="el-icon-refresh-right" @click.prevent="getRoles()">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!--列表-->
    <div class="actClass">

        <el-button  type="primary" icon="el-icon-plus" @click="handleEdit()">添加</el-button>
        <el-button  type="danger" icon="el-icon-delete" @click="deleteRolesflag(selectdata)">删除</el-button>
    </div>
    <el-table  height="490" @selection-change="selectChange" empty-text=" "
    :data="listData" highlight-current-row v-loading="loading" border element-loading-text="拼命加载中"
    style="width: 100%" :header-cell-style="{background:'#DCDCDC', color:'#000'}" class="listtable">
      <el-table-column  align="center" type="selection" width="60">
      </el-table-column>
      <!-- <el-table-column sortable prop="role_id" label="角色id" width="150">
      </el-table-column> -->
      <el-table-column sortable prop="role_name" label="角色名" >
      </el-table-column>
      <el-table-column sortable prop="role_des" label="角色描述" >
      </el-table-column>
      <el-table-column align="center" sortable prop="is_enable" label="启用状态" width="150">
        <template slot-scope="scope">
          <el-tag :type="scope.row.is_enable | enableFilter"  effect="dark">
            {{ scope.row.is_enable | flagDesFilter}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column sortable prop="create_time" label="创建时间" >
        <template slot-scope="scope">
          <div>{{ scope.row.create_time | dateFormat }}</div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="update_time" label="更新时间" >
        <template slot-scope="scope">
          <div>{{ scope.row.update_time | dateFormat }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="160">
        <template slot-scope="scope">
          <el-link size="mini" type="primary" @click="handleEdit(scope.row)" icon="el-icon-edit-outline">编辑</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>
    <!-- 编辑界面 -->
    <el-dialog :title="title" class="dialogClass"  :visible.sync="editFormVisible" @close="closeDialog" :modal='false' :close-on-click-modal='false' v-drag>
      <el-form label-width="140px" label-position="right" :model="editForm"  ref="editForm" class="elFrom">
        <el-row>
          <el-col :span='12'>
            <el-form-item label="角色名:" prop="role_name"
            :rules="[{ required: true, message: '请输入角色名', trigger: 'blur' }]">
              <el-input size="small" v-model="editForm.role_name" auto-complete="off" placeholder="角色名"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span='12' >
            <el-form-item label="角色描述:" prop="role_des"
            :rules="[{ required: true, message: '请输入角色描述', trigger: 'blur' }]">
            <el-input size="small" v-model="editForm.role_des" auto-complete="off" placeholder="角色描述"></el-input>
        </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span='12'>
            <el-form-item  label="启用状态:" prop="is_enable">
              <el-switch class="switch"  v-model="editForm.is_enable"
                active-text='启用'
                active-color="#13ce66"
                inactive-text='禁用'
                inactive-color="#ff4949"
                >

              </el-switch>
            </el-form-item>
          </el-col>
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
import sRole from '@/api/db/s_role'
import Pagination from '@/components/Pagination/Pagination.vue'

export default {
  name: 'RoleManager',
  props: {},
  data () {
    return {
      nshow: true, // switch开启
      fshow: false, // switch关闭
      loading: false, // 是显示加载
      editFormVisible: false, // 控制编辑页面显示与隐藏
      title: '',
      editForm: {
        role_id: '',
        role_name: '',
        role_des: '',
        is_enable: '',
        create_time: '',
        update_time: ''
      },
      formInline: {
        role_id: '',
        role_name: '',
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
      updateTime: Date.now()
    };
  },
  watch: {
    // 时间观察
    updateTime (newVal, oldVal) {
      this.setDataTotal()
    }
  },

  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    // 数据总数查询
    async setDataTotal () {
      if (this.formInline.role_id === '' && this.formInline.role_name === '') {
        const retCount = await sRole.getRolesAsync({
          filter: 'COUNT(*)',
          order: 'by role_id ASC'
        })
        this.pageparm.total = retCount[0]['COUNT(*)']
      } else {
        const retCount = await sRole.whereRolesAsync({
          selectFilter: 'COUNT(*)',
          whereFilter: "role_id like '%" + this.formInline.role_id + "%' " + "and role_name like '%" + this.formInline.role_name + "%'"
        })
        this.pageparm.total = retCount[0]['COUNT(*)']
      }
    },
    // 查询数据
    async getRoles () {
      const para = {
        selectFilter: '*',
        whereFilter: '1=1 limit 10'
      }
      var ret = await sRole.whereRolesAsync(para)
      // console.table(ret)
      this.formInline.role_name = ''
      this.listData = ret
      this.updateTime = Date.now()
    },
    // 条件过滤查询
    async whereRoles (formInline) {
      // console.log('whereRoles')
      const para = {
        selectFilter: '*',
        whereFilter: "role_name like '%" + formInline.role_name + "%'"
      }
      var ret = await sRole.whereRolesAsync(para)
      this.listData = ret
      this.updateTime = Date.now()
      if (formInline.role_name === '') {
        this.getRoles()
        this.pageparm.currentPage = 1
        this.pageparm.pageSize = 10
      }
    },
    // 新增数据保存
    async insertRoles (editData) {
      var roleName = editData.role_name
      var roledes = editData.role_des
      var isenable = editData.is_enable

      const para = {
        selectFilter: '*',
        whereFilter: "role_Name='" + roleName + "'"
      }
      var ret = await sRole.whereRolesAsync(para)
      if (ret.length > 0) { // update
        this.$message.error('重复添加，失败！')
      } else { // insert
        sRole.insertRolesSync(this, {
          roleName: roleName,
          roledes: roledes,
          isenable: isenable
        })
      }
      this.updateTime = Date.now()
    },
    // 删除数据
    async deleteRoles (roleid) {
      // eslint-disable-next-line camelcase
      var r_id = '';
      for (var i = 0; i < roleid.length; i++) {
        // eslint-disable-next-line camelcase
        r_id += roleid[i].role_id;
        if (i < roleid.length - 1) {
          // eslint-disable-next-line camelcase
          r_id += ','
        }
      }
      const para = {
        field: 'role_id',
        fieldVal: r_id
      }
      var ret = await sRole.deleteRolesAsync(para)
      if (ret.affectedRows > 0) {
        const retCount = await sRole.whereRolesAsync({
          selectFilter: 'role_id',
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
    deleteRolesflag (roleid) {
      // eslint-disable-next-line no-undef
      if (this.selectdata.length > 0) {
        this.$confirm('确定要删除吗?', '信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.deleteRoles(roleid)
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
    async updateRolesSync (row) {
      // var t = new Date()
      const para = {
        role_id: row.role_id,
        role_name: row.role_name,
        role_des: row.role_des,
        is_enable: row.is_enable === true ? 1 : 0,
        create_time: row.create_time
      }
      sRole.updateRolesSync(this, para)
      // console.log('更新数据', this.pageparm)
    },
    // 分页插件事件
    callFather (type, parm) {
      // console.log('type:', type, 'parm:', parm)
      if (type === 'size') {
        this.whereRoleForId(parm)
        // this.formInline.role_id = ''
        this.formInline.role_name = ''
        // this.updateTime = Date.now()
      } else if (type === 'page') {
        setTimeout(() => {
          this.whereRoleForId(parm)
        }, 20)
        // console.log('page-reload:')
      }
      this.pageparm.currentPage = parm.currentPage
      this.pageparm.pageSize = parm.pageSize
      // this.getRoles(this.formInline)
    },
    // 显示编辑界面
    handleEdit: function (row) {
      this.editFormVisible = true;
      // 深拷贝并赋值
      // this.editForm = Object.assign({}, row)
      if (row !== undefined && row !== 'undefined') {
        this.title = '修改';
        this.editForm.role_id = row.role_id;
        this.editForm.role_name = row.role_name;
        this.editForm.role_des = row.role_des;
        // this.editForm.is_enable = row.is_enable;
        this.editForm.is_enable = row.is_enable === 1;
        this.editForm.create_time = row.create_time;
      } else {
        this.title = '添加';
        this.editForm.role_id = '';
        this.editForm.role_name = '';
        this.editForm.role_des = '';
        this.editForm.is_enable = false;
      }
    },
    // 区分添加和编辑的保存方法
    Selectionfunction (editForm) {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          if (this.title === '添加') {
            this.insertRoles(editForm)
          } else {
          // console.log('修改函数' + editData.role_id)
            this.updateRolesSync(editForm)
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
      var ret = await sRole.whereRolesAsync(para)
      this.listData = ret
      // console.log(Date.now())
    }
  },
  // 监听 属性
  // eslint-disable-next-line no-dupe-keys
  // 存放 过滤器
  filters: {
    enableFilter: function (val) {
      return val === 1 ? 'success' : 'danger'
    },
    flagDesFilter: function (val) {
      return val === 1 ? '启用' : '禁用'
    }
  },
  // 自定义 私有指令
  directives: {},
  // 存放 子组件 注册组件
  components: {
    Pagination
  },
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {
    this.getRoles()
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
  font-size: 18px;
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
