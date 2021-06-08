/*
 * @Author: your name
 * @Date: 2021-03-03 15:10:51
 * @LastEditTime: 2021-06-08 14:34:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\api\appConfig.js
 */

import appConfig from '@/../public/WebConfigure/config/config.js'
import defaultConfig from '@/api/config/defaultConfig.js'

var getConfigForKey = function (key) {
  return appConfig[key] !== undefined ? appConfig[key] : defaultConfig[key]
}

export default getConfigForKey
