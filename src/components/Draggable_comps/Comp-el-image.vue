<!--
 * @Author: your name
 * @Date: 2021-07-06 16:51:45
 * @LastEditTime: 2021-08-02 16:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-image.vue
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

    <el-image class='comp'
      :src=src
      :alt=alt
      :fit=fit
      :hidden=visible
      @load=srcLoadSuccess
      @error=srcLoadError
      @contextmenu.prevent=rightClick
      :style=cssArr
      >
      <div slot="placeholder" class="image-slot" v-if='placeholder'>
        加载中<span class="dot">...</span>
      </div>
      <div slot="error" class="image-slot" v-if='error'>
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import '@/styles/VueDraggableResizable.css'
import PropertyApi from '@/api/draggable/property'

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
    // zIndex: function () {
    //   return this.item.vdrProperty.zIndex
    // },
    axis: function () {
      return this.item.vdrProperty.axis
    },

    // el-image组件 属性
    src: function () {
      return this.item.property.src
      // return require('@/' + this.item.property.src)
    },
    alt: function () {
      return this.item.property.alt
    },
    fit: function () {
      return this.item.property.fit
    },
    placeholder: function () {
      return PropertyApi.booleanCheck(this.item.property.placeholder)
    },
    error: function () {
      return PropertyApi.booleanCheck(this.item.property.error)
    },
    visible: function () {
      return !PropertyApi.booleanCheck(this.item.property.visible)
    },
    vdrCssArr: function () {
      const arr = {}
      if (this.item.style.zIndex !== '') {
        arr['z-index'] = this.item.style.zIndex
      }
      console.log('vdrCssArr:', arr)
      return arr
    },
    cssArr: function () {
      const arr = {}
      if (this.item.style.customCss !== '') {
        const cssObj = JSON.parse(this.item.style.customCss)
        // console.log(cssObj)
        for (var index in cssObj) {
          arr[index] = cssObj[index]
        }
      }
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
    onResize: function (x, y, width, height) {
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
    // 图片加载成功触发
    srcLoadSuccess: function (e) {
      // console.log('srcLoadSuccess', e)
    },
    // 图片加载失败触发
    srcLoadError: function (err) {
      console.log('srcLoadError', err)
    },
    rightClick: function () {
      console.log('rightClick')
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style lang="scss">
// 具有自定义类名的组件
.vdr-comp{
  .comp{
    width: 100%;
    height: 100%;
  }
}
</style>
