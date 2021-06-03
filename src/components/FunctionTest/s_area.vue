/* eslint-disable quotes */
<!--
 * @Author: your name
 * @Date: 2021-06-03 10:14:51
 * @LastEditTime: 2021-06-03 17:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\FunctionTest\s_area.vue
-->
<template>
  <div class="func-group">
    <label for="">{{msg | uppercaseFirst  }}</label>
    <br>
    <el-button @click.prevent="getAreas" type="primary">getAreas</el-button>

    <el-button @click.prevent="whereAreas" type="primary">whereAreas</el-button>

    <el-button @click.prevent="insertAreas" type="primary">insertAreas</el-button>

    <el-button @click.prevent="updateAreasAsync" type="primary">updateAreasAsync</el-button>

    <el-button @click.prevent="updateAreasSync" type="primary">updateAreasSync</el-button>

    <el-button @click.prevent="deleteAreas" type="primary">deleteAreas</el-button>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import { sql_insertAreas, sql_getAreas, sql_whereAreas, sql_updateAreasSync, sql_updateAreasAsync, sql_deleteAreasAsync } from '@/api/db/s_area'
import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      active: false,
      msg: 'this is table named s_area function Test'
    }
  },
  components: {
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    async getAreas () {
      var para = {
        filter: '*'
      }
      var ret = await sql_getAreas(this, para)
      console.table(ret)
      ret.forEach(element => {
        // console.log(this.$moment(element.update_time).format('yyyy-MM-DD HH:mm:ss') + '.' + element.update_timeMS.toString())
      });
    },

    async whereAreas () {
      console.log('whereAreas')
      var para = {
        filter: '*',
        field: 'id',
        fieldVal: 1
      }
      var ret = await sql_whereAreas(this, para)
      console.info(ret, ret.length)
    },

    async insertAreas () {
      var areaId = '431'
      var areaName = '测试车站431'
      var para = {
        filter: '*',
        field: 'area_id',
        fieldVal: areaId
      }
      var ret = await sql_whereAreas(this, para)
      var t = new Date()
      if (ret.length > 0) { // update
        this.$message.error('重复添加，失败！')
      } else { // insert
        sql_insertAreas(this, {
          areaId: areaId,
          areaName: areaName,
          updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
          updateTimeMs: this.$moment(t).format('SSS')
        })
      }
    },

    async updateAreasAsync () {
      console.info('updateAreasAsync')
      var t = new Date()
      var para = {
        id: 17,
        area_id: '431',
        area_name: '测试车站431',
        updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
        updateTimeMs: this.$moment(t).format('SSS')
      }
      var ret = await sql_updateAreasAsync(this, para)
      console.log(ret)
      if (ret.affectedRows > 0) {
        console.log('update success')
      } else if (ret.affectedRows === 0) {
        console.log('update not exist')
      }
      if (ret.warningCount > 0) {
        console.log('update warning')
      }
    },

    updateAreasSync () {
      console.info('updateAreasSync')
      var t = new Date()
      var para = {
        id: 170,
        area_id: '431',
        area_name: '测试车站431',
        updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
        updateTimeMs: this.$moment(t).format('SSS')
      }
      sql_updateAreasSync(this, para)
    },

    async deleteAreas () {
      console.info('deleteAreas')
      var para = {
        field: 'id',
        fieldVal: 13
      }
      var ret = await sql_deleteAreasAsync(this, para)
      console.log(ret)
      if (ret.affectedRows > 0) {
        console.log('delete success')
      }
      if (ret.warningCount > 0) {
        console.log('delete warning')
      }
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
