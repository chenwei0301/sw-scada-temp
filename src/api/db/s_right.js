/* eslint-disable quotes */
/*
 * @Author: your name
 * @Date: 2021-08-19 17:33:08
 * @LastEditTime: 2021-08-27 17:45:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_right.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync, querySync } from '@/plugins/modules/mysql'
import sArea from '@/api/db/s_area'
import sBehavior from '@/api/db/s_behavior'
import sModule from '@/api/db/s_module'
import sRole from '@/api/db/s_role'

/**
 * @description: 获取right数据 Async
 * @param {*} para
 * @return {*}
 */
async function getRightAsync (para) {
  const sql = 'select ' + para.filter + ' from ' + tableName.right + ' order by area_id ASC'
  console.log(sql);
  return await queryAsync(sql)
}

/**
 * @description: 条件过滤查询
 * @param {*} para
 * @return {*}
 */
async function whereRightAsync (para) {
  const sql = 'select ' +
              para.selectFilter +
              ' from ' + tableName.right +
              ' where ' + para.whereFilter +
              ' order by ABS(module_id) ASC'
  return await queryAsync(sql)
}

async function getRightAsyncFormate (roleId) {
  // 1. 获取所有 area 信息
  var retArea = await sArea.getAreasAsync({ filter: 'area_id,area_name' })
  // 2. 循环查询对应权限 roleId 下的所有module 权限
  if (retArea.length > 0) {
    for (let i = 0; i < retArea.length; i++) {
      retArea[i].role_id = roleId
      retArea[i].children = await whereRightAsync({ selectFilter: 'module_id,behavior', whereFilter: 'role_id=' + roleId + " and area_id='" + retArea[i].area_id + "'" })
    }
  }
  return retArea
}

/**
 * @description: 新增right信息
 * @param {*} para
 * @return {*}
 */
async function FormateRightForTree (roleId) {
  const ret = await getRightAsyncFormate(roleId)
  // console.log(ret)
  const data = []
  let retModule = []
  let retBehavior = []
  if (ret.length > 0) {
    retModule = await sModule.getModuleAsync({ filter: 'module_id,module_title' })
    const objModule = {}
    retModule.forEach(element => {
      objModule[element.module_id] = element.module_title
    })
    // console.log(retModule)
    // console.log(objModule)
    retBehavior = await sBehavior.getBehaviorAsync({ field: '*' })
    const objBehavior = {}
    retBehavior.forEach(element => {
      objBehavior[element.behavior_name] = element.behavior_des
    })
    // console.log(retBehavior)
    // console.log(objBehavior)
    for (let i = 0; i < ret.length; i++) {
      const id1 = roleId + '-' + ret[i].area_id
      const temp = []
      ret[i].children.forEach(sysEle => {
        const behaviorTemp = []
        const id2 = id1 + "-" + sysEle.module_id
        retBehavior.forEach(behaEle => {
          behaviorTemp.push({ id: id2 + '-' + behaEle.behavior_name, label: behaEle.behavior_des, name: behaEle.behavior_name, type: 'behavior' })
        })
        temp.push({ id: id2, label: objModule[sysEle.module_id], children: behaviorTemp, name: sysEle.module_id, type: 'module' })
      })
      const subData = {
        id: id1,
        label: ret[i].area_name,
        children: temp,
        name: ret[i].area_id,
        type: 'area'
      }
      data.push(subData)
    }
  }
  let behaComb = ''
  retBehavior.forEach(element => {
    behaComb += element.behavior_name
  });
  return { data: data, module: retModule, behavior: retBehavior, behaComb: behaComb }
}

/**
 * @description: 新增right信息
 * @param {*} para
 * @return {*}
 */
async function insertRightAsync (para) {
  const sql = "INSERT INTO " +
              tableName.right +
              " VALUES(" +
              para.role_id + ",'" +
              para.area_id + "','" +
              para.module_id + "','" +
              para.behavior + "'," +
              "NOW()" +
              ")"
  console.log('sql:', sql)
  return await queryAsync(sql)
}

