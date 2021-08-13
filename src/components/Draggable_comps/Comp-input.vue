<!--
 * @Author: your name
 * @Date: 2021-07-06 16:24:31
 * @LastEditTime: 2021-08-10 14:05:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-input.vue
-->
<template>
  <vue-draggable-resizable
    class='vdr-comp'
    :key="item.name"
    :active.sync=item.active
    :grid=[1,1]
    :x='item.style.x'
    :y='item.style.y'
    :w=item.style.w
    :h=item.style.h
    :min-width=5
    :min-height=5
    :style=vdrCssArr

    @resizestop=onResizeStop
    @dragstop=onDragStop
    >

    <input class='comp' type="text"
      :name=item.name
      :style=cssArr
      >

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
export default {
  name: 'el-image',
  props: {
    item: Object
  },
  data () {
    return {}
  },
  watch: {
    active: function (newVal, oldVal) {
      this.$emit('compActive', this.item, newVal)
    }
  },
  computed: {
    // 拖拽组件 vdr 属性
    active: function () {
      return this.item.active
    },
    vdrCssArr: function () {
      const arr = {}
      if (this.item.style.zIndex !== '') {
        arr['z-index'] = this.item.style.zIndex
      }
      return arr
    }
  },
  methods: {
    onResizeStartCallback: function (handle, ev) {
      return true
    },
    onResizeCallback: function (handle, x, y, width, height) {
      return true
    },
    onResize: function (left, top, width, height) {
    },
    onResizeStop: function (x, y, width, height) {
      const para = {
        x: x,
        y: y,
        w: width,
        h: height
      }
      this.$emit('onResizeStop', this.item, para)
    },
    onDrag: function (x, y) {
    },
    onDragStop: function (x, y) {
      // console.log('onDragStop:', x, y)
      const para = {
        x: x,
        y: y
      }
      this.$emit('onDragStop', this.item, para)
    },
    onActivated: function () {
      this.$emit('compActive', this.item, true)
    },
    onDeactivated: function () {
      this.$emit('compActive', this.item, false)
    },
    mouseup: function () {
      console.log('mouseup')
    },
    mouseover: function () {
      console.log('mouseover')
    },
    mouseout: function () {
      console.log('mouseout')
    },
    mousemove: function () {
      console.log('mousemove')
    },
    mousedown: function () {
      console.log('mousedown')
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style scoped lang="scss">
.vdr-comp{
  .comp{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    border: 1px solid #000;
  }
}
</style>
