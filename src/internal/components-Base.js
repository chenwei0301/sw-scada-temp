/*
 * @Author: your name
 * @Date: 2021-07-05 14:44:58
 * @LastEditTime: 2021-07-05 14:48:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\internal\components-Base.js
 */
export default [
  {
    htmlType: 'p',
    title: '',
    label: '段落',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 100,
      h: 25
    }
  },
  {
    htmlType: 'span',
    title: 'text',
    label: '文本',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 100,
      h: 30
    }
  },
  {
    htmlType: 'input',
    title: 'input',
    label: '输入',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 183,
      h: 24
    }
  },
  {
    htmlType: 'textarea',
    title: 'textarea',
    label: '文本框',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 182,
      h: 44
    },
    class: {
      width: '100%',
      height: '100%'
    }
  },
  {
    htmlType: 'select',
    label: '选择',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 100,
      h: 40
    }
  },
  {
    htmlType: 'option',
    label: '选项',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 50,
      h: 20
    }
  },
  {
    htmlType: 'a',
    label: '超链接',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 100,
      h: 30
    }
  },
  {
    htmlType: 'hr',
    label: '分割线',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 100,
      h: 2
    }
  },
  {
    htmlType: 'button',
    label: '按钮',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 80,
      h: 30
    }
  },
  {
    htmlType: 'img',
    label: '图片',
    icon: require('@/assets/icons/24x24.png'),
    group: 'Html',
    style: {
      w: 50,
      h: 50
    }
  }
]
