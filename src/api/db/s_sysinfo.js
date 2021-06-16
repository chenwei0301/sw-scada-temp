/*
 * @Author: your name
 * @Date: 2021-06-16 10:17:57
 * @LastEditTime: 2021-06-16 14:00:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_sysinfo.js
 */
import Qs from 'qs'
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'

/**
 * @description: 查询 区域表 数据
 * @param {*} para
 * @return {*}
 */
const getSysInfoAsync = async function (para) {
  const sql = 'select ' +
              para.filter +
              ' from ' + tableName.sysInfo +
              ' order by sys_id ASC'
  return await queryAsync(sql)
}

const setSysInfoToStore = async function (obj) {
  const para = {
    filter: '*'
  }
  var ret = await getSysInfoAsync(para)
  if (ret.length) {
    obj.$store.commit('setSysInfo', ret[0])
  }
}

const setSysInfoToStoreAndSession = async function (obj) {
  const para = {
    filter: '*'
  }
  var ret = await getSysInfoAsync(para)
  if (ret.length) {
    obj.$store.commit('setSysInfo', ret[0])
    sessionStorage.setItem('SCADA_sysInfo', Qs.stringify(ret[0]))
  }
}

const setSysInfoToSession = function (data) {
  sessionStorage.setItem('SCADA_sysInfo', Qs.stringify(data))
}

const getSysInfoFromSession = function () {
  return Qs.parse(sessionStorage.getItem('SCADA_sysInfo'))
}

export default {
  getSysInfoAsync,
  setSysInfoToStore,
  setSysInfoToStoreAndSession,
  setSysInfoToSession,
  getSysInfoFromSession
}
