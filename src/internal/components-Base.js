/*
* @Author: your name
* @Date: 2021-07-05 14:44:58
 * @LastEditTime: 2021-07-06 15:01:46
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \sw_scada_temp\src\internal\components-Base.js
*/
export default [
  {
    htmlType: 'button',
    title: 'button',
    label: '按钮',
    icon: require('@/assets/Base/pushbutton.png'),
    style: {
      w: 80,
      h: 30
    }
  },
  {
    htmlType: 'img',
    title: 'img',
    label: '图片',
    icon: require('@/assets/Base/imagegallery.png'),
    style: {
      w: 50,
      h: 50
    }
  },
  {
    htmlType: 'span',
    title: 'span',
    label: '文本',
    icon: require('@/assets/Base/textfield.png'),
    style: {
      w: 100,
      h: 30
    }
  },
  {
    htmlType: 'input',
    title: 'input',
    label: '输入',
    icon: require('@/assets/Base/textfield.png'),
    style: {
      w: 183,
      h: 24
    }
  },
  {
    htmlType: 'textarea',
    title: 'textarea',
    label: '文本框',
    icon: require('@/assets/Base/textedit.png'),
    style: {
      w: 182,
      h: 44
    },
    class: {
      width: '100%',
      height: '100%'
    }
  }
]
