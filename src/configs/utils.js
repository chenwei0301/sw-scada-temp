/*
 * @Author: your name
 * @Date: 2021-05-26 10:39:00
 * @LastEditTime: 2021-05-26 10:39:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\configs\utils.js
 */
export function createItems (str, split) {
  return str.split(split || ',').map(line => {
    const columns = line.trim().split(':');
    return {
      value: columns[0],
      label: columns[1] || columns[0]
    }
  })
}

export function getSizeEditor () {
  return {
    name: '选项',
    type: 'radio-group',
    props: {
      items: [{
        value: 'large',
        label: '大'
      }, {
        value: 'default',
        label: '中'
      }, {
        value: 'small',
        label: '小'
      }]
    }
  }
}
