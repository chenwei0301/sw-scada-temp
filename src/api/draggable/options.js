/*
 * @Author: your name
 * @Date: 2021-07-16 08:49:16
 * @LastEditTime: 2021-08-03 10:07:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\draggable\options.js
 */

const optionsBoolean = [
  { value: 'true' },
  { value: 'false' }
]

const optionsStyleType = [
  { value: 'default' },
  { value: 'plain' },
  { value: 'round' },
  { value: 'circle' }
]

const optionsSize = [
  { value: '' },
  { value: 'mini' },
  { value: 'small' },
  { value: 'medium' },
  { value: 'large' }
]

const optionsType = [
  { value: '' },
  { value: 'primary' },
  { value: 'success' },
  { value: 'warning' },
  { value: 'danger' },
  { value: 'info' },
  { value: 'text' }
]

const optionsControlsPosition = [
  { value: '' },
  { value: 'right' }
]

const optionsFontFamily = [
  { value: 'auto', label: '' },
  { value: 'Serif', label: '' },
  { value: 'Sans-serif', label: '' },
  { value: 'Monospace', label: '' },
  { value: 'Cursive', label: '' },
  { value: 'Fantasy ', label: '' }
]

const optionsFontStyle = [
  { value: 'normal', label: '默认值' },
  { value: 'italic', label: '斜体' },
  { value: 'oblique', label: '倾斜' },
  { value: 'inherit', label: '继承' }
]

const optionsTextType = [
  { value: 'text' },
  { value: 'textarea' }
]

const InputNumberProperty = ['w', 'h', 'y', 'x', 'zIndex', 'fontSize', 'rows', 'minlength', 'maxlength', 'min', 'max']

const InputNumberPropertyUNINT = ['step', 'precision']

const ColorPickerProperty = ['background', 'color']

export {
  optionsBoolean,
  optionsStyleType,
  optionsSize,
  optionsType,
  optionsFontFamily,
  optionsFontStyle,
  optionsTextType,
  optionsControlsPosition,
  InputNumberProperty,
  InputNumberPropertyUNINT,
  ColorPickerProperty
}
