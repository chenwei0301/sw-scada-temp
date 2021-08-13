/*
 * @Author: your name
 * @Date: 2021-07-06 14:26:24
 * @LastEditTime: 2021-08-03 10:12:13
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
const COMPSTATUSDESIGN = 'design'
const COMPSTATUSRUN = 'running'
const COMPTYPEELEMENT = 'Element'
export {
  COMPSTATUSDESIGN,
  COMPSTATUSRUN
}

export default [
  {
    compStatus: COMPSTATUSDESIGN,
    compType: COMPTYPEELEMENT,
    htmlType: 'el-button',
    name: '',
    title: 'el-button',
    icon: 'assets/Element/el-button.png',
    style: {
      w: 98,
      h: 40,
      x: 0,
      y: 0,
      color: '',
      background: '',
      fontSize: 14,
      fontFamily: 'auto',
      fontStyle: 'normal',
      customCss: '',
      zIndex: 1
    },
    property: {
      styleType: 'default',
      type: '', // primary / success / warning / danger / info / text
      loading: false,
      disabled: false,
      src: '',
      autofocus: false,
      visible: true
    }
    // vdrProperty: vdrProperty
  },
  {
    compStatus: COMPSTATUSDESIGN,
    compType: COMPTYPEELEMENT,
    htmlType: 'el-image',
    name: '',
    title: 'el-image',
    icon: 'assets/Element/el-image.png',
    style: {
      w: 100,
      h: 100,
      x: 0,
      y: 0,
      customCss: '',
      zIndex: 1
    },
    property: {
      src: '',
      fit: 'fill', // ['fill', 'contain', 'cover', 'none', 'scale-down']
      // alt: '',
      placeholder: true,
      error: false,
      visible: true
    }
    // vdrProperty: vdrProperty
  },
  {
    compStatus: COMPSTATUSDESIGN,
    compType: COMPTYPEELEMENT,
    htmlType: 'el-input',
    name: '',
    title: 'el-input',
    icon: 'assets/Element/el-input.png',
    style: {
      w: 180,
      h: 42,
      x: 0,
      y: 0,
      // color: '',
      // background: '',
      fontSize: 14,
      // fontFamily: 'auto',
      // fontStyle: 'normal',
      customCss: '',
      zIndex: 1
    },
    property: {
      type: 'text', // text/textarea
      // rows: 1,
      autosize: { minRows: 2, maxRows: 4 },
      value: '',
      // size: '', // 只在type!="textarea"时有效 medium/small/min
      placeholder: '', // 输入框占位文本
      disabled: false,
      clearable: false, // 可清空
      showPassword: false, // 是否显示切换密码图
      showWordLimit: false,
      // minlength: 0,
      maxlength: 20,
      // resize: 'both', // none, both, horizontal, vertical
      autofocus: false,
      visible: true,
      prefixIcon: '',
      suffixIcon: ''
    }
    // vdrProperty: vdrProperty
  },
  {
    compStatus: COMPSTATUSDESIGN,
    compType: COMPTYPEELEMENT,
    htmlType: 'el-input-number',
    name: '',
    title: 'el-input-number',
    icon: 'assets/Element/el-input-number.png',
    style: {
      w: 140,
      h: 40,
      x: 0,
      y: 0,
      // color: '',
      // background: '',
      fontSize: 14,
      // fontFamily: 'auto',
      // fontStyle: 'normal',
      customCss: '',
      zIndex: 1
    },
    property: {
      value: '',
      disabled: false,
      min: 0,
      max: 0,
      step: 1,
      stepStrictly: false,
      precision: 0,
      controls: true,
      controlsPosition: 'right', // right
      label: '',
      placeholder: '',
      visible: true
    }
    // vdrProperty: vdrProperty
  }

]
