<!--
 * @Author: your name
 * @Date: 2021-06-22 14:21:48
 * @LastEditTime: 2021-06-23 17:11:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Draggable.vue
-->
<template>
  <Draggable class="Draggable"></Draggable>
</template>

<script>
import Draggable from '@/components/Draggable/Draggable_Container'
// import Draggable from '@/components/Draggable/Draggable'
export default {
  name: 'draggable',
  data () {
    return {
    }
  },
  components: {
    Draggable
  },
  mixins: '',
  methods: {},
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
</style>
