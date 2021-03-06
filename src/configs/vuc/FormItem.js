/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:44:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\vuc\FormItem.js
 */
import _ from 'lodash';

export default {
  id: 'form-item',
  name: '表单项',
  eventTypes: [],
  type: ['container', 'form-item'],
  slots: [{
    slot: 'default',
    name: '内容',
    selector: '.ivu-form-item-content',
    rules: {
      type: /^(input|button|container)$/
    }
  }, {
    slot: 'label',
    name: '标签',
    selector: '.ivu-form-item-label'
  }],
  props: {
    label: {
      label: '标签文本',
      editors: 'text'
      //      onChange(vucNode, value){
      //        alert(value)
      //      }
    },
    prop: {
      label: '字段名',
      editors: 'text',
      onChange (vucNode, value, dynamic) {
        const input = vucNode.findChild('.input');
        if (input) {
          if (value) {
            const model = vucNode.closest('i-form').getDynamicAttr('model');
            input.setDirective('v-model', {
              expression: _.filter([model, value]).join('.')
            });
          } else {
            input.delDirective('v-model');
          }
        }
      }
    },
    labelWidth: {
      label: '标签宽度',
      editors: 'text'
    },
    required: {
      label: '是否必填',
      editors: 'boolean'
    },
    rules: {
      label: '验证规则',
      editors: 'text'
    },
    error: {
      label: '错误信息',
      editors: 'text'
    },
    showMessage: {
      label: '显示校验信息',
      editors: 'text'
    }
  }
};
