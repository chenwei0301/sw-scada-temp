/*
 * @Author: your name
 * @Date: 2021-07-06 14:26:24
 * @LastEditTime: 2021-07-27 15:42:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\internal\components-Element.js
 */
// const vdrProperty = {
//   // 防止停用 以避免在外部点击时解除活动状态
//   preventDeactivation: false,
//   // 组件不可拖动
//   draggable: true,
//   // 组件不可调整大小
//   resizable: true,
//   // 允许本机浏览器的拖动行为
//   enableNativeDrag: false,
//   // z-index
//   // zIndex: 0,
//   // 水平、垂直、both可拖动 x，y或both
//   axis: 'both'
// }
const COMPSTATUSDEV = 'developement'
const COMPSTATUSPRO = 'production'

export {
  COMPSTATUSDEV,
  COMPSTATUSPRO
}

export default [
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-button',
    name: '',
    title: 'el-button',
    icon: 'assets/Element/el-button.png',
    property: {
      styleType: 'default',
      type: '', // primary / success / warning / danger / info / text
      loading: false,
      disabled: false,
      src: '',
      autofocus: false,
      visible: true
    },
    style: {
      w: 98,
      h: 40,
      x: 0,
      y: 0,
      customCss: '',
      zIndex: 1
    }
    // vdrProperty: vdrProperty
  },
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-image',
    name: '',
    title: 'el-image',
    icon: 'assets/Element/el-image.png',
    property: {
      src: '',
      fit: 'fill', // ['fill', 'contain', 'cover', 'none', 'scale-down']
      alt: '',
      placeholder: true,
      error: false,
      visible: true
    },
    style: {
      w: 100,
      h: 100,
      x: 0,
      y: 0,
      customCss: '',
      zIndex: 1
    }
    // vdrProperty: vdrProperty
  },
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-input',
    name: '',
    title: 'el-input',
    icon: 'assets/Element/el-input.png',
    property: {
      // size: '',
      type: 'text',
      placeholder: '',
      value: '',
      disabled: false,
      clearable: false,
      showPassword: false,
      showWordLimit: false,
      minlength: 0,
      maxlength: 20,
      resize: 'both',
      autofocus: false,
      visible: true
    },
    style: {
      w: 180,
      h: 42,
      x: 0,
      y: 0,
      customCss: '',
      zIndex: 1
    }
    // vdrProperty: vdrProperty
  },
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-input-number',
    name: '',
    title: 'el-input-number',
    icon: 'assets/Element/el-input-number.png',
    property: {
      disabled: false,
      min: 0,
      max: 0,
      step: 1,
      stepStrictly: false,
      precision: 1,
      controls: true,
      controlsPosition: 'right', // right
      label: '',
      placeholder: '',
      visible: true
    },
    style: {
      w: 140,
      h: 40,
      x: 0,
      y: 0,
      customCss: '',
      zIndex: 1
    }
    // vdrProperty: vdrProperty
  }

]
