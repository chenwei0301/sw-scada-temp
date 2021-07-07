<!--
 * @Author: your name
 * @Date: 2021-07-02 14:50:12
 * @LastEditTime: 2021-07-07 17:06:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\DragComp.vue
-->
<template>
  <div>
    <!-- Base -->
    <comp-img v-if="item.htmlType==='img'" :item='item'></comp-img>

    <comp-button v-if="item.htmlType==='button'" :item='item'></comp-button>

    <comp-span v-if="item.htmlType==='span'" :item='item'></comp-span>

    <comp-input v-if="item.htmlType==='input'" :item='item'></comp-input>

    <comp-textarea v-if="item.htmlType==='textarea'" :item='item'></comp-textarea>

    <!-- Element -->
    <comp-el-button
      v-if="item.htmlType==='el-button'"
      :item='item'
      @compActive=compActive
      ></comp-el-button>

    <comp-el-input
      v-if="item.htmlType==='el-input'"
      :item='item'
      @compActive=compActive
      ></comp-el-input>

    <comp-el-image v-if="item.htmlType==='el-image'" :item='item'></comp-el-image>

  </div>

</template>

<script>
// import VueDraggableResizable from 'vue-draggable-resizable'
// import '@/styles/VueDraggableResizable.css'
import CompImg from '@/components/Draggable_comps/Comp-img'
import CompButton from '@/components/Draggable_comps/Comp-button'
import CompSpan from '@/components/Draggable_comps/Comp-span'
import CompInput from '@/components/Draggable_comps/Comp-input'
import CompTextarea from '@/components/Draggable_comps/Comp-textarea'

import CompElButton from '@/components/Draggable_comps/Comp-el-button'
import CompElInput from '@/components/Draggable_comps/Comp-el-input'
import CompElImage from '@/components/Draggable_comps/Comp-el-image'

export default {
  name: 'DragComp',
  props: {
    item: Object
  },
  data () {
    return {
    }
  },
  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    compActive: function (active, activeItem) {
      // console.log('get1:', activeItem)
      this.$emit('compActive', active, activeItem)
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
    CompImg,
    CompButton,
    CompSpan,
    CompInput,
    CompTextarea,

    CompElButton,
    CompElInput,
    CompElImage
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

<style scoped lang="scss">
.vdr{
  //background-color: lightcoral;
  .comp-button {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
  .comp-img {
    width: 100%;
    height: 100%;
  }
  .comp-textarea {
    width: 100%;
    height: 100%;
  }
  .comp-input {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
}
</style>
