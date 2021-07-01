<!--
 * @Author: your name
 * @Date: 2021-06-30 17:14:03
 * @LastEditTime: 2021-06-30 17:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Pagination\Pagination.vue
-->
<template>
  <el-pagination class="page-box" @size-change="handleSizeChange" @current-change="handleCurrentChange" background :current-page="childMsg.currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="childMsg.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="childMsg.total">
  </el-pagination>
</template>
<script>
export default {
  name: 'Pagination',
  props: ['childMsg'],
  data () {
    return {
      pageparm: {
        currentPage: this.childMsg.currentPage,
        pageSize: this.childMsg.pageSize
      }
    }
  },
  created () {},
  methods: {
    handleSizeChange (val) {
      /**
       * 子传父
       * 参数1 父元素方法
       * 参数2 数据
       */
      this.pageparm.pageSize = val
      this.$emit('callFather', this.pageparm)
    },
    handleCurrentChange (val) {
      /**
       * 子传父
       * 参数1 父元素方法
       * 参数2 数据
       */
      this.pageparm.currentPage = val
      this.$emit('callFather', this.pageparm)
    }
  }
}
</script>

<style>
.page-box {
  margin: 10px auto;
}
</style>
