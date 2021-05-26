/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:47:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\combo\BaseForm.js
 */
const template = `
<Card key="card">
  <Row key="row">
    <i-col key="col">
      <i-form key="form" dragover="true"/>
    </i-col>
  </Row>
</Card>`;

export default {
  id: 'BaseForm',
  name: '基础表单',
  template,
  configs () {
    return [
      {
        node: 'form',
        mode: 'prop',
        props: {
          name: 'model',
          label: '数据对象'
        },
        on: {
          'on-change' (combo, data, vucAst) {

          }
        }
      }
    ];
  }
};
