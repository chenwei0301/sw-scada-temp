<!--
 * @Author: your name
 * @Date: 2021-08-03 11:18:03
 * @LastEditTime: 2021-08-04 10:42:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Main\Index.vue
-->

<template>
  <el-container>
    <!-- 页面头部部分 -->
    <el-header class="header">

        <!-- logo title 区域 -->
        <div class="logoInfo">
          <el-image :src=logSrc class="logo"></el-image>
          <span class="logoTitle">SW-HMI</span>
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
      <Draggable v-show="activeMenu==='drag'"></Draggable>
      <Config v-show="activeMenu==='config'"></Config>
      <Edit v-show="activeMenu==='editTest'"></Edit>
    </el-main>

  </el-container>

</template>

<script>
import Draggable from '@/components/Draggable/Draggable_Container'
import Edit from '@/views/Edit'
import Config from '@/views/Config'
import MainHeader from '@/components/Main/Main_Header'

export default {
  data () {
    return {
      logSrc: require('@/assets/icons/32x32.png'),
      title: 'main index',
      menuType: 'vShow',
      activeMenu: 'drag',
      items: [ // 水平一级菜单栏的菜单
        { index: 'drag', title: '组态' },
        { index: 'config', title: '配置' },
        { index: 'editTest', title: '一级菜单1' }
        // { index: 'test2', title: '一级菜单2' },
        // { index: 'test3', title: '一级菜单3' },
        // { index: 'permission', title: '管理员权限' }
      ]
    };
  },
  components: {
    Draggable,
    Edit,
    Config,
    MainHeader
  },
  methods: {
    // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
    toIndex () {
      if (this.menuType === 'router') {
        return this.$route.path.split('/')[1];
      } else if (this.menuType === 'vShow') {
        return this.activeMenu
      }
    },
    // 切换菜单栏
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (this.menuType === 'router') {
        this.$router.push('/' + keyPath)
      } else if (this.menuType === 'vShow') {
        this.activeMenu = key
      }
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
.el-tabs--border-card{
  .el-tabs__content {
    padding: 0;
    height: 100%;
  }
}
.tabPage {
   height: calc(100%-40px);
}
.eHeader {
  padding: 0;
}
.eMain{
  margin: 0;
  padding: 0;
}
.header {
  //position: relative;
  width: 100%;
  background-color: #80a1ca;
  padding: 0;
  .logoInfo {
    float: left;
    //margin-left: 60px;
    //margin-top: 17.5px;
    height: 60px;
    width: 200px;
    //vertical-align: middle;
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

</style>
