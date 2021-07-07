<!--
 * @Author: your name
 * @Date: 2021-07-06 16:51:45
 * @LastEditTime: 2021-07-07 09:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-el-image.vue
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

    <el-image class='comp'
      :src='item.icon'
      :alt='item.name'
      fit='fill'
      ></el-image>
<!--
  ['fill', 'contain', 'cover', 'none', 'scale-down']
-->
  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
export default {
  // name: 'elImage',
  props: {
    item: Object
  },
  data () {
    return {}
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
  }
}
</style>
