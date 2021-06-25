<!--
 * @Author: your name
 * @Date: 2021-06-23 14:22:11
 * @LastEditTime: 2021-06-25 14:03:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings EditDraggable_Container.vue
 * @FilePath: \sw_scada_temp\src\components\Draggable\Draggable_Container.vue
-->
<template>
  <!---->
  <el-container id='Drag-container'>

    <el-header :width= "headerHeight + 'px'">
      <DraggableHeader></DraggableHeader>
    </el-header>

    <el-container>
          <el-aside :width= "asideWidth + 'px'">
            <div class="sw-design">
              <ul class="sw-jd-feature">
                <a @click="change('fields')">
                  <li :class="{ active: current === 'fields' }">设计</li>
                </a>

                <a @click="change('datasource')">
                  <li :class="{ active: current === 'datasource' }">数据源</li>
                </a>

                <a @click="change('listeners')">
                  <li :class="{ active: current === 'listeners' }">监听</li>
                </a>

                <a @click="change('metadata')">
                  <li :class="{ active: current === 'metadata' }">元数据</li>
                </a>

                <a @click="change('dataPoint')">
                  <li :class="{ active: current === 'dataPoint' }">数据点</li>
                </a>

              </ul>
            </div>
          </el-aside>

      <el-main>
        <DraggableFields v-show="current === 'fields'"></DraggableFields>
        <DraggableDatasource v-show="current === 'datasource'"></DraggableDatasource>
        <DraggableListeners v-show="current === 'listeners'"></DraggableListeners>
        <DraggableMetadata v-show="current === 'metadata'"></DraggableMetadata>
        <DataPoint v-show="current === 'dataPoint'"></DataPoint>
      </el-main>
    </el-container>

<!--
    <el-footer :height= "footerHeight + 'px'">
      <DraggableFooter></DraggableFooter>
    </el-footer>
-->
  </el-container>
</template>

<script>
import DraggableHeader from '@/components/Draggable/Draggable_Header'
// import DraggableFooter from '@/components/Draggable/Draggable_Footer'
import DraggableFields from '@/components/Draggable_Fields/Index'
import DraggableDatasource from '@/components/Draggable_Datasource/Index'
import DraggableListeners from '@/components/Draggable_Listeners/Index'
import DraggableMetadata from '@/components/Draggable_Metadata/Index'
import DataPoint from '@/components/DataPoint/Index'

export default {
  name: 'Draggable_Container',
  data () {
    return {
      asideWidth: 60,
      headerHeight: 50,
      footerHeight: 30,
      current: 'dataPoint'
    }
  },
  computed: {
    draggableCenterHeight: function () {
      return 'calc(100% - ' + (this.headerHeight + this.footerHeight) + 'px)'
    }
  },
  components: {
    DraggableHeader,
    // DraggableFooter,
    DraggableFields,
    DraggableDatasource,
    DraggableListeners,
    DraggableMetadata,
    DataPoint
  },
  mixins: '',
  methods: {
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
       background-color: rgb(48, 65, 86);
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
          font-size: 12px;
        //  border: 1px solid #B3C0D1;
          &.active {
            color: rgb(64, 158, 255);
            background-color: #263445;
         }
       }
     }
   }
  }
  .el-header, .el-footer {
    // background-color: #B3C0D1;
    text-align: center;
    padding: 0;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0;
  }
}

</style>
