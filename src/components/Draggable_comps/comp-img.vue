<!--
 * @Author: your name
 * @Date: 2021-07-02 14:45:51
 * @LastEditTime: 2021-07-02 14:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_comps\comp-img.vue
-->
<template>
  <img class="comp-element comp-img icon"
        v-bind:src="item.icon"
        v-bind:style="{
            width:item.style.width +'px',
            height:item.style.height +'px',
            borderRadius:item.style.borderRadius +'%'
        }"
        v-bind:title="item.name"
        v-bind:alt="item.name"
        v-bind:class="{
        active:item.isActive,
        opacity:item.style.opacity,
        isShadow:item.style.isApplyShadow ==='true',
        multipleActive:item.multipleActiveBool}">
</template>
<script>
export default {
  props: {
    item: Object
  }
}
</script>
<style scoped lang="scss">

</style>
