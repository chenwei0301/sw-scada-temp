/*
 * @Author: your name
 * @Date: 2021-08-19 17:33:08
 * @LastEditTime: 2021-08-19 17:42:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_right.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'

/**
 * @description: 获取right数据 Async
 * @param {*} para
 * @return {*}
 */
async function getRightAsync (para) {
  const sql = 'select ' + para.field + ' from ' + tableName.right + ' order by menu_id ASC'
  return await queryAsync(sql)
}

async function RightAsyncFormate () {
  const para = {

  }
  const ret = await getRightAsync(para)
  console.log(ret)
  const right = []
  return right
}
export default {
  getRightAsync,
  RightAsyncFormate
}
