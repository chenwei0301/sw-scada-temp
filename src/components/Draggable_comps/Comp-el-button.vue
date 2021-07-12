<!--
 * @Author: your name
 * @Date: 2021-07-06 16:32:59
 * @LastEditTime: 2021-07-12 09:28:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-button.vue
-->
<template>
  <vue-draggable-resizable
    class-name='vdr-comp'
    :key="item.name"
    :active.sync=item.active
    :grid=[1,1]
    :x='item.style.x - item.style.w/2'
    :y='item.style.y - item.style.h/2'
    :w=item.style.w
    :h=item.style.h
    :min-width=5
    :min-height=5

    :prevent-deactivation=preventDeactivation
    :draggable=draggable
    :resizable=resizable
    :enable-native-drag=enableNativeDrag
    :z-index=zIndex
    :axis=axis
    :parent='false'
    :onResizeStart=onResizeStartCallback
    :onResize=onResizeCallback

    :isConflictCheck="false"
    :snap="false"
    :snap-tolerance="10"

    @resizing=onResize
    @resizestop=onResizeStop
    @dragging=onDrag
    @dragstop=onDragStop

    >

    <el-button class='comp'
      :type=type
      :size=size
      :loading=loading
      :disabled=disabled
      :autofocus=autofocus
      :icon=icon
      :plain=plain
      :round=round
      :circle=circle
      >{{item.name}}</el-button>

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
export default {
  // name: 'elButton',
  props: {
    item: Object
  },
  data () {
    return {
    }
  },
  computed: {
    // 拖拽组件 vdr 属性
    active: function () {
      return this.item.active
    },
    preventDeactivation: function () {
      return this.item.vdrProperty.preventDeactivation
    },
    draggable: function () {
      return this.item.vdrProperty.draggable
    },
    resizable: function () {
      return this.item.vdrProperty.resizable
    },
    enableNativeDrag: function () {
      return this.item.vdrProperty.enableNativeDrag
    },
    zIndex: function () {
      return this.item.vdrProperty.zIndex
    },
    axis: function () {
      return this.item.vdrProperty.axis
    },

    // el-button组件 属性
    type: function () {
      return this.item.property.type
    },
    size: function () {
      return this.item.property.size
    },
    loading: function () {
      return this.item.property.loading
    },
    disabled: function () {
      return this.item.property.disabled
    },
    autofocus: function () {
      return this.item.property.autofocus
    },
    icon: function () {
      return this.item.property.icon
    },
    plain: function () {
      return this.item.property.plain
    },
    round: function () {
      return this.item.property.round
    },
    circle: function () {
      return this.item.property.circle
    }
  },
  watch: {
    active: function (newVal, oldVal) {
      this.$emit('compActive', this.item, newVal)
    }
  },
  methods: {
    onResizeStartCallback: function (handle, ev) {
      // console.log('onResizeStartCallback:', handle, ev)
      return true
    },
    onResizeCallback: function (handle, x, y, width, height) {
      // console.log('onResizeCallback:', handle, x, y, width, height)
      return true
    },
    onResize: function (left, top, width, height) {
      // const para = {
      //   x: left,
      //   y: top,
      //   w: width,
      //   h: height
      // }
      // this.$emit('compOnResize', this.item, para)
    },
    onResizeStop: function (x, y, width, height) {
      // console.log('onResizeStop:', x, y, width, height)
      const para = {
        x: x,
        y: y,
        w: width,
        h: height
      }
      this.$emit('onResizeStop', this.item, para)
    },
    onDrag: function (x, y) {
      // const para = {
      //   x: x,
      //   y: y
      // }
      // this.$emit('compOnDrag', this.item, para)
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
      console.log('active:', true)
    },
    onDeactivated: function () {
      console.log('active:', false)
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
  }
}
</style>
