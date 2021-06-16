<!--
 * @Author: your name
 * @Date: 2021-05-27 17:46:13
 * @LastEditTime: 2021-06-15 08:37:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\VDR.vue
-->
<template>
  <div class="VDR">
    <el-button @click.prevent="routertest" type="primary">router</el-button>
    <el-button @click.prevent="routerHome" type="primary">routerHome</el-button>
    <el-button @click.prevent="routerHome" type="primary">routerLogin</el-button>
    <el-button @click.prevent="routerHomeUserManager" type="primary">routerHomeUserManager</el-button>
    <el-button @click.prevent="routerHomeColdwater" type="primary">routerHomeColdwater</el-button>
    <el-button @click.prevent="routerHomeTransfer" type="primary">routerHomeTransfer</el-button>

    <vue-draggable-resizable :active.sync="active" class="vdr1" :grid="[20,20]" :x="10" :y="10">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  components: {
  },
  methods: {
    routertest () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ name: 'gedi' })
    },
    routerLogin () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ path: '/login' })
    },
    routerHome () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ path: '/home' })
    },
    routerHomeColdwater () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ path: '/home/SW404_BAS_Coldwater' })
    },
    routerHomeUserManager () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ path: '/home/UserManager' })
    },
    routerHomeTransfer () {
      // console.log(this.$router.options.routes[1])
      this.$router.push({ path: '/home/TransferManager' })
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {}
}
</script>

<style lang="scss" scoped>
.VDR{
  //  background-color:#8ec2f3;
   height: 100%;
   width: 100%;
  .vdr1{
    background-color: lightcoral;
  }
}
</style>
