/*
 * @Author: your name
 * @Date: 2021-04-14 16:10:54
 * @LastEditTime: 2021-05-26 14:27:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuc-demo\src\template.js
 */
export const templateContent = `
<template>
  <div style="height: 100%">
    <vue-draggable-resizable :active.sync="active" class="vdr1">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:false,
      formData:{}
    };
  },
  computed: {
  },
  methods: {
  }
}
</script>`
