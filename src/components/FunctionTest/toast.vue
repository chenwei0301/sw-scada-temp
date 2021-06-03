<!--
 * @Author: your name
 * @Date: 2021-06-03 10:59:19
 * @LastEditTime: 2021-06-03 10:59:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\toast.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>
    <el-button @click.prevent="VueToast" type="primary">VueToast</el-button>
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
    VueToast () {
      // this.$toast.error('简单的Toast消息')
      this.$toast.open({
        message: '简单的Toast消息',
        type: 'success',
        position: 'top',
        duration: 3000,
        // dismissible: false,
        // queue: false,
        onClose: () => {
          console.log('close')
        }
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
