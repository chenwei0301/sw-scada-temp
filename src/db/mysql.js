/*
 * @Author: your name
 * @Date: 2021-05-13 10:14:59
 * @LastEditTime: 2021-05-18 10:03:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\db\mysql.js
 */

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
var query = function (sql, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, function (qerr, vals, fields) {
        // 释放连接
        // conn.release();
        pool.releaseConnection(conn);
        // 事件驱动回调
        callback(qerr, vals, fields);
      });
    }
  });
};

// 向外暴露方法
module.exports = {
  pool,
  query
}
