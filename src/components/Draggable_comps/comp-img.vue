<!--
 * @Author: your name
 * @Date: 2021-07-02 14:45:51
 * @LastEditTime: 2021-07-06 15:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-img.vue
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

    <img class='comp'
      :src='item.icon'
      :alt='item.name'
      >
<!--
  ['fill', 'contain', 'cover', 'none', 'scale-down']
-->
  </vue-draggable-resizable>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/styles/VueDraggableResizable.css'
export default {
  name: 'el-image',
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
