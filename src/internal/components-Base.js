/*
* @Author: your name
* @Date: 2021-07-05 14:44:58
 * @LastEditTime: 2021-08-10 14:19:02
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \sw_scada_temp\src\internal\components-Base.js
*/
const COMPSTATUSDESIGN = 'design'
const COMPSTATUSRUN = 'running'
const COMPTYPEBASCI = 'Basic'

export {
  COMPSTATUSDESIGN,
  COMPSTATUSRUN
}
export default [
  {
    compStatus: COMPSTATUSDESIGN,
    compType: COMPTYPEBASCI,
    htmlType: 'button',
    name: '',
    title: 'button',
    icon: 'assets/Base/pushbutton.png',
    style: {
      w: 80,
      h: 30,
      x: 0,
      y: 0,
      color: '',
      background: '',
      src: '',
      fontSize: 14,
      fontFamily: 'auto',
      fontStyle: 'normal',
      autofocus: '',
      border: '',
      disabled: false,
      visible: true,
      zIndex: 1,
      customCss: ''
    },
    event: {
      click: 'function () {}'
    }
  }
  // {
  //   htmlType: 'img',
  //   title: 'img',
  //   label: '图片',
  //   icon: 'assets/Base/imagegallery.png',
  //   style: {
  //     w: 50,
  //     h: 50
  //   }
  // },
  // {
  //   htmlType: 'span',
  //   title: 'span',
  //   label: '文本',
  //   icon: 'assets/Base/textfield.png',
  //   style: {
  //     w: 100,
  //     h: 30
  //   }
  // },
  // {
  //   htmlType: 'input',
  //   title: 'input',
  //   label: '输入',
  //   icon: 'assets/Base/textfield.png',
  //   style: {
  //     w: 183,
  //     h: 24
  //   }
  // },
  // {
  //   htmlType: 'textarea',
  //   title: 'textarea',
  //   label: '文本框',
  //   icon: 'assets/Base/textedit.png',
  //   style: {
  //     w: 182,
  //     h: 44
  //   },
  //   class: {
  //     width: '100%',
  //     height: '100%'
  //   }
  // }
]
