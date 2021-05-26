/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:40:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\index.js
 */
import icons from './Icon'

const vucConfigs = require.context(
  // 其组件目录的相对路径
  './vuc',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

const comboConfigs = require.context(
  // 其组件目录的相对路径
  './combo',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

function getConfigs (configs) {
  return configs.keys().map(fileName => {
    return configs(fileName).default
  })
}

export default {
  install (Designer) {
    getConfigs(vucConfigs).map(Designer.setVucConfig)
    getConfigs(comboConfigs).map(Designer.registerComboTemplate);
    Designer.setConfig('iconEditor', {
      className: 'ivu-icon',
      icons
    })
  }
}
