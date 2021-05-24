/*
 * @Author: your name
 * @Date: 2021-05-21 09:34:07
 * @LastEditTime: 2021-05-21 17:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\db\s_area.js
 */
import tableName from '@/api/db/tableName'
import { querySync, queryAsync } from '@/plugins/mysql'

export async function getAreas (obj, field) {
  const sql = 'select ' + field + ' from ' + tableName.area + ' order by area_id ASC'
  return await queryAsync(sql)
}
export function addAreas (obj, areaId, areaName) {
  // eslint-disable-next-line quotes
  const sql = "INSERT INTO " + tableName.area + " VALUES('" + areaId + "','" + areaName + "')"
  querySync(sql, function (err, vals, fields) {
    if (err) {
      console.log(err.message)
    }
    if (vals) {
      console.log(JSON.parse(JSON.stringify(vals)))
    }
    if (fields) {
      console.log(fields)
    }
  })
}
// export async function getAreas (obj) {
//   const sql = 'select * from ' + tableName.area + ' order by area_id ASC'
//   return await obj.$queryAsync(sql)
// }
// export function addAreas (obj) {
//   var areaId = '410'
//   var areaName = '测试车站'
//   // eslint-disable-next-line quotes
//   const sql = "INSERT INTO s_area VALUES('" + areaId + "','" + areaName + "')"
//   console.log(sql)
//   obj.$querySync(sql, function (err, vals, fields) {
//     if (err) {
//       console.log(err.message)
//     }
//     if (vals) {
//       console.log(JSON.parse(JSON.stringify(vals)))
//     }
//     if (fields) {
//       console.log(fields)
//     }
//   })
// }
