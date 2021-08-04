<!--
 * @Author: your name
 * @Date: 2021-08-03 11:18:03
 * @LastEditTime: 2021-08-04 14:41:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Main\Index.vue
-->

<template>
  <el-container class="elContent">
    <!-- 页面头部部分 -->
    <el-header class="header">

        <!-- logo title 区域 -->
        <div class="logoInfo">
          <el-image :src=logSrc class="logo"></el-image>
          <!-- <span class="logoTitle">SW-HMI</span> -->
        </div>

        <!-- 水平一级菜单 -->
        <div class="headerMenu">
            <el-menu
              :default-active="activeMenu"
              @select="handleSelect"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              >
            <template v-for="item in items">
              <el-menu-item :index="item.index" :key="item.index">
                <template slot="title">
                    <span slot="title">{{ item.title }}</span>
                </template>
              </el-menu-item>
            </template>
            </el-menu>
        </div>
    </el-header>

    <!-- 主显示区域 -->
    <el-main class="eMain">
      <Dash v-show="activeMenu==='Dash'"></Dash>
      <Draggable v-show="activeMenu==='drag'"></Draggable>
      <Menu v-show="activeMenu==='Menu'"></Menu>
      <Edit v-show="activeMenu==='editTest'"></Edit>
    </el-main>

  </el-container>

</template>

<script>
// import Draggable from '@/components/Draggable/Draggable_Container'
// import Edit from '@/views/Edit'
// import Config from '@/views/Config'

export default {
  data () {
    return {
      logSrc: require('@/assets/icons/32x32.png'),
      title: 'main index',
      activeMenu: 'Menu',
      items: [ // 水平一级菜单栏的菜单
        { index: 'Dash', title: '控制台' },
        { index: 'drag', title: '组态' },
        { index: 'Menu', title: '配置' },
        { index: 'editTest', title: '一级菜单1' }
      ]
    };
  },
  components: {
    Dash: () => import(/* webpackChunkName: "Dash" */'@/views/Dash'),
    Draggable: () => import(/* webpackChunkName: "Draggable" */'@/components/Draggable/Draggable_Container'),
    Edit: () => import(/* webpackChunkName: "Edit" */'@/views/Edit'),
    Menu: () => import(/* webpackChunkName: "Menu" */'@/views/Menu')
  },
  methods: {
    // 切换菜单栏
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.activeMenu = key
    }
  },
  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
};
</script>

<style lang="scss">
.elContent{
  height: 100%;
  .header {
    width: 100%;
    background-color: #576eb1;
    padding: 0;
    .logoInfo {
      float: left;
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      .logo {
        margin: 0 10px;
      }
      .logoTitle {
        font-size: 20px;
        color: #ffffff;
      }
    }
    .headerMenu{
      float: left;
    }
  }
  .eMain {
    padding: 0;
  }
}
</style>
