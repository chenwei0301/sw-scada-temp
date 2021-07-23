/*
 * @Author: your name
 * @Date: 2021-07-02 09:07:35
 * @LastEditTime: 2021-07-14 10:34:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\design\design.js
 */

const itemProperty = function (obj, e) {
  return new Promise((resolve, reject) => {
    const comData = e.dataTransfer.getData('comData')
    if (comData === '') {
      reject(new Error())
    }
    var item = JSON.parse(comData)
    // 设置位置属性等
    item.style.x = e.layerX // layerX相对于父元素的定位
    item.style.y = e.layerY
    // property
    const {
      w,
      h,
      borderRadius,
      rotate,
      borderWidth,
      background,
      isApplyShadow,
      bgiBool,
      color,
      border,
      opacity,
      x,
      y
    } = item.style
    var _style = {
      w: w || 100,
      h: h || 100,
      position: 'absolute',
      y: y,
      x: x,
      drag_start_x: 0, // 拖拽相对
      drag_start_y: 0,
      color: color || '',
      border: border || '',
      borderWidth: borderWidth || 0,
      background: background || '',
      borderRadius: borderRadius || 0,
      rotate: rotate || 0,
      isApplyShadow: (isApplyShadow === undefined || isApplyShadow === null) ? 'true' : 'false',
      bgiBool: bgiBool || false, // 材质
      opacity: opacity || 1,
      isFixed: 'false'
    }
    item.active = false
    item.style = _style
    item.name = setItemName(obj.editableTabs[obj.tabIndex].edrawComponents, item.htmlType)
    resolve(item)
  })
}
// 控件唯一名称设置
const setItemName = function (comps, itemType) {
  const count = comps.filter(comp => comp.htmlType === itemType).length
  return itemType + (count + 1)
}
export {
  itemProperty
}
