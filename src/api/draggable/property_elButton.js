/*
 * @Author: your name
 * @Date: 2021-07-20 10:52:07
 * @LastEditTime: 2021-07-21 15:15:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\draggable\property_elButton.js
 */
const addSubProperty = function (id, obj) {
  const arr = []
  const arrKey = Object.keys(obj)
  for (var i = 0; i < arrKey.length; i++) {
    const element = obj[arrKey[i]]
    if (typeof (element) !== 'object') {
      arr.push({ id: id + '-' + String(i), Property: arrKey[i], Value: String(element) })
    }
  }
  return arr
}

const getPropertyList = function (obj) {
  const list = []
  const arrKey = Object.keys(obj)
  for (var i = 0; i < arrKey.length; i++) {
    const element = arrKey[i]
    if (typeof (obj[element]) === 'object') {
      list.push({ id: String(i), Property: element, Value: '', children: addSubProperty(String(i), obj[element]) })
    } else {
      list.push({ id: String(i), Property: element, Value: String(obj[element]) })
    }
  }
  return list
}

export default {
  getPropertyList
}
