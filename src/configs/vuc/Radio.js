/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:47:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\vuc\Radio.js
 */
import { getSizeEditor } from '../utils';

export default {
  id: 'Radio',
  name: '单选框',
  eventTypes: [],
  type: ['input', 'radio'],
  props: {
    value: {
      label: '默认值',
      editors: 'text'
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor()
    },
    disabled: {
      label: '禁用',
      editors: 'boolean'
    }
  },

  vucEditorOption: {
    onBeforeSelectNode: false
  },

  vucProxyOption: {
    textProxy: false
  }
};
