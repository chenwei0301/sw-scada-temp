<!--
 * @Author: your name
 * @Date: 2021-07-06 16:10:52
 * @LastEditTime: 2021-07-06 16:15:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\Comp-span.vue
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

    <span class='comp'>{{item.name}}</span>

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
  text-align: left;
  .comp{
    padding: 0px;
    margin: 0px;
  }
}
</style>
