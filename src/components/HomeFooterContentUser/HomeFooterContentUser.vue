<!--
 * @Author: your name
 * @Date: 2021-02-24 17:10:18
 * @LastEditTime: 2021-03-05 14:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeFooterContentUser\HomeFooterContentUser.vue
-->

<template>
    <div class="bar-content-user">
    <div class="bar-content-user-top">
      <span>用户名</span>
      <span class="content-user" v-cloak>{{username}}</span>
    </div>
    <div class="bar-content-user-top">
      <span>用户类型</span>
      <span class="content-user" v-cloak>{{userCommnet}}</span>
    </div>
    <div class="bar-content-user-bottom">bottom</div>
    </div>
</template>

<script>
import { decodeBase64 } from '@/api/base/common.js'
export default {
  prop: {
  },
  data () {
    return {
      username: '',
      userCommnet: ''
    };
  },
  methods: {
    initData () {
      this.username = decodeBase64(sessionStorage.getItem('ISCS_username'))
      this.userCommnet = sessionStorage.getItem('ISCS_userComment')
    }
  },
  beforeCreate () {},
  created () {
    this.initData()
  },
  beforeMount () {
  },
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
.bar-content-user{
  width: 200px;
  height: 80px;
  margin: 0 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  div{
    width: 160px;
    height: 24px;
    line-height: 24px;
  }
  .bar-content-user-top{
    color: #7ecef4;
    padding: 0 10px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    background: url(../../assets/image/userBg.png);
    .content-user{
      text-align: center;
    }
  }
  .bar-content-user-center{
    color: #7ecef4;
    padding: 0 10px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    background: url(../../assets/image/userBg.png);
    .content-user{
      text-align: center;
    }
  }
  .bar-content-user-bottom{
    background: chocolate;
  }
}
</style>
