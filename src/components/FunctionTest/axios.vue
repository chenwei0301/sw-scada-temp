<!--
 * @Author: your name
 * @Date: 2021-06-03 10:54:11
 * @LastEditTime: 2021-06-03 11:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\axios.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>
    <el-button @click.prevent="test_Post" type="primary">test_Post</el-button>
    <el-button @click.prevent="axiosTest" type="primary">axiosTest</el-button>
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      active: false,
      msg: 'this is axios function Test'
    }
  },
  components: {
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    test_Post () {
      const data = {
        username: 'admin',
        password: '123456',
        ui: 1
      }
      this.$axios.post('/login', this.$Qs.stringify(data)).then(res => {
        const {
          data, meta:
          { msg }
        } = res.data
        this.$message({
          showClose: true,
          message: 'msg',
          type: 'success',
          center: true,
          duration: 2000,
          offset: 50
          // onClose: () => {
          //   console.log('close')
          // }
        })
        console.log(data, msg)
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log(error)
        this.$message.error('登录请求失败，请检查后再试！')
      })
    },

    axiosTest () {
      this.$axios.get('/sw3D', {}).then(res => {
        console.log(res)
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        this.$message.error('登录请求失败，请检查后再试！')
      })
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
.func-group{
  padding: 10px;
}
</style>
