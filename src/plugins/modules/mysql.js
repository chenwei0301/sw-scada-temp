/*
 * @Author: your name
 * @Date: 2021-05-13 10:14:59
 * @LastEditTime: 2021-06-08 15:02:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\db\mysql.js
 */
import Vue from 'vue'
import appConfig from '@/api/appConfig'

const mysql = require('mysql');
const pool = mysql.createPool(appConfig('mysql'))

// 导出查询相关
var querySync = function (sql, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, function (qerr, vals, fields) {
        // 释放连接
        pool.releaseConnection(conn);
        // 事件驱动回调
        // var _vals = JSON.parse(JSON.stringify(vals))
        callback(qerr, vals, fields);
      })
    }
  })
}

var queryAsync = function (sql) {
  console.log('queryAsync-sql:', sql)
  return new Promise((resolve, reject) => {
    querySync(sql, function (err, vals, fields) {
      if (err) {
        reject(err.message)
        //   reject(new Error(err))
      }
      if (vals) {
        resolve(JSON.parse(JSON.stringify(vals)))
      }
    })
  }
  )
}

Vue.prototype.$querySync = querySync
Vue.prototype.$queryAsync = queryAsync

// 向外暴露方法
export {
  querySync,
  queryAsync
}
