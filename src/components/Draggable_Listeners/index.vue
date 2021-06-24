<!--
 * @Author: your name
 * @Date: 2021-06-24 14:55:36
 * @LastEditTime: 2021-06-24 14:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Listeners\index.vue
-->
<template>
  <div class="Draggable_Listeners">
    <p>{{title+' '+msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Draggable_Listeners',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      default: 'Draggable_Listeners'
    }
    // ...
  },
  // 创建实例时传递 props。主要作用是方便测试。
  // propsData: {},
  // 存放 数据
  data () {
    return {
      title: 'Draggable_Listeners'
    };
  },
  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {},
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
.Draggable_Listeners{
  width: 100%;
  height: 100%;
  background: lightblue;
}
</style>
