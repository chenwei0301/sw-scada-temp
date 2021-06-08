/* eslint-disable quotes */
/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-05-21 09:34:07
 * @LastEditTime: 2021-06-08 13:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_area.js
 */
import tableName from '@/api/db/tableName'
import { querySync, queryAsync } from '@/plugins/modules/mysql'

/**
 * @description: 查询 区域表 数据
 * @param {*} para
 * @return {*}
 */
async function getAreasAsync (para) {
  const sql = 'select ' +
              para.filter +
              ' from ' + tableName.area +
              ' order by area_id ASC'
  return await queryAsync(sql)
}

/**
 * @description: 条件过滤查询
 * @param {*} para
 * @return {*}
 */
async function whereAreasAsync (para) {
  const sql = "select " +
              para.selectFilter +
              " from " + tableName.area +
              " where " + para.whereFilter +
              " order by area_id ASC"
  return await queryAsync(sql)
}

/**
 * @description: 新增areas Sync
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
function insertAreasSync (obj, para) {
  const sql = "INSERT INTO " +
              tableName.area +
              " VALUES(" +
              "null" + ",'" +
              para.areaId + "','" +
              para.areaName + "','" +
              para.updateTime + "'," +
              para.updateTimeMs +
              ")"
  querySync(sql, function (err, vals, fields) {
    if (err) {
      // console.log(err.message)
      obj.$message({
        showClose: true,
        message: '添加失败',
        type: 'error'
      })
    }
    if (vals) {
      // console.log(JSON.parse(JSON.stringify(vals)))
      obj.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
    }
    if (fields) {
      // console.log(fields)
    }
  })
}

/**
 * @description: 新增areas Async
 * @param {*} para
 * @return {*}
 */
async function insertAreasAsync (para) {
  const sql = "INSERT INTO " +
              tableName.area +
              " VALUES(" +
              "null" + ",'" +
              para.areaId + "','" +
              para.areaName + "','" +
              para.updateTime + "'," +
              para.updateTimeMs +
              ")"
  return await queryAsync(sql)
}

/**
 * @description: 更新数据 Async
 * @param {*} para
 * @return {*}
 */
async function updateAreasAsync (para) {
  const sql = "update " + tableName.area +
              " set " +
              "area_id='" + para.area_id + "', " +
              "area_name='" + para.area_name + "', " +
              // "update_time='" + para.updateTime + "', " +
              "update_time=" + "NOW()" + ", " +
              "update_timeMS=" + para.updateTimeMs +
              " where " +
              "id=" + para.id
  return await queryAsync(sql)
}

/**
 * @description: 更新数据 Sync
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
function updateAreasSync (obj, para) {
  const sql = "update " +
              tableName.area +
              " set " +
              "area_id='" + para.area_id + "', " +
              "area_name='" + para.area_name + "', " +
              // "update_time='" + para.updateTime + "', " +
              "update_time=" + "NOW()" + ", " +
              "update_timeMS=" + para.updateTimeMs +
              " where " +
              "id=" + para.id
  querySync(sql, function (err, vals, fields) {
    if (err) {
      // console.log(err.message)
      obj.$message({
        showClose: true,
        message: '更新失败',
        type: 'error'
      })
    }
    if (vals) {
      var ret = JSON.parse(JSON.stringify(vals))
      // console.log(ret)
      if (ret.affectedRows > 0) {
        obj.$message({
          showClose: true,
          message: '更新成功',
          type: 'success'
        })
      } else if (ret.affectedRows === 0) {
        console.log('update not exist')
        obj.$message({
          showClose: true,
          message: 'update not exist',
          type: 'warning'
        })
      }
    }
    if (fields) {
      // console.log(fields)
    }
  })
}

/**
 * @description: 删除数据 Async
 * @param {*} para
 * @return {*}
 */
async function deleteAreasAsync (para) {
  const singleQuotes = (typeof (para.fieldVal) !== "number" ? "'" : "")
  const sql = "delete from " + tableName.area +
              " where " +
              para.field + "=" + singleQuotes + para.fieldVal + singleQuotes
  return await queryAsync(sql)
}

export default {
  getAreasAsync,
  whereAreasAsync,
  insertAreasAsync,
  insertAreasSync,
  updateAreasAsync,
  updateAreasSync,
  deleteAreasAsync
}
