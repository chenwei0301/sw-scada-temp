/*
 * @Author: your name
 * @Date: 2021-07-02 09:07:35
 * @LastEditTime: 2021-07-26 17:19:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\draggable\design.js
 */
import proElButtonApi from '@/api/draggable/property_elButton'

const compOnDelete = function (obj) {
  const comps = obj.editableTabs[obj.tabIndex].edrawComponents
  for (var i = comps.length - 1; i >= 0; i--) {
    if (comps[i].active) {
      obj.editableTabs[obj.tabIndex].edrawComponents.splice(i, 1)
    }
  }
}
const compOnMove = function (obj, moveType) {
  switch (moveType) {
    case 'up': {
      --obj.designActItem.style.y
      break
    }
    case 'down': {
      ++obj.designActItem.style.y
      break
    }
    case 'left': {
      --obj.designActItem.style.x
      break
    }
    case 'right': {
      ++obj.designActItem.style.x
      break
    }
  }
}

const itemProperty = function (obj, e) {
  return new Promise((resolve, reject) => {
    const comData = e.dataTransfer.getData('comData')
    if (comData === '') {
      reject(new Error())
    }
    var item = JSON.parse(comData)
    // 设置位置属性等
    item.style.x = e.layerX // layerX相对于父元素的定位
    item.style.y = e.layerY
    // property
    const {
      w,
      h,
      background,
      color,
      border,
      fontSize,
      fontFamily,
      fontStyle,
      x,
      y,
      customCss,
      zIndex
    } = item.style
    var _style = {
      w: w || 100,
      h: h || 100,
      y: y,
      x: x,
      color: color || '',
      border: border || '',
      fontSize: fontSize || 14,
      fontFamily: fontFamily || 'auto',
      fontStyle: fontStyle || 'normal',
      background: background || '',
      customCss: customCss || '',
      zIndex: zIndex || 1
    }
    item.active = false
    item.style = _style
    item.name = setItemName(obj.editableTabs[obj.tabIndex].edrawComponents, item.htmlType)
    resolve(item)
  })
}

// 控件唯一名称设置
const setItemName = function (comps, itemType) {
  const count = comps.filter(comp => comp.htmlType === itemType).length
  return itemType + (count + 1)
}

const handleDesignTabsEdit = function (obj, targetName, action) {
  // console.log(targetName, action)
  if (action === 'add') {
    const tabLength = obj.editableTabs.length
    const newTabName = tabLength + 1 + ''
    const json = {
      title: 'Untitled-' + newTabName,
      name: newTabName,
      designConfings: {
        designId: newTabName,
        Name: 'Untitled-' + newTabName,
        Size: {
          x: 800,
          y: 600
        },
        PanelBack: {
          type: 'default',
          backgroundUrl: '',
          backgroundColor: ''
        },
        ActiveLayer: '11111111'
      },
      activeIndex: -1,
      edrawComponents: []
    }
    obj.editableTabs.push(json)
    obj.editableTabsValue = newTabName
  } else if (action === 'remove') {
    const tabs = obj.editableTabs
    let activeName = obj.editableTabsValue;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
            // this.tabIndex = tabs.length < index ? index - 1 : tabs.length - 1
          }
        }
      })
    }
    obj.editableTabs = tabs.filter(tab => tab.name !== targetName);
    obj.editableTabsValue = activeName
  }
}

const reSetDesignConfig = function (obj, v) {
  if (v.Property === 'x') {
    obj.editableTabs[obj.tabIndex].designConfings.Size.x = v.Value
  } else if (v.Property === 'y') {
    obj.editableTabs[obj.tabIndex].designConfings.Size.y = v.Value
  }
}

const backColorChange = function (obj, v) {
  // if (v.Value === null) {
  //   obj.editableTabs[obj.tabIndex].designConfings.PanelBack.backgroundColor = ''
  // } else {
  //   obj.editableTabs[obj.tabIndex].designConfings.PanelBack.backgroundColor = v.Value
  // }
  obj.editableTabs[obj.tabIndex].designConfings.PanelBack.backgroundColor = v.Value || ''
}
const backUrlChange = function (obj, v) {
  obj.editableTabs[obj.tabIndex].designConfings.PanelBack.backgroundUrl = v.Value || ''
}
const backTypeChange = function (obj, v) {
  obj.editableTabs[obj.tabIndex].designConfings.PanelBack.type = v.Value || ''
}
const activeLayerChange = function (obj, v) {
  obj.editableTabs[obj.tabIndex].designConfings.ActiveLayer = v.Value
}

const designNameChange = function (obj, v) {
  obj.editableTabs[obj.tabIndex].designConfings.Name = v.Value
  obj.editableTabs[obj.tabIndex].title = v.Value
}

const designConfigChange = function (obj, v) {
  console.log('designConfigChange:', v)
  switch (v.Property) {
    case 'x': {
      reSetDesignConfig(obj, v)
      break
    }
    case 'y': {
      reSetDesignConfig(obj, v)
      break
    }
    case 'type': {
      backTypeChange(obj, v)
      break
    }
    case 'backgroundColor': {
      backColorChange(obj, v)
      break
    }
    case 'backgroundUrl': {
      backUrlChange(obj, v)
      break
    }
    case 'Name': {
      designNameChange(obj, v)
      break
    }
    case 'ActiveLayer': {
      activeLayerChange(obj, v)
      break
    }
  }
}

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

const getPropertyListDependHtmltype = function (obj) {
  let propertyList = []
  switch (obj.htmlType) {
    case 'el-button': {
      propertyList = proElButtonApi.getPropertyList(obj)
      break
    }
    case 'el-image': {
      break
    }
    case 'el-input': {
      break
    }
    case 'el-input-number': {
      break
    }
  }
  return propertyList
}

const getPicSrc = function (src) {
  let picSrc = ''
  // const arr = src.split('\\')
  // const sPox = arr.indexOf('WebConfigure')
  // if (sPox > -1) {
  //   for (var i = sPox; i < arr.length; i++) {
  //     picSrc += '/' + arr[i]
  //   }
  // }
  const arr = src.split('\\WebConfigure')
  if (arr.length > 1) {
    picSrc = '/WebConfigure' + arr[1].replace(/\\/g, '/')
  }
  return picSrc
}
export default {
  compOnDelete,
  compOnMove,
  itemProperty,
  handleDesignTabsEdit,
  designConfigChange,
  getPropertyList,
  getPropertyListDependHtmltype,
  getPicSrc
}
