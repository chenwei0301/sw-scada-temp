<!--
 * @Author: your name
 * @Date: 2021-07-06 16:51:45
 * @LastEditTime: 2021-07-12 15:57:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-image.vue
-->

<template>
  <vue-draggable-resizable
    class-name='my-class'
    :key="item.name"
    :active.sync=item.active
    :grid=[1,1]
    :x='item.style.x'
    :y='item.style.y'
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

    <el-image class='comp'
      :src=src
      :alt=alt
      :fit=fit
      @load=load
      @error=error
      >
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import '@/styles/VueDraggableResizable.css'
export default {
  // name: 'elImage',
  props: {
    item: Object,
    vdrProperty: Object
  },
  data () {
    return {}
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

    // el-image组件 属性
    src: function () {
      return this.item.property.src
    },
    alt: function () {
      return this.item.property.alt
    },
    fit: function () {
      return this.item.property.fit
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
    onResize: function (x, y, width, height) {
      // const para = {
      //   x: x,
      //   y: y,
      //   w: width,
      //   h: height
      // }
      // this.$emit('compOnResize', this.item, para)
    },
    onResizeStop: function (x, y, width, height) {
      console.log('onResizeStop:', x, y, width, height)
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
      console.log('onDragStop:', x, y)
      const para = {
        x: x,
        y: y
      }
      this.$emit('onDragStop', this.item, para)
    },
    onActivated: function () {
      console.log('active:', true)
      this.$emit('compActive', this.item, true)
    },
    onDeactivated: function () {
      console.log('active:', false)
      this.$emit('compActive', this.item, false)
    },
    // 图片加载成功触发
    load: function (e) {
      // console.log('load', e)
    },
    // 图片加载失败触发
    error: function (err) {
      throw err
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style lang="scss">
// 具有自定义类名的组件
.my-class{
  .comp{
    width: 100%;
    height: 100%;
  }
}
</style>
