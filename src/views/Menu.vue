<!--
 * @Author: your name
 * @Date: 2021-08-04 10:28:09
 * @LastEditTime: 2021-08-05 14:58:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Menu.vue
-->
<template>
  <el-container class="MenuPage">

    <div class="elAside">

      <div class="MenuShow">
        <i :class=iconClass @click=showMenu></i>
      </div>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo menu"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <!--
          <el-menu-item-group>
            <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          -->
          <el-submenu index="1-4">
            <template slot="title"><i class="el-icon-location"></i>选项4</template>
            <el-menu-item index="1-4-1"><i class="el-icon-location"></i>选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

  </div>

  <el-main class="elMain">
    <div class="breakCrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    </div>

<!--
    <el-container class="content"></el-container>
-->
  </el-main>

  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  watch: {

  },
  computed: {
    iconClass: function () {
      return this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  },
  filters: {

  },
  methods: {
    showMenu: function () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    select (index, indexPath) {
      console.log(index, indexPath)
    }
  },
  components: {
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
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.MenuPage{
  height: 100%;
  .elAside{
    height: 100%;
    box-shadow: 10px 0 10px -10px #c7c7c7;
    .MenuShow{
      height: 20px;
      width: 100%;
      text-align: center;
    }
    .menu{
      height: 100%;
    }
  }
  .elMain{
    margin: 5px;
    padding: 5px;
    //background: #ffffff;
    width: 100%;
    .breakCrumb{
      background: #ffffff;
    }
    .content{
      height: 100%;
      background-color: lightcoral;
    }
  }
}
</style>
