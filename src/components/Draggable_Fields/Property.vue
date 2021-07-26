<!--
 * @Author: your name
 * @Date: 2021-06-24 17:03:46
 * @LastEditTime: 2021-07-16 16:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Property.vue
-->
<template>
  <div class="Draggable_Fields_Property">
   <el-tabs
    v-model="activeName"
    type="border-card"
    @tab-click="handleClick"
    >

    <el-tab-pane label="标准属性" name="standard">
      <PropertyStandard
      :property=property
      @standardConfigChange=standardConfigChange
      ></PropertyStandard>
    </el-tab-pane>

    <el-tab-pane label="数据属性" name="data">
      <PropertyData :property=designConfig></PropertyData>
    </el-tab-pane>

    <el-tab-pane label="界面属性" name="design">
      <PropertyDesign
        :property=designConfig
        @designConfigChange=designConfigChange
        ></PropertyDesign>
    </el-tab-pane>

  </el-tabs>

  </div>
</template>

<script>

import PropertyStandard from '@/components/Draggable_Fields/Property_Standard'
import PropertyDesign from '@/components/Draggable_Fields/Property_Design'
import PropertyData from '@/components/Draggable_Fields/Property_Data'

export default {
  name: 'Draggable_Fields_Property',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    designConfig: Object,
    property: Object
    // ...
  },
  // 存放 数据
  data () {
    return {
      title: 'Draggable_Fields_Property',
      activeName: 'standard'
    };
  },
  // 计算 属性
  computed: {
  },
  // 存放 方法
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
    },
    standardConfigChange: function (v) {
      this.$emit('standardConfigChange', v)
    },
    designConfigChange (v) {
      this.$emit('designConfigChange', v)
    }
  },
  // 监听 属性
  watch: {
    // property: function (newVal, oldVal) {
    //   console.info('watch-prop:', newVal)
    // }
  },
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {
    PropertyStandard,
    PropertyDesign,
    PropertyData
  },
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
<style lang="scss">
.Draggable_Fields_Property{
  width: 100%;
  height: 100%;
  //font-size: 12px;
  // background: rgb(204, 224, 128);
  .el-tabs--border-card>.el-tabs__content {
    padding: 2px;
  }
}
</style>
