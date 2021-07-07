<!--
 * @Author: your name
 * @Date: 2021-07-06 16:32:59
 * @LastEditTime: 2021-07-07 17:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-button.vue
-->
<template>
  <vue-draggable-resizable
    class='vdr-comp'
    :active.sync='item.active'
    :grid='[10,10]'
    :x='item.style.x - item.style.w/2'
    :y='item.style.y - item.style.h/2'
    :w='item.style.w'
    :h='item.style.h'
    :min-width='5'
    :min-height='5'
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
    active: function () {
      return this.item.active
    },
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
      this.$emit('compActive', newVal, this.item)
    }
  },
  methods: {
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
