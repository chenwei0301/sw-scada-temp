/*
 * @Author: your name
 * @Date: 2021-07-06 14:26:24
 * @LastEditTime: 2021-07-07 11:53:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\internal\components-Element.js
 */
export default [
  {
    htmlType: 'el-button',
    title: 'el-button',
    label: 'Button按钮',
    icon: require('@/assets/Element/el-button.png'),
    property: {
      size: '', // '' medium / small / mini
      default: true,
      plain: false,
      round: false,
      circle: false,
      type: '', // primary / success / warning / danger / info / text
      loading: false,
      disabled: false,
      icon: '',
      autofocus: false
    },
    style: {
      w: 98,
      h: 40
    }
  },
  {
    htmlType: 'el-image',
    title: 'el-image',
    label: 'Image图片',
    icon: require('@/assets/Element/el-image.png'),
    property: {},
    style: {
      w: 100,
      h: 100
    }
  },
  {
    htmlType: 'el-input',
    title: 'el-input',
    label: 'Input输入框',
    icon: require('@/assets/Element/el-input.png'),
    property: {
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
      autofocus: false
    },
    style: {
      w: 180,
      h: 42
    }
  }

]
