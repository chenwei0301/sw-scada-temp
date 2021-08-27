/* eslint-disable quotes */
/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-07-28 09:34:07
 * @LastEditTime: 2021-07-29 17:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_role.js
 */
import tableName from '@/api/db/tableName'
import { querySync, queryAsync } from '@/plugins/modules/mysql'

/**
 * @description: 查询 权限表 数据
 * @param {*} para
 * @return {*}
 */
async function getRolesAsync (para) {
  const sql = 'select ' +
              para.filter +
              ' from ' + tableName.role +
              // ' order by role_id ASC'
              ' order ' + para.order
  return await queryAsync(sql)
}

/**
 * @description: 条件过滤查询
 * @param {*} para
 * @return {*}
 */
async function whereRolesAsync (para) {
  const sql = "select " +
              para.selectFilter +
              " from " + tableName.role +
              " where " + para.whereFilter
  // " order by role_id ASC"
  return await queryAsync(sql)
}

/**
 * @description: 新增roles Sync
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
function insertRolesSync (obj, para) {
  const sql = "INSERT INTO " +
              tableName.role +
              " VALUES(" +
              // para.roleId + ",'" +
              null + ",'" +
              para.roleName + "','" +
              para.roledes + "'," +
              para.isenable + "," +
              "NOW()" + "," +
              "NOW()" +
              ")"
  querySync(sql, function (err, vals, fields) {
    if (err) {
      // console.log(err.message, sql)
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
      // 调用页码跳转函数
      obj.whereRoleForId(obj.pageparm)
      // 调用窗口关闭函数及初始查询函数
      obj.closeDialog()
      // obj.getRoles()
    }
    if (fields) {
      // console.log(fields)
    }
  })
}

/**
 * @description: 新增roles Async
 * @param {*} para
 * @return {*}
 */
async function insertRolesAsync (para) {
  const sql = "INSERT INTO " +
              tableName.role +
              " VALUES(" +
              // para.roleId + ",'" +
              para.roleName + "','" +
              para.roledes + "'," +
              para.isenable + "," +
              "NOW()" + "," +
              "NOW()" +
              ")"
  return await queryAsync(sql)
}

/**
 * @description: 更新数据 Async
 * @param {*} para
 * @return {*}
 */
async function updateRolesAsync (para) {
  const sql = "update " + tableName.role +
              " set " +
              "role_id=" + para.role_id + ", " +
              // null + ",'" +
              "role_name='" + para.role_name + "', " +
              "role_des='" + para.role_des + "', " +
              "is_enable=" + para.is_enable + ", " +
              "create_time='" + para.create_time + "', " +
              "update_time=" + "NOW()" + ", " +
              " where " +
              "role_id=" + para.role_id
  return await queryAsync(sql)
}

/**
 * @description: 更新数据 Sync
 * @param {*} obj
 * @param {*} para
 * @return {*}
 */
function updateRolesSync (obj, para) {
  const sql = "update " +
              tableName.role +
              " set " +
              "role_id=" + para.role_id + ", " +
              // null + ",'" +
              "role_name='" + para.role_name + "', " +
              "role_des='" + para.role_des + "', " +
              "is_enable=" + para.is_enable + ", " +
              "create_time='" + para.create_time + "', " +
              "update_time=" + "NOW()" +
              " where " +
              "role_id=" + para.role_id
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
      if (ret.affectedRows > 0) {
        obj.$message({
          showClose: true,
          message: '更新成功',
          type: 'success'
        })
        // 调用页码跳转函数
        obj.whereRoleForId(obj.pageparm)
      } else if (ret.affectedRows === 0) {
        console.log('update not exist')
        obj.$message({
          showClose: true,
          message: 'update not exist',
          type: 'warning'
        })
      }
    }

    // 调用窗口关闭函数及初始查询函数
    obj.closeDialog()
    // obj.getRoles()
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
async function deleteRolesAsync (para) {
  const sql = "delete from " + tableName.role +
              " where " +
              para.field + " in " + "(" + para.fieldVal + ")"
  return await queryAsync(sql)
}

export default {
  getRolesAsync,
  whereRolesAsync,
  insertRolesAsync,
  insertRolesSync,
  updateRolesAsync,
  updateRolesSync,
  deleteRolesAsync
}
