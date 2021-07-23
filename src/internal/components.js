/*
 * @Author: your htmlType
 * @Date: 2021-06-28 14:39:07
 * @LastEditTime: 2021-07-06 14:39:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\internal\components.js
 */
import compBase from '@/internal/components-Base.js'
import compElement from '@/internal/components-Element.js'
export default [
  {
    name: 'Base',
    title: '基础组件',
    children: compBase
  },
  {
    name: 'Element',
    title: 'Element组件',
    children: compElement
  }
]
