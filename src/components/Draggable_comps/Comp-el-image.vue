<!--
 * @Author: your name
 * @Date: 2021-07-06 16:51:45
 * @LastEditTime: 2021-07-09 08:53:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-image.vue
-->

<template>
  <vue-draggable-resizable
    class-name='my-class'
    class-name-dragging="my-dragging-class"
    class-name-resizing="my-resizing-class"
    class-name-active="my-active-class"
    class-name-handle="my-handle-class"

    :active.sync=item.active

    :x='item.style.x - (item.style.w/2)'
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
    @resizing=onResize
    @resizestop=onResizeStop
    @dragging=onDrag
    @dragstop=onDragStop

    @activated=onActivated
    @deactivated=onDeactivated
    :scale="0.5"
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
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
// import '@/styles/VueDraggableResizable.css'
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
      const para = {
        x: x,
        y: y,
        w: width,
        h: height
      }
      this.$emit('compOnResize', this.item, para)
    },
    onResizeStop: function (x, y, width, height) {
      console.log('onResizeStop:', x, y, width, height)
    },
    onDrag: function (x, y) {
      const para = {
        x: x,
        y: y
      }
      this.$emit('compOnDrag', this.item, para)
    },
    onDragStop: function (x, y) {
      console.log('onDragStop:', x, y)
    },
    onActivated: function () {
      console.log('active:', true)
    },
    onDeactivated: function () {
      console.log('active:', false)
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
// 拖动时具有自定义类名的组件
.my-dragging-class {
  border: 1px solid black;
}
// 调整大小时具有自定义类名的组件
.my-resizing-class {
    // background-color: blue;
    // border: 1px solid black;
    // color: white;
}
// 活动状态下具有自定义类名的组件
.my-active-class {
  border: 1px dashed #000
}
// 具有自定义类名称句柄的组件
.my-handle-class {
    position: absolute;
    // background-color: pink;
    background: #eee;
    border: 1px solid black;
    // border-radius: 50%;
    height: 5px;
    width: 5px;
    //box-model: border-box;
    box-sizing: border-box;
    -webkit-transition: all 300ms linear;
    -ms-transition: all 300ms linear;
    transition: all 300ms linear;
}
.my-handle-class-tl {
  top: -5px;
  left: -5px;
  cursor: nw-resize;
}
.my-handle-class-tm {
  top: -5px;
  left: 50%;
  margin-left: -2.5px;
  cursor: n-resize;
}
.my-handle-class-tr {
  top: -5px;
  right: -5px;
  cursor: ne-resize;
}
.my-handle-class-ml {
  top: 50%;
  margin-top: -2.5px;
  left: -5px;
  cursor: w-resize;
}
.my-handle-class-mr {
  top: 50%;
  margin-top: -2.5px;
  right: -5px;
  cursor: e-resize;
}
.my-handle-class-bl {
  bottom: -5px;
  left: -5px;
  cursor: sw-resize;
}
.my-handle-class-bm {
  bottom: -5px;
  left: 50%;
  margin-left: -2.5px;
  cursor: s-resize;
}
.my-handle-class-br {
  bottom: -5px;
  right: -5px;
  cursor: se-resize;
}
.my-handle-class-tl:hover,
.my-handle-class-tr:hover,
.my-handle-class-bl:hover,
.my-handle-class-br:hover {
    background-color: red;
    transform: scale(1.4);
}
</style>
