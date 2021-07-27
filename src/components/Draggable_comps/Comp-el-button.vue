<!--
 * @Author: your name
 * @Date: 2021-07-06 16:32:59
 * @LastEditTime: 2021-07-27 15:02:34
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
      :hidden=visible
      :style=cssArr
      >{{item.title}}</el-button>

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
import PropertyApi from '@/api/draggable/property'

export default {
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
      return this.item.active
    },
    preventDeactivation: function () {
      return PropertyApi.booleanCheck(this.item.vdrProperty.preventDeactivation)
    },
    draggable: function () {
      return PropertyApi.booleanCheck(this.item.vdrProperty.draggable)
    },
    resizable: function () {
      return PropertyApi.booleanCheck(this.item.vdrProperty.resizable)
    },
    enableNativeDrag: function () {
      return PropertyApi.booleanCheck(this.item.vdrProperty.enableNativeDrag)
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
      return PropertyApi.booleanCheck(this.item.property.loading)
    },
    disabled: function () {
      return PropertyApi.booleanCheck(this.item.property.disabled)
    },
    autofocus: function () {
      return PropertyApi.booleanCheck(this.item.property.autofocus)
    },
    icon: function () {
      return this.item.property.icon
    },
    plain: function () {
      return this.item.property.styleType === 'plain'
    },
    round: function () {
      return this.item.property.styleType === 'round'
    },
    circle: function () {
      return this.item.property.styleType === 'circle'
    },
    visible: function () {
      return PropertyApi.booleanCheck(this.item.property.visible)
    },
    vdrCssArr: function () {
      const arr = {}
      if (this.item.style.zIndex !== '') {
        arr['z-index'] = this.item.style.zIndex
      }
      return arr
    },
    cssArr: function () {
      const arr = {}
      if (this.item.style.color !== '') {
        arr.color = this.item.style.color
      }
      if (this.item.style.background !== '') {
        arr.background = this.item.style.background
      }
      if (this.item.style.fontSize !== '') {
        arr['font-size'] = this.item.style.fontSize + 'px'
      }
      if (this.item.style.fontFamily !== '') {
        arr['font-family'] = this.item.style.fontFamily
      }
      if (this.item.style.fontStyle !== '') {
        arr['font-style'] = this.item.style.fontStyle
      }
      if (this.item.style.customCss !== '') {
        const cssObj = JSON.parse(this.item.style.customCss)
        // console.log(cssObj)
        for (var index in cssObj) {
          arr[index] = cssObj[index]
        }
      }
      if (this.item.property.src !== '') {
        arr.background = 'url(' + this.item.property.src + ')'
      }
      // {"font-family":"Arial","border":"1px dashed #4444ff"}
      return arr
    }

  },
  watch: {
    active: function (newVal, oldVal) {
      this.$emit('compActive', this.item, newVal)
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
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style scoped lang="scss">
.vdr-comp{
  position: absolute;
  .comp{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
}
</style>
