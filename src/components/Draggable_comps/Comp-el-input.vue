<!--
 * @Author: your name
 * @Date: 2021-07-06 16:38:38
 * @LastEditTime: 2021-07-08 17:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-input.vue
-->
<template>
  <vue-draggable-resizable
    class-name='vdr-comp'
    :active.sync=item.active
    :grid=[10,10]
    :x='item.style.x - item.style.w/2'
    :y='item.style.y - item.style.h/2'
    :w=item.style.w
    :h=item.style.h
    :min-width=5
    :min-height=22

    :prevent-deactivation=preventDeactivation
    :draggable=draggable
    :resizable=resizable
    :enable-native-drag=enableNativeDrag
    :z-index=zIndex
    @resizing=onResize
    @dragging=onDrag
    >

    <el-input class='comp'
      v-model=value
      :type=type
      :size=size
      :placeholder=placeholder
      :disabled=disabled
      :clearable=clearable
      :show-password=showPassword
      :maxlength=maxlength
      :minlength=minlength
      :show-word-limit=showWordLimit
      :resize=resize
      :autofocus=autofocus
      ></el-input>

  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
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
      return this.item.property.disabled
    },
    clearable: function () {
      return this.item.property.clearable
    },
    showPassword: function () {
      return this.item.property.showPassword
    },
    showWordLimit: function () {
      return this.item.property.showWordLimit
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
      return this.item.property.autofocus
    }
  },
  watch: {
    active: function (newVal, oldVal) {
      this.$emit('compActive', this.item, newVal)
    }
  },
  methods: {
    onResize: function (left, top, width, height) {
      const para = {
        x: left,
        y: top,
        w: width,
        h: height
      }
      this.$emit('compOnResize', this.item, para)
    },
    onDrag: function (left, top) {
      const para = {
        x: left,
        y: top
      }
      this.$emit('compOnDrag', this.item, para)
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
