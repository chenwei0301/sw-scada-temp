/*
 * @Author: your name
 * @Date: 2021-07-06 14:26:24
 * @LastEditTime: 2021-07-21 14:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\internal\components-Element.js
 */
const vdrProperty = {
  // 防止停用 以避免在外部点击时解除活动状态
  preventDeactivation: false,
  // 组件不可拖动
  draggable: true,
  // 组件不可调整大小
  resizable: true,
  // 允许本机浏览器的拖动行为
  enableNativeDrag: false,
  // z-index
  zIndex: 0,
  // 水平、垂直、both可拖动 x，y或both
  axis: 'both'
}
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
    title: 'el-button',
    label: 'Button按钮',
    icon: require('@/assets/Element/el-button.png'),
    property: {
      // size: '', // '' medium / small / mini
      styleType: 'default',
      type: '', // primary / success / warning / danger / info / text
      loading: false,
      disabled: false,
      icon: '',
      autofocus: false,
      visible: true
    },
    vdrProperty: vdrProperty,
    style: {
      w: 98,
      h: 40,
      x: 0,
      y: 0,
      zIndex: 1,
      customCss: ''
    }
  },
  // {
  //   htmlType: 'el-button',
  //   title: 'el-button',
  //   label: 'Button按钮',
  //   icon: require('@/assets/Element/el-button.png'),
  //   property: {
  //     size: '', // '' medium / small / mini
  //     default: true,
  //     plain: false,
  //     round: false,
  //     circle: false,
  //     type: '', // primary / success / warning / danger / info / text
  //     loading: false,
  //     disabled: false,
  //     icon: '',
  //     autofocus: false
  //   },
  //   vdrProperty: vdrProperty,
  //   style: {
  //     w: 98,
  //     h: 40
  //   }
  // },
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-image',
    title: 'el-image',
    label: 'Image图片',
    icon: require('@/assets/Element/el-image.png'),
    property: {
      // size: '',
      src: require('@/assets/Element/el-image.png'),
      fit: 'fill', // ['fill', 'contain', 'cover', 'none', 'scale-down']
      alt: '',
      visible: true
    },
    vdrProperty: vdrProperty,
    style: {
      w: 100,
      h: 100,
      x: 0,
      y: 0,
      zIndex: 1,
      customCss: ''
    }
  },
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-input',
    title: 'el-input',
    label: 'Input输入框',
    icon: require('@/assets/Element/el-input.png'),
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
    vdrProperty: vdrProperty,
    style: {
      w: 180,
      h: 42,
      x: 0,
      y: 0,
      zIndex: 1,
      customCss: ''
    }
  },
  {
    compStatus: COMPSTATUSDEV,
    htmlType: 'el-input-number',
    title: 'el-input-number',
    label: 'InputNumber计数器',
    icon: require('@/assets/Element/el-input-number.png'),
    property: {
      // size: '', // large, small
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
    vdrProperty: vdrProperty,
    style: {
      w: 140,
      h: 40,
      x: 0,
      y: 0,
      zIndex: 1,
      customCss: ''
    }
  }

]
