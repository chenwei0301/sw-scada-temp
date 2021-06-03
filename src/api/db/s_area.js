/* eslint-disable quotes */
/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-05-21 09:34:07
 * @LastEditTime: 2021-06-03 17:53:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_area.js
 */
import tableName from '@/api/db/tableName'
import { querySync, queryAsync } from '@/plugins/mysql'

/**
 * @description: 查询 区域表 数据
 * @param {*}
 * @return {*}
 */
export async function sql_getAreas (obj, para) {
  const sql = 'select ' +
              para.filter +
              ' from ' + tableName.area +
              ' order by area_id ASC'
  console.log('sql:', sql)
  return await queryAsync(sql)
}

/**
 * @description: 条件过滤查询
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
export async function sql_whereAreas (obj, para) {
  console.log(typeof (para.fieldVal))
  const singleQuotes = (typeof (para.fieldVal) !== "number" ? "'" : "")
  const sql = "select " +
              para.filter +
              " from " + tableName.area +
              " where " + para.field + "=" +
              singleQuotes +
              para.fieldVal +
              singleQuotes +
              " order by area_id ASC"
  console.log('sql:', sql)
  return await queryAsync(sql)
}

/**
 * @description: 插入
 * @param {*} obj
 * @param {*} areaId
 * @param {*} areaName
 * @return {*}
 */
export function sql_insertAreas (obj, para) {
  const sql = "INSERT INTO " +
              tableName.area +
              " VALUES(" +
              "null" + ",'" +
              para.areaId + "','" +
              para.areaName + "','" +
              para.updateTime + "'," +
              para.updateTimeMs +
              ")"
  console.log('sql:', sql)
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
 * @description: 更新数据
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
export async function sql_updateAreasAsync (obj, para) {
  const sql = "update " + tableName.area +
              " set " +
              "area_id='" + para.area_id + "', " +
              "area_name='" + para.area_name + "', " +
              "update_time='" + para.updateTime + "', " +
              "update_timeMS=" + para.updateTimeMs +
              " where " +
              "id=" + para.id
  console.log('sql:', sql)
  return await queryAsync(sql)
}

/**
 * @description:
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
export function sql_updateAreasSync (obj, para) {
  const sql = "update " +
              tableName.area +
              " set " +
              "area_id='" + para.area_id + "', " +
              "area_name='" + para.area_name + "', " +
              "update_time='" + para.updateTime + "', " +
              "update_timeMS=" + para.updateTimeMs +
              " where " +
              "id=" + para.id
  console.log('sql:', sql)
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
 * @description: 删除数据
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
export async function sql_deleteAreasAsync (obj, para) {
  const singleQuotes = (typeof (para.fieldVal) !== "number" ? "'" : "")
  const sql = "delete from " + tableName.area +
              " where " +
              para.field + "=" + singleQuotes + para.fieldVal + singleQuotes
  console.log('sql:', sql)
  return await queryAsync(sql)
}
