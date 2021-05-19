<!--
 * @Author: your name
 * @Date: 2021-02-25 15:26:12
 * @LastEditTime: 2021-02-26 11:59:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\TransferManager\TransferManager.vue
-->
<template>
  <div class="main">
    <div class="main-title">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  vueName: 'TransferManager',
  data () {
    return {
      title: 'TransferManager'
    };
  },
  methods: {
    // 组件初始化执行函数
    componentInit () {
    },

    // 获取路由参数并设置属性
    initRouterparams () {
      const query = this.$route.query
      console.log(query)
    }
  },
  beforeCreate () {},
  created () {
    this.initRouterparams()
    this.componentInit()
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
