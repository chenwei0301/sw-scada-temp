/*
 * @Author: your name
 * @Date: 2021-05-13 10:14:59
 * @LastEditTime: 2021-05-20 09:19:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\db\mysql.js
 */
import Vue from 'vue'
// import { IP } from '@/api/ip.js'
const mysql = require('mysql');

// database config (服务器数据库)
const pool = mysql.createPool({
  host: '192.168.1.98',
  port: '3306',
  user: 'root',
  password: 'sunwin',
  database: 'swrtms'
});

// database config (本地测试数据库)
// const pool = mysql.createPool({
//   host: IP,
//   port: '3306',
//   user: 'root',
//   password: '123456',
//   database: 'swrtms'
// });

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
        var _vals = JSON.parse(JSON.stringify(vals))
        callback(qerr, _vals, fields);
      });
    }
  });
};

// // 向外暴露方法
// module.exports = {
//   pool,
//   query
// }

var queryAsync = function (sql) {
  return new Promise((resolve, reject) => {
    querySync(sql, function (err, vals, fields) {
      if (err) {
        reject(new Error(err))
      }
      if (vals) {
        // resolve(JSON.parse(JSON.stringify(vals)))
        resolve(vals)
      }
    })
  }
  )
}

// 向外暴露方法
// export {
//   querySync,
//   queryAsync
// }

Vue.prototype.$querySync = querySync
Vue.prototype.$queryAsync = queryAsync
