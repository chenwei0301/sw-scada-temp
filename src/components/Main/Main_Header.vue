<!--
 * @Author: your name
 * @Date: 2021-08-03 16:28:50
 * @LastEditTime: 2021-08-04 09:10:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Main\Main_Header.vue
-->

<template>
  <div class="wrapper">
    <!-- 页面头部部分 -->
    <div class="header">
        <div class="logo">SW-HMI</div>
        <!-- 水平一级菜单 -->
        <div style="float:left;">
            <el-menu
              :default-active="toIndex()"
              mode="horizontal"
              @select="handleSelect"
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

<!--

        <div class="header-right">
            <div class="header-user-con">
                <div class="user-avator"><img src="../../assets/icons/16x16.png" /></div>
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{ username }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>修改密码</el-dropdown-item>
                        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
-->
    </div>
  </div>
</template>

<script>
export default {
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      default: 'main_header'
    }
    // ...
  },
  // 创建实例时传递 props。主要作用是方便测试。
  // propsData: {},
  // 存放 数据
  data () {
    return {
      menuType: 'router',
      items: [ // 水平一级菜单栏的菜单
        { index: 'drag', title: '首页' },
        { index: 'test1', title: '一级菜单1' }
        // { index: 'test2', title: '一级菜单2' },
        // { index: 'test3', title: '一级菜单3' },
        // { index: 'permission', title: '管理员权限' }
      ]
    };
  },
  // 计算 属性
  computed: {
    username () {
      return 'admin'
    }
  },
  // 存放 方法
  methods: {
    // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
    toIndex () {
      return this.$route.path.split('/')[1];
    },
    // 切换菜单栏
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push('/' + keyPath);
    },
    // 用户名下拉菜单选择事件
    handleCommand (command) {

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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: 100%;
  background: rgb(101, 197, 230);
}
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
}
.header .logo {
    float: left;
    margin-left: 60px;
    margin-top: 17.5px;
    height: 29px;
    width: 160px;
    vertical-align: middle;
}
/* --------------- 用户头像区域的样式 ---------------- */
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.user-name {
    margin-left: 10px;
}
.el-dropdown-link {
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
/* --------------- 水平一级菜单栏的样式--------------------- */
.el-menu.el-menu--horizontal {
    border-bottom: none !important;
    float: left;
    margin-left: 50px;
}
.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #409eff;
    color: #3989fa;
    font-weight: 700;
}
.el-menu--horizontal > .el-menu-item {
    font-size: 16px;
    margin: 0 15px;
    color: black;
}
</style>
