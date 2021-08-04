/* eslint-disable camelcase */
/*
 * @Author: your name
 * @Date: 2021-07-14 10:34:32
 * @LastEditTime: 2021-08-03 10:00:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\draggable\property.js
 */

const options_Style = ['x', 'y', 'w', 'h', 'background', 'color', 'fontSize', 'zIndex', 'customCss', 'fontStyle', 'fontFamily']
const options_Property = ['size', 'styleType', 'type', 'loading', 'disabled', 'src', 'autofocus', 'visible', 'fit', 'alt', 'placeholder', 'error', 'prefixIcon', 'suffixIcon', 'value', 'rows', 'clearable', 'showPassword', 'showWordLimit', 'minlength', 'maxlength', 'stepStrictly', 'controls', 'min', 'max', 'step', 'precision', 'controlsPosition']
const options_VdrProperty = ['preventDeactivation', 'draggable', 'resizable', 'enableNativeDrag', 'axis']
const options_Base = ['title']
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
  } else if (options_Base.indexOf(vPro) >= 0) {
    obj.designActItem[vPro] = v.Value
  }
}

const booleanCheck = function (params) {
  if (typeof (params) === 'boolean') {
    return params
  } else {
    if (params === 'true' || params === 'TRUE') {
      return true
    } else if (params === 'false' || params === 'FALSE') {
      return false
    }
  }
}

const getPicSrc = function (src) {
  let picSrc = ''
  // const arr = src.split('\\')
  // const sPox = arr.indexOf('WebConfigure')
  // if (sPox > -1) {
  //   for (var i = sPox; i < arr.length; i++) {
  //     picSrc += '/' + arr[i]
  //   }
  // }
  const arr = src.split('\\WebConfigure')
  if (arr.length > 1) {
    picSrc = '/WebConfigure' + arr[1].replace(/\\/g, '/')
  }
  return picSrc
}

const setSrc = function (obj, func) {
  obj.$electron.remote.dialog
    .showOpenDialog({
      title: '选择图片',
      defaultPath: obj.$path.resolve(__dirname),
      properties: ['openFile', 'createDirectory'],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'svg'] }
      ]
    }).then(result => {
    // console.log(result)
      const temp = Object.values(result.filePaths)
      // console.log(temp)
      if (temp.length > 0) {
        const picSrc = getPicSrc(temp[0])
        func(picSrc)
      }
    }).catch(err => {
      console.log(err)
    })
}
export default {
  standardConfigChange,
  booleanCheck,
  getPicSrc,
  setSrc
}
