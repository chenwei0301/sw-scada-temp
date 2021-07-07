<!--
 * @Author: your name
 * @Date: 2021-06-24 14:53:13
 * @LastEditTime: 2021-07-07 17:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Index.vue
-->
<template>
  <div class="Draggable_Fields">
  <!-- -->
    <splitpanes
      class="default-theme custom-theme"
      :dbl-click-splitter='dblClickSplitter'
      :first-splitter='firstSplitter'
      @resize='centerResize($event)'
      @pane-maximize='centerPaneMaximize($event)'
      @pane-click='centerPaneClick($event)'
      @ready='centerReady($event)'
      @splitter-click='centerSplitterClick($event)'
      >

      <pane min-size="5" size='10' class="pane-toolBox" v-if="panelView.Toolbox">
        <Toolbox class="Fields-Toolbox"
          />
      </pane>

      <pane min-size="50" size='65' class="pane-design" v-if="panelView.Design">

        <el-tabs v-model="editableTabsValue"
          type="card"
          editable
          @edit="handleTabsEdit"
          @tab-click="handleClick"
          >
          <el-tab-pane
            :key="index"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            <Design
            :designConfings="editableTabs[tabIndex].designConfings"
            :edrawComps="editableTabs[tabIndex].edrawComponents"
            @dragComp="dragCurrentComp"
            @selectComp="selectComp"
            @compActive=compActive
            />
          </el-tab-pane>
        </el-tabs>

      </pane>

      <pane min-size="1" size='10' class="pane-html" v-if="panelView.Html">
      </pane>
      <pane min-size="5" size='15' class="pane-property" v-if="panelView.Property">
        <Property :item='designActItem'/>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
// import 'splitpanes/dist/splitpanes.css'
import '@/styles/splitpanes.css'
import Toolbox from '@/components/Draggable_Fields/Toolbox'
import Design from '@/components/Draggable_Fields/Design'
// import Tabs from '@/components/Draggable_Fields/Tabs'
import Property from '@/components/Draggable_Fields/Property'
import { itemProperty } from '@/api/draggable/design'
export default {
  name: 'Draggable_Fields',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      default: 'Draggable_Fields 1'
    }
    // ...
  },
  // 创建实例时传递 props。主要作用是方便测试。
  // propsData: {},
  // 存放 数据
  data () {
    return {
      panelView: {
        Toolbox: true,
        Design: true,
        Html: true,
        Property: true

      },
      title: 'Draggable_Fields',
      dblClickSplitter: false,
      firstSplitter: false,

      editableTabsValue: '1',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        designConfings: { // 画布属性
          width: 800,
          height: 600,
          backgroundUrl: '',
          backgroundColor: ''
        },
        edrawComponents: [] // 画布组件列表
      }
      // , {
      //   title: 'Tab 2',
      //   name: '2',
      //   designConfings: { // 画布属性
      //     width: 800,
      //     height: 600,
      //     backgroundUrl: '',
      //     backgroundColor: ''
      //   },
      //   edrawComponents: [] // 画布组件列表
      // }
      ],
      tabIndex: 0,
      designActItem: {}
    }
  },
  // 计算 属性
  computed: {
    // tabIndex: () => {
    //   for (var i = 0; i < this.editableTabs.length; i++) {
    //     if (this.editableTabs[i].name === this.editableTabsValue) {
    //       return i
    //     }
    //   }
    // }
  },
  // 存放 方法
  methods: {
    centerResize (e) {
      console.log('centerResize', e)
    },
    centerPaneMaximize (e) {
      console.log('centerPaneMaximize', e)
    },
    centerPaneClick (e) {
      return false
      // console.log('centerPaneClick', e)
    },
    centerReady (e) {
      // console.log('centerReady', e)
    },
    centerSplitterClick (e) {
      console.log('centerSplitterClick', e)
    },
    dragCurrentComp (event, comp, state, currentIndex) {
      console.log('dragCurrentComp')
    },
    async selectComp (e) {
      e.preventDefault()
      const item = await itemProperty(this, e)
      console.log('await-item:', item)
      this.editableTabs[this.tabIndex].edrawComponents.push(item)
    },

    setItemName (itemType) {
      const comps = this.editableTabs[this.tabIndex].edrawComponents
      const count = comps.filter(comp => comp.htmlType === itemType)
      return itemType + count
    },

    handleClick (tab, event) {
      // console.log(tab, event)
      this.setTabIndex()
    },
    setTabIndex () {
      if (this.editableTabs.length > 0) {
        for (var i = 0; i < this.editableTabs.length; i++) {
          if (this.editableTabs[i].name === this.editableTabsValue) {
            this.tabIndex = i
          }
        }
      } else {
        this.tabIndex = 0
      }
    },

    handleTabsEdit (targetName, action) {
      // console.log(targetName, action)
      if (action === 'add') {
        const tabLength = this.editableTabs.length
        const newTabName = tabLength + 1 + ''
        const json = {
          title: 'Untitled-' + newTabName,
          name: newTabName,
          designConfings: {
            width: 800,
            height: 600,
            backgroundUrl: '',
            backgroundColor: ''
          },
          edrawComponents: []
        }
        this.editableTabs.push(json)
        this.editableTabsValue = newTabName
        this.setTabIndex()
      } else if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          })
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    compActive: function (active, activeItem) {
      // console.log('get3:', activeItem)
      // ... 向toolbox 传控件属性
      if (active) {
        const compIndex = this.getActiveIndex(activeItem)
        if (compIndex >= 0) {
          this.designActItem = this.editableTabs[this.tabIndex].edrawComponents[compIndex]
        } else {
          this.designActItem = {}
        }
      } else {
        this.designActItem = {}
      }
    },
    getActiveIndex (activeItem) {
      for (let i = 0; i < this.editableTabs[this.tabIndex].edrawComponents.length; i++) {
        if (this.editableTabs[this.tabIndex].edrawComponents[i].name === activeItem.name) {
          return i
        }
      }
      return -1
    }

  },
  // 监听 属性
  watch: {},
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {
    Splitpanes,
    Pane,
    Toolbox,
    // Tabs,
    Design,
    Property
  },
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  // 运行期间
  beforeUpdate () {},
  updated () {},
  // 被 keep-alive 缓存的组件激活时调用
  activated () {},
  // 被 keep-alive 缓存的组件停用时调用
  deactivated () {},
  // 销毁时期
  beforeDestroy () {},
  destroyed () {},
  // 当捕获一个来自子孙组件的错误时被调用。
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Draggable_Fields{
  width: 100%;
  height: 100%;
  background: lightblue;
  // .Fields-Toolbox{
  //   height: 400px;
  // }
  .splitpanes__pane {
    box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
  }
  .custom-theme{
    min-height: 500px;
    max-height: 940px;
  }
  //.pane-toolBox{}
  .pane-design{
    display: block;
    overflow: auto;
  }
  //.pane-html{}
  //.pane-property{}
}

</style>
