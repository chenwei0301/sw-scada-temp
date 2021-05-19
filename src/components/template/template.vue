<!--
 * @Author: your name
 * @Date: 2021-02-09 16:26:29
 * @LastEditTime: 2021-02-19 14:55:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\template\template.vue
-->

<template>
  <div class="main">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    };
  },
  methods: {
    // 获取路由参数并设置属性
    initRouterparams () {
      const params = this.$route.query
      console.log(params)
      if (params.title !== undefined) {
        this.title = params.title
      }
    }
  },
  beforeCreate () {},
  created () {
    this.initRouterparams()
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
};
</script>

<style lang="scss" scope>
.main{
  width: 100%;
  height: 100%;
}
</style>
