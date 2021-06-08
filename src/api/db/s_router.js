/* eslint-disable quotes */
/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-06-03 09:53:24
 * @LastEditTime: 2021-06-08 17:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_router.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'
// import { querySync, queryAsync } from '@/plugins/mysql'

/**
 * @description: 获取Router数据 Async
 * @param {*} para
 * @return {*}
 */
async function getRouterAsync (para) {
  const sql = 'select ' + para.field + ' from ' + tableName.router + ' order by menu_id ASC'
  return await queryAsync(sql)
}

/**
 * @description: 查询Router数据 Async
 * @param {*} para
 * @return {*}
 */
async function whereRouterAsync (para) {
  const sql = "select " +
              para.selectFilter +
              " from " + tableName.router +
              " where " + para.whereFilter
  return await queryAsync(sql)
}

/**
 * @description: 新增Router数据
 * @param {*} para
 * @return {*}
 */
async function insertRouterAsync (para) {
  const sql = "INSERT INTO " +
              tableName.router +
              " VALUES(" +
              // "null" + "," +
              para.menu_id + "," +
              para.parent_id + "," +
              para.module_id + "," +
              para.isMenu + "," +
              para.display_order + ",'" +
              para.title + "','" +
              para.path + "','" +
              para.redirect + "','" +
              para.component + "','" +
              para.name + "','" +
              para.icon + "'," +
              para.always_show + "," +
              "NOW()" + "," +
              "NOW()" + ",'" +
              para.remark + "'" +
              ")"
  return await queryAsync(sql)
}

/**
 * @description: 更新Router数据
 * @param {*} field
 * @return {*}
 */
async function updateRouterAsync (para) {
  const sql = "update " + tableName.router +
              " set " +
              para.setFilter +
              " where " +
              para.whereFilter
  return await queryAsync(sql)
}

/**
 * @description: 删除数据 Async
 * @param {*} para
 * @return {*}
 */
async function deleteRouterAsync (para) {
  const singleQuotes = (typeof (para.fieldVal) !== "number" ? "'" : "")
  const sql = "delete from " + tableName.router +
              " where " +
              para.field + "=" + singleQuotes + para.fieldVal + singleQuotes
  return await queryAsync(sql)
}

/**
 * @description: 获取RouterMenu数据 Async
 * @param {*} para
 * @return {*}
 */
async function getRouterMenuAsync () {
  const para = {
    selectFilter: '*',
    // eslint-disable-next-line quotes
    whereFilter: "isMenu=1 order by display_order ASC"
  }
  var ret = await whereRouterAsync(para)
  console.table(ret)
  for (var i = 0; i < ret.length; i++) {
    const subPara = {
      selectFilter: '*',
      // eslint-disable-next-line quotes
      whereFilter: "parent_id=" + ret[i].menu_id + " order by display_order ASC"
    }
    var subRet = await whereRouterAsync(subPara)
    console.table(i, subRet)
  }
  return ret
}

export default {
  getRouterAsync,
  whereRouterAsync,
  insertRouterAsync,
  updateRouterAsync,
  deleteRouterAsync,
  getRouterMenuAsync
}
