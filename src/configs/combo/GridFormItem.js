/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:48:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\combo\GridFormItem.js
 */
const template = `<i-col key="col">
    <form-item key="formItem">
      <type.input key="input" allowChildren="true"/>
    </form-item>
   </i-col>`;

export default {
  id: 'GridFormItem',
  name: '表单项',
  template,
  configs () {
    return [
      {
        node: 'col',
        mode: 'prop',
        props: {
          name: 'span',
          label: '栅格'
        }
      },
      {
        node: 'formItem',
        mode: 'prop',
        props: {
          name: 'prop',
          label: '字段名'
        },
        on: {
          'on-change' (combo, data, vucAst) {
            const input = combo.nodeMap.input;
            const model = input.closest('i-form').getDynamicAttr('model');
            let expr = '';
            if (data.value) {
              expr = [model, data.value].join('.');
            }
            input.setDirective({
              name: 'model',
              value: expr
            });

            vucAst.addChildData(model, {
              id: data.value,
              name: '',
              code: 'null'
            });
          }
        }
      },
      {
        node: 'input',
        mode: 'prop',
        props: {
          name: 'size',
          label: '尺寸'
        }
      },
      {
        node: 'input',
        mode: 'optionEditor'
      }
    ];
  }
};
