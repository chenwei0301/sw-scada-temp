/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:45:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\vuc\Option.js
 */
export default {
  id: ['Option', 'i-option'],
  name: '选项',
  eventTypes: [],
  props: {
    value: {
      label: '默认值',
      editors: 'text'
    }
  },

  vucProxyOption: {
    textProxy: false
  },

  vucEditorOption: {
    onBeforeSelectNode: false
  }

};
