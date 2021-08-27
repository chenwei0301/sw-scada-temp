/*
 * @Author: your name
 * @Date: 2021-08-26 14:06:35
 * @LastEditTime: 2021-08-26 14:08:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_behavior.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'

/**
 * @description: 获取right数据 Async
 * @param {*} para
 * @return {*}
 */
async function getBehaviorAsync (para) {
  const sql = 'select ' + para.field + ' from ' + tableName.behavior
  return await queryAsync(sql)
}

export default {
  getBehaviorAsync
}
