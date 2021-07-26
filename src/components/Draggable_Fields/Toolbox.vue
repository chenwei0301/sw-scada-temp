<!--
 * @Author: your name
 * @Date: 2021-06-28 15:49:49
 * @LastEditTime: 2021-07-26 09:57:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Toolbox_bak.vue
-->
<template>
  <div class="Draggable_Fields_Toolbox" >
    <el-collapse  v-model="activeTools" @change="handleChange">

      <el-collapse-item v-for="group in groups"
        :key="group.name"
        :name="group.name"
        :title="group.name"
        >
        <div class="subBox">
          <div class="subs"
            v-for="(item, index) in group.children"
            :key="`${group.name}_${item.htmlType}_${item.label}_${index}`"
            @dragstart="dragStart($event,item)"
            @click='clickSelect(group.name,item)'
            draggable="true"
            >
            <div class="subIco"
              :style='{"background-image":"url("+requirePic(item.icon)+")"}'
              ></div>
            <span class="">{{item.htmlType}}</span>
          </div>
        </div>

      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import Groups from '@/internal/components.js'

export default {
  name: 'Draggable_Fields_Toolbox',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
  },
  // 存放 数据
  data () {
    return {
      activeTools: []
    }
  },
  // 计算 属性
  computed: {
    groups: function () {
      return Groups
    }
  },
  // 监听 属性
  watch: {
  },
  // 存放 方法
  methods: {
    requirePic: function (src) {
      return require('@/' + src)
    },
    handleChange (val) {
      // console.log(val)
    },
    dragStart (e, item) {
      event.dataTransfer.setData('comData', JSON.stringify(item))
    },
    clickSelect (groupName, item) {
      // console.log(groupName, item)
    }
  },
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
  mounted () {
    // console.log('groups:', this.groups)
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
  background: rgb(50, 194, 105);
  padding: 1px;
  overflow: auto;
    .subBox{
      display: flex;
      flex-flow: row wrap;
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
      margin:  2px;
      .subIco{
        width: 32px;
        height: 32px;
        margin-top: 5px;
        background: no-repeat center;
        background-size:contain;
      }
    }
    .subActive{
      border: 1px solid #000;
      background-color: rgb(197, 162, 162);
    }
}
</style>
