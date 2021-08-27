/*
 * @Author: your name
 * @Date: 2021-08-19 09:46:14
 * @LastEditTime: 2021-08-26 14:51:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_module.js
 */
import tableName from '@/api/db/tableName'
import { querySync, queryAsync } from '@/plugins/modules/mysql'

/**
 * @description: 查询 子系统模块 数据
 * @param {*} para
 * @return {*}
 */
async function getModuleAsync (para) {
  const sql = 'select ' +
              para.filter +
              ' from ' + tableName.module +
              ' order by ABS(module_id) ASC'
  return await queryAsync(sql)
}

export default {
  getModuleAsync
}
