<!--
 * @Author: your name
 * @Date: 2021-02-09 16:26:29
 * @LastEditTime: 2021-05-19 14:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\BASMode\BASModevue.vue
-->

<template>
  <div class="main">
    <div class="main-title">
      <span>{{staName +" "+ title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  vueName: 'BasMode',
  data () {
    return {
      staName: '',
      title: '模式表'
    };
  },
  methods: {
    // 获取路由参数并设置属性
    initRouterparams () {
      const query = this.$route.query
      if (query.staName !== undefined) {
        this.staName = query.staName
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
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {
  }
};
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  span{
    display: block;
    color: azure;
    text-align: center;
    font-size: 20px;
  }
}
</style>
