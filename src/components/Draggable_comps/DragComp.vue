<!--
 * @Author: your name
 * @Date: 2021-07-02 14:50:12
 * @LastEditTime: 2021-07-05 11:07:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\DragComp.vue
-->
<template>
  <vue-draggable-resizable
    class='vdr'
    :active.sync='item.active'
    :grid='[10,10]'
    :x='item.style.x - item.style.w/2'
    :y='item.style.y - item.style.h/2'
    :w='item.style.w'
    :h='item.style.h'
    :min-width='20'
    :min-height='20'

    >

    <button class='comp-button' v-if="item.htmlType==='button'">{{item.htmlType}}
    </button>

    <span class='comp-span' v-if="item.htmlType==='span'">{{item.htmlType}}
    </span>

    <img class='comp-img' :src="require('@/assets/icons/24x24.png')" v-if="item.htmlType==='img'">

    <textarea :style="{width:'100%',height:num+'%'}" v-if="item.htmlType==='textarea'">
    </textarea>

    <input class='comp-input' v-if="item.htmlType==='input'">

  </vue-draggable-resizable>

</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
export default {
  name: 'DragComp',
  props: {
    item: Object
  },
  data () {
    return {
      active: true,
      num: 100
    }
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
  components: {
    VueDraggableResizable
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
  background-color: lightcoral;
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
