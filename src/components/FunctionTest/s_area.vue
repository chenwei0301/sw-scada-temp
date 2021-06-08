/* eslint-disable import/no-duplicates */
/* eslint-disable quotes */
<!--
 * @Author: your name
 * @Date: 2021-06-03 10:14:51
 * @LastEditTime: 2021-06-08 11:09:23
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
import sArea from '@/api/db/s_area'
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
      const para = {
        filter: '*'
      }
      // var ret = await sql_getAreas(this, para)
      var ret = await sArea.getAreasAsync(para)
      console.table(ret)
      // this.$message({
      //   showClose: true,
      //   message: this.$Qs.stringify(ret),
      //   type: 'success'
      // })
      ret.forEach(element => {
        // console.log(this.$moment(element.update_time).format('yyyy-MM-DD HH:mm:ss') + '.' + element.update_timeMS.toString())
      })
    },

    async whereAreas () {
      console.log('whereAreas')
      const para = {
        selectFilter: '*',
        whereFilter: "area_id='410' or area_name='测试车站'"
      }
      var ret = await sArea.whereAreasAsync(para)
      console.info(ret, ret.length)
    },

    async insertAreas () {
      var areaId = '431'
      var areaName = '测试车站431'

      const para = {
        selectFilter: '*',
        whereFilter: "area_id='" + areaId + "'"
      }
      var ret = await sArea.whereAreasAsync(para)
      var t = new Date()
      if (ret.length > 0) { // update
        this.$message.error('重复添加，失败！')
      } else { // insert
        sArea.insertAreasSync(this, {
          areaId: areaId,
          areaName: areaName,
          // updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
          updateTimeMs: this.$moment(t).format('SSS')
        })
      }
    },

    async updateAreasAsync () {
      console.info('updateAreasAsync')
      var t = new Date()
      const para = {
        id: 17,
        area_id: '431',
        area_name: '测试车站431',
        // updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
        updateTimeMs: this.$moment(t).format('SSS')
      }
      var ret = await sArea.updateAreasAsync(para)
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
      const para = {
        id: 170,
        area_id: '431',
        area_name: '测试车站431',
        updateTime: this.$moment(t).format('yyyy-MM-DDTHH:mm:ss'),
        updateTimeMs: this.$moment(t).format('SSS')
      }
      sArea.updateAreasSync(this, para)
    },

    async deleteAreas () {
      console.info('deleteAreas')
      const para = {
        field: 'id',
        fieldVal: 8
      }
      var ret = await sArea.deleteAreasAsync(para)
      console.log(ret)
      if (ret.affectedRows > 0) {
        console.log('delete success')
      } else if (ret.affectedRows === 0) {
        console.log('not exist')
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
