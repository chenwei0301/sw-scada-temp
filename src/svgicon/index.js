/*
 * @Author: your name
 * @Date: 2021-07-02 08:40:09
 * @LastEditTime: 2021-08-09 14:13:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\svgicon\index.js
 */
import SvgIcon from '@/svgicon/index' // svg component

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => {
  return requireContext.keys().map(requireContext)
}
requireAll(req)

export default SvgIcon
