<!--
 * @Author: your name
 * @Date: 2021-06-17 11:09:50
 * @LastEditTime: 2021-06-17 11:10:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\public\WebConfigure\view\SW404_ZHCZ.vue
-->

<template>
  <div class="main">
    <div class="main-title">
      <span>{{"public" + staName +" "+ title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  nameame: 'SW404_ZHCZ',
  data () {
    return {
      staName: '',
      title: 'SW404_ZHCZ'
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
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
};
</script>

<style lang="scss" scope>
.main{
  width: 100%;
  height: 100%;
  .main-title {
    padding: 10px 0;
    span{
    display: block;
    color: azure;
    text-align: center;
    font-size: 20px;
    }
  }
}
</style>
