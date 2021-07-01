<!--
 * @Author: your name
 * @Date: 2021-06-28 15:49:49
 * @LastEditTime: 2021-07-01 13:55:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Toolbox_bak.vue
-->
<template>
<div class="Draggable_Fields_Toolbox" >
  <el-collapse  v-model="activeNames" @change="handleChange">

  <!-- <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item> -->

  <el-collapse-item v-for="group in groups"
    :key="group.name"
    :name="group.name"
    :title="group.name"
    >
  <div class="subBox">
    <div class="subs" v-for="(item, index) in group.children" :key="`${group.name}_${item.name}_${item.label}_${index}`" draggable="true" @dragstart="dragStart($event,item)">
      <div class="subIco" :style='{"background-image":"url("+item.icon+")"}'>
                            </div>
      <span class="">{{item.name}}</span>
    </div>
  </div>

  </el-collapse-item>

</el-collapse>
</div>
</template>

<script>
// import vuedraggable from 'vuedraggable'

import Groups from '@/internal/components.js'

export default {
  name: 'Draggable_Fields_Toolbox',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      default: 'Draggable_Fields_Toolbox'
    }
    // ...
  },
  // 创建实例时传递 props。主要作用是方便测试。
  // propsData: {},
  // 存放 数据
  data () {
    return {
      title: 'Draggable_Fields_Toolbox',
      activeNames: ['1']
    };
  },
  // 计算 属性
  computed: {
    groups: () => {
      var arr = []
      const json = {
        name: 'Html',
        children: Groups
      }
      arr.push(json)
      return arr
    }
  },
  // 存放 方法
  methods: {
    handleChange (val) {
      console.log(val);
    },
    dragStart (e, item) {
      console.log(e, item)
      const data = JSON.stringify(item)
      event.dataTransfer.setData('comData', data)
    }
  },
  // 监听 属性
  watch: {},
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {
    // vuedraggable
  },
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    console.log('groups:', this.groups)
  },
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
.Draggable_Fields_Toolbox{
  width: 100%;
  height: 100%;
  // height: 300px;
  background: rgb(50, 194, 105);
  padding: 1px;
  overflow: auto;
    .subBox{
        display: flex;
        flex-flow: row wrap;
        // justify-content: space-between;
    }
    .subs{
      width: 60px;
      height: 60px;
      font-size: 14px;
      border: 1px solid #ccc;
      margin-top: 1px;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin:  0px 5px 5px;
      .subIco{
        width: 32px;
        height: 32px;
        margin-top: 5px;
        background: no-repeat center;
        background-size:contain;
    }
    }
}
</style>
