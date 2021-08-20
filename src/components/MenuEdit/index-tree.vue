<!--
 * @Author: your name
 * @Date: 2021-08-16 14:22:24
 * @LastEditTime: 2021-08-16 14:22:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\MenuEdit\index-tree.vue
-->
<template>
  <div class="MenuEdit">
    <div class="MenuEdit-aside">
      <el-tree :data="treeData" :props="treeProps" @node-click="handleNodeClick"></el-tree>
    </div>

    <div class="MenuEdit-main">
    table main
    </div>
  </div>
</template>

<script>
import sRouter from '@/api/db/s_router'

export default {
  name: 'MenuEdit',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      type: String,
      default: ''
    }
    // ...
  },
  // 存放 数据
  data () {
    return {
      treeData: [],
      treeProps: {
        children: 'children',
        label: 'title'
      }
    };
  },
  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    async getRrouterMenuList () {
      this.treeData = await sRouter.getRouterMenuAsync()
      console.table(this.treeData)
    },
    handleNodeClick (data) {
      console.log(data);
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
  created () {
    this.getRrouterMenuList()
  },
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
.MenuEdit{
  width: 100%;
  height: 100%;
  background: lightblue;
  display: flex;
  .MenuEdit-aside{
    width: 200px;
    height: 100%;
    background-color:#ffffff;
  }
  .MenuEdit-main{
    flex: 1;
    height: 100%;
    //background-color: lightgreen;
  }
}
</style>
