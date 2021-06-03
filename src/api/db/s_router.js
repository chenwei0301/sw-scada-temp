/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-06-03 09:53:24
 * @LastEditTime: 2021-06-03 10:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_router.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/mysql'
// import { querySync, queryAsync } from '@/plugins/mysql'

/**
 * @description:
 * @param {*} obj
 * @param {*} field
 * @return {*}
 */
export async function sql_getRouter (obj, field) {
  const sql = 'select ' + field + ' from ' + tableName.router + ' order by menu_id ASC'
  return await queryAsync(sql)
}
