<!--
 * @Author: your name
 * @Date: 2021-06-24 14:53:13
 * @LastEditTime: 2021-07-05 11:21:24
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

      <pane min-size="5" size='15' >
        <Toolbox class="Fields-Toolbox"
          />
      </pane>

      <pane min-size="50" size='70' class="pane-design">
        <!-- <Tabs></Tabs> -->
        <el-tabs v-model="editableTabsValue" type="card" closable
        @edit="handleTabsEdit"
        >
          <el-tab-pane
            :key="item.name"
            v-for="(item) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            <Design
            :designConfings="designConfings"
            :edrawComps="edrawComponents"
            @dragComp="dragCurrentComp"
            @selectComp="selectComp"
            />
          </el-tab-pane>
        </el-tabs>

      </pane>

      <pane min-size="5" size='15' >
        <Property/>
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
import Tabs from '@/components/Draggable_Fields/Tabs'
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
      title: 'Draggable_Fields',
      dblClickSplitter: false,
      firstSplitter: false,
      // 画布属性
      designConfings: {
        width: 800,
        height: 600,
        backgroundUrl: '',
        backgroundColor: ''
      },
      edrawComponents: [], // 画布组件列表

      editableTabsValue: '1',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  // 计算 属性
  computed: {},
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
      console.log('centerReady', e)
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
      this.edrawComponents.push(item)
    },

    handleClick (tab, event) {
      console.log(tab, event)
    },

    handleTabsEdit (targetName, action) {
      if (action === 'add') {
        const newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        const tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
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
    Tabs,
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
}
.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}
.pane-design{
  display: block;
  // height: 200px;
  overflow: auto;
}
.custom-theme{
  // overflow: hidden;
  // height: 600px;
  min-height: 500px;
  max-height: 940px;
}
</style>
