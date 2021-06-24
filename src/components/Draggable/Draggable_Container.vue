<!--
 * @Author: your name
 * @Date: 2021-06-23 14:22:11
 * @LastEditTime: 2021-06-24 15:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings EditDraggable_Container.vue
 * @FilePath: \sw_scada_temp\src\components\Draggable\Draggable_Container.vue
-->
<template>

  <el-container id='Drag-container'>
    <el-header :width= "headerHeight + 'px'">Header</el-header>
    <el-container>
          <el-aside :width= "asideWidth + 'px'">
            <div class="sw-design">
              <ul class="sw-jd-feature">
                <a @click="change('fields')">
                  <li :class="{ active: current === 'fields' }">fields</li>
                </a>

                <a @click="change('datasource')">
                  <li :class="{ active: current === 'datasource' }">datasource</li>
                </a>

                <a @click="change('listeners')">
                  <li :class="{ active: current === 'listeners' }">listeners</li>
                </a>

                <a @click="change('metadata')">
                  <li :class="{ active: current === 'metadata' }">metadata</li>
                </a>
              </ul>
            </div>
          </el-aside>

      <el-main>
        <DraggableFields v-show="current === 'fields'"></DraggableFields>
        <DraggableDatasource v-show="current === 'datasource'"></DraggableDatasource>
        <DraggableListeners v-show="current === 'listeners'"></DraggableListeners>
        <DraggableMetadata v-show="current === 'metadata'"></DraggableMetadata>
      </el-main>
    </el-container>

    <el-footer :width= "footerHeight + 'px'">Footer</el-footer>
  </el-container>
</template>

<script>
// import { Splitpanes, Pane } from 'splitpanes'
// import 'splitpanes/dist/splitpanes.css'
import DraggableFields from '@/components/Draggable_Fields/index'
import DraggableDatasource from '@/components/Draggable_Datasource/index'
import DraggableListeners from '@/components/Draggable_Listeners/index'
import DraggableMetadata from '@/components/Draggable_Metadata/index'

export default {
  name: 'draggable',
  data () {
    return {
      asideWidth: 100,
      headerHeight: 60,
      footerHeight: 30,
      // top height
      draggableTopHeight: 60,
      // bottom height
      draggableBottomHeight: 30,
      dblClickSplitter: false,
      firstSplitter: false,
      current: 'fields'
    }
  },
  computed: {
    // center height
    draggableCenterHeight: function () {
      return 'calc(100% - ' + (this.headerHeight + this.footerHeight) + 'px)'
      // return '100%'
    }
  },
  components: {
    // Splitpanes,
    // Pane,
    DraggableFields,
    DraggableDatasource,
    DraggableListeners,
    DraggableMetadata
  },
  mixins: '',
  methods: {
    topStyle () {
      return '{' + 'height:' + this.draggableTopHeight + 'px}'
    },
    centerResize (e) {
      console.log('centerResize', e)
    },
    centerPaneMaximize (e) {
      console.log('centerPaneMaximize', e)
    },
    centerPaneClick (e) {
      console.log('centerPaneClick', e)
    },
    centerReady (e) {
      console.log('centerReady', e)
    },
    centerSplitterClick (e) {
      console.log('centerSplitterClick', e)
    },
    change (value) {
      console.log(value)
      this.current = value
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {}
}
</script>

<style lang="scss" scoped>
#Drag-container{
  height: 100%;
  .sw-design{
    > ul {
      &.sw-jd-feature {
       background-color: rgb(71, 145, 235);
       list-style: none;
       margin: 0;
       padding: 0;
       color: rgb(191, 203, 217);
       overflow: hidden;
        a {
         cursor: pointer;
        }
        li {
          text-align: center;
          display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
         height: 60px;
         border: 1px solid #B3C0D1;
         &.active {
            color: #000000;
           background-color: #6c9dd8;
         }
       }
     }
   }
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
  }
}

</style>
