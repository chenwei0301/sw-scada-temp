/* eslint-disable quotes */
/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-06-03 09:53:24
 * @LastEditTime: 2021-06-09 16:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_router.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'
// import { querySync, queryAsync } from '@/plugins/mysql'
import { routes } from '@/router'
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
    // eslint-disable-next-line quotes
    whereFilter: "menu_type>" + MENUTYPE.home + " order by module_id ASC"
  }
  var ret = await whereRouterAsync(para)
  return ret
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
    whereFilter: "menu_type=" + MENUTYPE.menuBAR + " order by display_order ASC"
  }
  var ret = await whereRouterAsync(para)
  // console.table(ret)
  for (var i = 0; i < ret.length; i++) {
    ret[i].children = []
    if (isNull(ret[i].path)) { // 下拉菜单
      const subPara = {
        selectFilter: '*',
        // eslint-disable-next-line quotes
        whereFilter: "parent_id=" + ret[i].menu_id + " order by display_order ASC"
      }
      // var subRet = await whereRouterAsync(subPara)
      // ret[i].children = subRet
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
    if (!(ret[i].path === null || ret[i].path === '')) {
      const temp = {
        path: ret[i].path,
        name: ret[i].name,
        meta: { title: ret[i].title },
        // redirect: ret[i].redirect,
        component: () => import(ret[i].component)
        // component: (resolve) => require([`${ret[i].component}`], resolve)
      }
      tempRouter.push(temp)
    }
  }
  routes[routes.length - 1].children = tempRouter
  return routes
}

const _UnRegisteredRouter = async function () {
  var ret = await getUnregisteredRouterAsync()
  const tempRouter = []
  for (var i = 0; i < ret.length; i++) {
    if (!(ret[i].path === null || ret[i].path === '')) {
      const temp = {
        path: ret[i].path,
        name: ret[i].name,
        meta: { title: ret[i].title },
        // redirect: ret[i].redirect,
        // component: () => import(ret[i].component)
        component: (resolve) => require([`${ret[i].component}`], resolve)
      }
      tempRouter.push(temp)
    }
  }
  return tempRouter
  // routes[routes.length - 1].children = tempRouter
  // return routes
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
  _UnRegisteredRouter
}
