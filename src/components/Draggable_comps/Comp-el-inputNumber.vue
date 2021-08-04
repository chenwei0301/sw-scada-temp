<!--
 * @Author: your name
 * @Date: 2021-07-14 17:09:16
 * @LastEditTime: 2021-08-02 17:57:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-inputNumber.vue
-->
<template>
  <vue-draggable-resizable
    class-name='vdr-comp'
    :key="item.name"
    :active.sync=item.active
    :grid=[1,1]
    :x='item.style.x'
    :y='item.style.y'
    :w=item.style.w
    :h=item.style.h
    :min-width=5
    :min-height=5

    @resizestop=onResizeStop
    @dragstop=onDragStop
    >

    <el-input-number
      class='comp'
      v-model="item.property.value"
      :size='size'
      :disabled='disabled'
      :min='min'
      :max='max'
      :step='step'
      :step-strictly='stepStrictly'
      :precision='precision'
      :controls='controls'
      :controls-position='controlsPosition'
      :label='label'
      :placeholder='placeholder'
      @change=change
      ></el-input-number>

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
export default {
  // name: 'elButton',
  props: {
    item: Object,
    id: String
  },
  data () {
    return {
    }
  },
  computed: {
    // 拖拽组件 vdr 属性
    active: function () {
      console.log('computed-active:', this.item.active)
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
    size: function () {
      return this.item.property.size
    },
    disabled: function () {
      return this.item.property.disabled
    },
    min: function () {
      return this.item.property.min
    },
    max: function () {
      return this.item.property.max
    },
    step: function () {
      return this.item.property.step
    },
    stepStrictly: function () {
      return this.item.property.stepStrictly
    },
    precision: function () {
      return this.item.property.precision
    },
    controls: function () {
      return this.item.property.controls
    },
    controlsPosition: function () {
      return this.item.property.controlsPosition
    },
    label: function () {
      return this.item.property.label
    },
    placeholder: function () {
      return this.item.property.placeholder
    }
  },
  watch: {
    active: function (newVal, oldVal) {
      console.log('watch:', newVal)
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
    change: function (currentValue, oldValue) {
      console.log(currentValue, oldValue);
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style lang="scss">
.vdr-comp{
  position: absolute;
  .comp{
    width: 100%;
    height: 100%;
    .el-input {
      height: 100%;
      input {
        height: 100%;
      }
    }
    // padding: 0px;
    // margin: 0px;
    // .el-input--small .el-input__inner {
    //   height: 32px !important;
    // }
    // .el-input__inner {
    //   height: 100% !important;
    // }
  }
}
</style>
