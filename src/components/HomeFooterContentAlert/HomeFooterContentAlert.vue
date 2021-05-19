<!--
 * @Author: your name
 * @Date: 2021-02-24 17:08:39
 * @LastEditTime: 2021-03-05 17:30:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeFooterContentAlert\HomeFooterContentAlert.vue
-->

<template>
    <div id="bar-conten-alert">
      <div class="bar-alert-list">
        <el-table :data="tableData" border style="width: 100%"  max-height="80" size="mini" :show-header="footer" highlight-current-row class="list-table">
          <el-table-column width="120" prop="logLevel" label="报警等级"></el-table-column>
          <el-table-column width="180" prop="logTime" label="日期/时间"></el-table-column>
          <el-table-column width="140" prop="logStaName" label="车站名称"></el-table-column>
          <el-table-column width="120" prop="logSubSys" label="系统名称"></el-table-column>
          <el-table-column prop="logContent" label="报警名称"></el-table-column>
          <el-table-column width="100" prop="logDes" label="描述"></el-table-column>
          <el-table-column width="100" prop="logAckState" label="状态"></el-table-column>
        </el-table>
      </div>
      <div class="bar-alert-info">
      <div class="info-num-right"><span v-cloak>{{stedNum}}</span></div>
      <div class="info-num-center"><span>/</span></div>
      <div class="info-num-left"><span v-cloak>{{allNum}}</span></div>
      </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      footer: false,
      stedNum: 0,
      allNum: 0,
      tableData: [{
        wsType: 1,
        logATime: '2021-03-05 16:36:98.258',
        logTime: '2021-03-05 16:36:98.258',
        logValue: '',
        logStaName: '',
        logSubSys: '',
        logLevel: '',
        logContent: '',
        logDes: '',
        logState: '',
        logAckTime: '',
        logAckUser: '',
        logAckState: ''
      },
      {
        wsType: 1,
        logATime: '2021-03-05 16:36:98.258',
        logTime: '2021-03-05 16:36:98.258',
        logValue: '',
        logStaName: '',
        logSubSys: '',
        logLevel: '',
        logContent: '',
        logDes: '',
        logState: '',
        logAckTime: '',
        logAckUser: '',
        logAckState: ''
      },
      {
        wsType: 1,
        logATime: '2021-03-05 16:36:98.258',
        logTime: '2021-03-05 16:36:98.258',
        logValue: '',
        logStaName: '',
        logSubSys: '',
        logLevel: '',
        logContent: '',
        logDes: '',
        logState: '',
        logAckTime: '',
        logAckUser: '',
        logAckState: ''
      }]
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
#bar-conten-alert{
  width: 1600px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  color: #7ecef4;
  .bar-alert-list{
    width: 1400px;
    height: 85px;
    border: 2px solid #ff0000;
    .list-table{
      background:olive;
    }
  }
  .bar-alert-info{
    margin: 0 5px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .info-num-left{
    text-align: left;
    width: 45px;
  }
  .info-num-center{
    text-align: center;
    width: 10px;
  }
  .info-num-right{
    text-align: right;
    width: 45px;
  }
}
</style>
