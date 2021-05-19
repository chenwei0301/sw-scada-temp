/*
 * @Author: your name
 * @Date: 2021-05-13 14:47:39
 * @LastEditTime: 2021-05-19 17:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\db\queryFunc.js
 */
import { query } from '@/db/mysql.js'

var queryFunc = function (sql) {
  return new Promise((resolve, reject) => {
    query(sql, function (err, vals, fields) {
      if (err) {
        reject(new Error(err))
      }
      if (vals) {
        resolve(JSON.parse(JSON.stringify(vals)))
      }
    })
  }
  )
}

// 向外暴露方法
export {
  queryFunc
}
