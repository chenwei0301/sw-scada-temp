<!--
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-02-26 10:53:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\App.vue
-->
<template>
  <div id="app" ondragstart="return false">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#app{
  -webkit-user-select: none;
  border-radius: 5px;
  height: 100%;
}
</style>
