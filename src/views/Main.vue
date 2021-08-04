<!--
 * @Author: your name
 * @Date: 2021-06-22 14:21:48
 * @LastEditTime: 2021-08-04 14:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Main.vue
-->
<template>
  <MainPage class="main"></MainPage>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
    MainPage: () => import(/* webpackChunkName: "MainPage" */'@/components/Main/Index')
  }
}
</script>

<style lang="scss" scoped>
.main{
  height: 100%;
  background-color: #a7b0b754;
}
</style>
