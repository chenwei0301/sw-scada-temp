/* eslint-disable quotes */
/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-06-03 09:53:24
 * @LastEditTime: 2021-08-18 18:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_router.js
 */

import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'

// const
const MENU_TYPE_HOME = 0
const MENU_TYPE_TOOLBAR = 1
const MENU_TYPE_TOOLBAR_VUE = 2
const MENU_TYPE_MENUBAR = 3
const MENU_TYPE_MENUBAR_VUE = 4
const MENU_TYPE_VUE = 5

const MENUTYPE = {
  home: MENU_TYPE_HOME,
  toolBAR: MENU_TYPE_TOOLBAR_VUE,
  toolBARVUE: MENU_TYPE_TOOLBAR,
  menuBAR: MENU_TYPE_MENUBAR,
  menuBARVUE: MENU_TYPE_MENUBAR_VUE,
  menuVUE: MENU_TYPE_VUE
}

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
              para.menu_type + "," +
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
async function getUnregisteredRouterAsync () {
  const para = {
    selectFilter: '*',
    whereFilter: 'menu_type>' + MENUTYPE.home + ' order by module_id ASC'
  }
  var ret = await whereRouterAsync(para)
  return ret
}

/**
 * @description: 获取RouterMenu数据 Async
 * @param {*} para
 * @return {*}
 */
async function getRouterMenuAsync (selectFilter = '*') {
  const para = {
    selectFilter: selectFilter,
    // eslint-disable-next-line quotes
    whereFilter: 'menu_type=' + MENUTYPE.menuBAR + ' order by display_order ASC'
  }
  var ret = await whereRouterAsync(para)
  // console.table(ret)
  for (var i = 0; i < ret.length; i++) {
    ret[i].children = []
    if (isNull(ret[i].path)) { // 子组件
      const subPara = {
        selectFilter: selectFilter,
        whereFilter: 'parent_id=' + ret[i].menu_id + ' order by display_order ASC'
      }
      ret[i].children = await whereRouterAsync(subPara)
    }
  }
  return ret
}

const isNull = function (str) {
  return str === null || str === "";
}

const UnRegisteredRouter = async function () {
  var ret = await getUnregisteredRouterAsync()
  const tempRouter = []
  for (var i = 0; i < ret.length; i++) {
    if (!isNull(ret[i].path)) {
      var temp = {
        path: ret[i].path,
        name: ret[i].name,
        meta: { title: ret[i].title },
        // component: routerCom(ret[i].component)
        component: routerCom(ret[i].component)
      }
      if (ret[i].redirect) {
        temp.redirect = ret[i].redirect
      }
      tempRouter.push(temp)
    }
  }
  return tempRouter
}

// function routerCom (ret) {
//   return (resolve) => require([`@/${ret.component}`], resolve)
// }
function routerCom (path) {
  return (resolve) => require([`@/${path}`], resolve)
}

const addAsyncRoutes = async function (obj) {
  var ret = await UnRegisteredRouter()
  for (var i = 0; i < ret.length; i++) {
    obj.$router.addRoute('Home', ret[i])
  }
}

/**
 * @description: 获取Router Menu数据 Async
 * @param {*} para
 * @return {*}
 */
async function getRouterMenuFormatAsync () {
  var ret = await getRouterMenuAsync()

  return ret
}

export default {
  getRouterAsync,
  whereRouterAsync,
  insertRouterAsync,
  updateRouterAsync,
  deleteRouterAsync,
  getUnregisteredRouterAsync,
  UnRegisteredRouter,
  getRouterMenuAsync,
  addAsyncRoutes,
  getRouterMenuFormatAsync
}