function insertRightSync (para) {
  const sql = "INSERT INTO " +
              tableName.right +
              " VALUES(" +
              para.role_id + ",'" +
              para.area_id + "','" +
              para.module_id + "','" +
              para.behavior + "'," +
              "NOW()" +
              ")"
  querySync(sql, function (err, vals, fields) {
    if (err) {
      // console.log(err)
    }
    if (vals) {
      // console.log(vals)
    }
    if (fields) {
      // console.log(fields)
    }
  })
}
/**
 * @description: 删除right信息
 * @param {*} para
 * @return {*}
 */
function deleteRightSync (para) {
  const sql = "delete from " +
              tableName.right +
              " where " +
              "role_id=" + para.role_id +
              " and " +
              "area_id=" + "'" + para.area_id + "'" +
              " and " +
              "module_id=" + "'" + para.module_id + "'"

  querySync(sql, function (err, vals, fields) {
    if (err) {
      // console.log(err)
    }
    if (vals) {
      // console.log(vals)
    }
    if (fields) {
      // console.log(fields)
    }
  })
}
/**
 * @description: 当新增role、area、 module时，添加或者删除right信息
 * @param {*} para
 * @return {*}
 */
async function updateRightBaseInfo (para) {
  if (para.type === 'role') {
    // 1. 获取所有 area 信息
    const retArea = await sArea.getAreasAsync({ filter: 'area_id' })
    // console.log(retArea)

    // 2. 获取所有 module 信息
    const retModule = await sModule.getModuleAsync({ filter: 'module_id' })
    // console.log(retModule)

    // 3. 循环插入 （同步插入）
    // console.time()
    if (retArea.length > 0 && retModule.length > 0) {
      for (let i = 0; i < retArea.length; i++) {
        for (let j = 0; j < retModule.length; j++) {
          if (para.edit === 'add') {
            insertRightSync({
              role_id: para.id,
              area_id: retArea[i].area_id,
              module_id: retModule[j].module_id,
              behavior: ''
            })
          } else if (para.edit === 'delete') {
            deleteRightSync({
              role_id: para.id,
              area_id: retArea[i].area_id,
              module_id: retModule[j].module_id
            })
          }
        }
      }
    }
    // console.timeEnd()
  } else if (para.type === 'area') {
    // 1. 获取所有 role 信息
    const retRight = await sRole.getRolesAsync({ filter: 'role_id', order: 'by role_id ASC' })
    // console.log(retRight)

    // 2. 获取所有 module 信息
    const retModule = await sModule.getModuleAsync({ filter: 'module_id' })
    // console.log(retModule)

    // 3. 循环插入 （同步插入）
    // console.time()
    if (retRight.length > 0 && retModule.length > 0) {
      for (let i = 0; i < retRight.length; i++) {
        for (let j = 0; j < retModule.length; j++) {
          if (para.edit === 'add') {
            insertRightSync({
              role_id: retRight[i].role_id,
              area_id: para.id,
              module_id: retModule[j].module_id,
              behavior: ''
            })
          } else if (para.edit === 'delete') {
            deleteRightSync({
              role_id: retRight[i].role_id,
              area_id: para.id,
              module_id: retModule[j].module_id
            })
          }
        }
      }
    }
    // console.timeEnd()
  } else if (para.type === 'module') {
    // 1. 获取所有 role 信息
    const retRight = await sRole.getRolesAsync({ filter: 'role_id', order: 'by role_id ASC' })
    // console.log(retRight)

    // 2. 获取所有 area 信息
    const retArea = await sArea.getAreasAsync({ filter: 'area_id' })
    // console.log(retArea)

    // 3. 循环插入 （同步插入）
    // console.time()
    if (retRight.length > 0 && retArea.length > 0) {
      for (let i = 0; i < retRight.length; i++) {
        for (let j = 0; j < retArea.length; j++) {
          if (para.edit === 'add') {
            insertRightSync({
              role_id: retRight[i].role_id,
              area_id: retArea[j].area_id,
              module_id: para.id,
              behavior: ''
            })
          } else if (para.edit === 'delete') {
            deleteRightSync({
              role_id: retRight[i].role_id,
              area_id: retArea[j].area_id,
              module_id: para.id
            })
          }
        }
      }
    }
    // console.timeEnd()
  }
}

export default {
  getRightAsync,
  whereRightAsync,
  getRightAsyncFormate,
  insertRightAsync,
  insertRightSync,
  deleteRightSync,
  updateRightBaseInfo,
  FormateRightForTree
}
