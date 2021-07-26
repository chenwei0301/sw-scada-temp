/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-07-14 10:34:32
 * @LastEditTime: 2021-07-22 17:41:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\draggable\property.js
 */

const options_Style = ['x', 'y', 'w', 'h', 'background', 'color', 'fontSize', 'zIndex', 'customCss', 'fontStyle', 'fontFamily']
const options_Property = ['size', 'styleType', 'type', 'loading', 'disabled', 'icon', 'autofocus', 'visible']
const options_VdrProperty = ['preventDeactivation', 'draggable', 'resizable', 'enableNativeDrag', 'axis']
// const options_ColorPicker = ['background', 'color']

const standardConfigChange = function (obj, v) {
  console.log('standardConfigChange-3', v)
  const vPro = v.Property
  if (options_Style.indexOf(vPro) >= 0) {
    obj.designActItem.style[vPro] = v.Value || ''
  } else if (options_Property.indexOf(vPro) >= 0) {
    obj.designActItem.property[vPro] = v.Value
  } else if (options_VdrProperty.indexOf(vPro) >= 0) {
    obj.designActItem.vdrProperty[vPro] = v.Value
  }
}

export default {
  standardConfigChange
}
