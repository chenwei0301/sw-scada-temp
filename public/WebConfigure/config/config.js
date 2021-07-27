/*
 * @Author: your name
 * @Date: 2021-06-07 17:29:04
 * @LastEditTime: 2021-07-27 09:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\public\WebConfigure\config\config.js
 */
export default {
  appTitle: 'SW-HMI-IDE V1.0',
  isDist: 0,
  isRedu: 0,
  ip: '127.0.0.1',
  // mysql(本地数据库)
  // mysql: {
  //   host: '127.0.0.1',
  //   port: '3306',
  //   user: 'root',
  //   password: '123456',
  //   database: 'swrtdb'
  // }
  // mysql(config (服务器数据库))
  mysql: {
    host: '192.168.1.98',
    port: '3306',
    user: 'root',
    password: 'sunwin',
    database: 'swrtdb'
  }
}
