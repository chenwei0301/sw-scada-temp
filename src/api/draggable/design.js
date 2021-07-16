/*
 * @Author: your name
 * @Date: 2021-07-02 09:07:35
 * @LastEditTime: 2021-07-16 17:38:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\design\design.js
 */

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
      borderRadius,
      rotate,
      borderWidth,
      background,
      isApplyShadow,
      bgiBool,
      color,
      border,
      opacity,
      x,
      y
    } = item.style
    var _style = {
      w: w || 100,
      h: h || 100,
      position: 'absolute',
      y: y,
      x: x,
      drag_start_x: 0, // 拖拽相对
      drag_start_y: 0,
      color: color || '',
      border: border || '',
      borderWidth: borderWidth || 0,
      background: background || '',
      borderRadius: borderRadius || 0,
      rotate: rotate || 0,
      isApplyShadow: (isApplyShadow === undefined || isApplyShadow === null) ? 'true' : 'false',
      bgiBool: bgiBool || false, // 材质
      opacity: opacity || 1,
      isFixed: 'false'
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
      // designConfings: _designConfigs,
      designConfings: {
        designId: newTabName,
        Name: 'Untitled-' + newTabName,
        Size: {
          x: 800,
          y: 600
        },
        PanelBack: {
          type: '',
          backgroundUrl: '',
          backgroundColor: ''
        },
        ActiveLayer: '11111111'
        // ActiveLayer: []
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
  obj.editableTabs[obj.tabIndex].designConfings.PanelBack.backgroundColor = v.Value
}

const activeLayerChange = function (obj, v) {
  obj.editableTabs[obj.tabIndex].designConfings.ActiveLayer = v.Value
}

const densignNameChange = function (obj, v) {
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
      break
    }
    case 'backgroundColor': {
      backColorChange(obj, v)
      break
    }
    case 'backgroundUrl': {
      break
    }
    case 'Name': {
      densignNameChange(obj, v)
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

export default {
  itemProperty,
  handleDesignTabsEdit,
  designConfigChange,
  getPropertyList
}
