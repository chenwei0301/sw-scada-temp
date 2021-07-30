<!--
 * @Author: your name
 * @Date: 2021-07-06 16:38:38
 * @LastEditTime: 2021-07-28 17:41:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-input.vue
-->
<template>
  <vue-draggable-resizable
    class-name='vdr-comp'
    :active.sync=item.active
    :grid=[10,10]
    :x='item.style.x'
    :y='item.style.y'
    :w=item.style.w
    :h=item.style.h
    :min-width=10
    :min-height=22
    :style=vdrCssArr

    @resizestop=onResizeStop
    @dragstop=onDragStop
    >

    <el-input class='comp'
      v-model=item.property.value
      :type=type
      :size=size
      :placeholder=placeholder
      :disabled=disabled
      :clearable=clearable
      :show-password=showPassword
      :show-word-limit=showWordLimit
      :resize=resize
      :autofocus=autofocus
      :prefix-icon=prefixIcon
      :suffix-icon=suffixIcon
      :style=cssArr
      >

      </el-input>

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
import PropertyApi from '@/api/draggable/property'

export default {
  // name: 'elInput',
  props: {
    item: Object
  },
  data () {
    return {
      /* el-input Attributes
      参数              说明                       类型             可选值               默认值
      type      类型                              string           text/textarea       text
      value     绑定值                            string/number     --                  --
      size  输入框尺寸,只在type!="textarea"时有效   string            medium/small/min    --
      placeholder  输入框占位文本                  string             --                  --
      clearable     是否可清空                     boolean            --                 false
      show-password 是否显示切换密码图              boolean            --                 false
      disable           禁用                       boolean            --                 false
      */
      // type: 'text',
      // value: '',
      // size: '', //  medium large、small 和 mini
      // placeholder: '请输入内容...',
      // disabled: false,
      // clearable: true,
      // showPassword: false,
      // showWordLimit: false,
      // minlength: 1,
      // maxlength: 20,
      // resize: 'both', // none, both, horizontal, vertical
      // boolean 自动获取焦点
      // autofocus: true
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

    // el-input组件 属性
    type: function () {
      return this.item.property.type
    },
    rows: function () {
      return this.item.property.rows
    },
    // autosize: function () {
    //   return this.item.property.autosize
    // },
    value: function () {
      return this.item.property.value
    },
    size: function () {
      return this.item.property.size
    },
    placeholder: function () {
      return this.item.property.placeholder
    },
    disabled: function () {
      return PropertyApi.booleanCheck(this.item.property.disabled)
    },
    clearable: function () {
      return PropertyApi.booleanCheck(this.item.property.clearable)
    },
    showPassword: function () {
      return PropertyApi.booleanCheck(this.item.property.showPassword)
    },
    showWordLimit: function () {
      return PropertyApi.booleanCheck(this.item.property.showWordLimit)
    },
    minlength: function () {
      return this.item.property.minlength
    },
    maxlength: function () {
      return this.item.property.maxlength
    },
    resize: function () {
      return this.item.property.resize
    },
    autofocus: function () {
      return PropertyApi.booleanCheck(this.item.property.autofocus)
    },
    prefixIcon: function () {
      return this.item.property.prefixIcon
    },
    suffixIcon: function () {
      return this.item.property.suffixIcon
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
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style lang="scss">
.vdr-comp{
  .comp{
    height: 100%;
    .el-input__inner{
      min-height: 20px !important;
      height: 100% !important;
    }
  }
}
</style>
