<!--
 * @Author: your name
 * @Date: 2021-07-13 17:16:58
 * @LastEditTime: 2021-07-20 09:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Property_Design.vue
-->

<template>
  <div class="Property_Design">
    <el-table
      :data="PropertyList"
      stripe
      border
      lazy
      default-expand-all
      empty-text=" "
      row-key="id"
      height="600"
      max-height="800"
      style="width: 100%"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :row-class-name="tableRowClassName"
      @row-click="rowDetail"
      >
      <el-table-column
        prop="Property"
        label="Property"
        width="160">
      </el-table-column>

      <el-table-column
        prop=""
        label=""
        width="20">
      </el-table-column>

      <el-table-column
        prop="Value"
        label="Value"
        width="130"
        >
        <template scope="scope">
          <span
            v-if='spanProperty.indexOf(scope.row.Property)>=0'
            size="small"
            >{{scope.row.Value}}
          </span>

          <el-select
            v-else-if='selectProperty.indexOf(scope.row.Property)>=0' v-model="scope.row.Value"
            placeholder=""
            size="small"
            @change="designConfigChange(scope.row)"
            >
            <el-option v-for="item in backGroundType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
            </el-option>
          </el-select>

          <el-input-number
            :style="{width:'100%'}"
            v-else-if='InputNumberProperty.indexOf(scope.row.Property)>=0'
            v-model="scope.row.Value"
            @change="designConfigChange(scope.row)"
            size="small"
            label=""
            :min="0"
            controls-position="right"
            >
          </el-input-number>

            <!-- <el-cascader v-else-if="scope.row.Property==='ActiveLayer'"
              v-model="scope.row.Value"
              :options="layerOption"
              :props='{ multiple: true }'
              @change="designConfigChange(scope.row)"
              >
              </el-cascader> -->

          <div v-else-if="scope.row.Property==='backgroundColor'">
          <el-color-picker
            v-model="scope.row.Value"
            show-alpha
            size='mini'
            @change="designConfigChange(scope.row)"
            :style="{top:'7px'}"
            >
          </el-color-picker>
          <span>{{scope.row.Value}}</span>
          </div>
<!--
          <el-color-picker
            v-else-if="scope.row.Property==='backgroundColor'"
            v-model="scope.row.Value"
            show-alpha
            size='mini'
            @change="designConfigChange(scope.row)"
            :style="{top:'7px'}"
            >
          </el-color-picker>
-->

          <el-input
            v-else
            v-model="scope.row.Value"
            @change="designConfigChange(scope.row)"
            size="small"
            @dblclick.native = "setBackUrl"
            >
          </el-input>

        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import DesignApi from '@/api/draggable/design'

export default {
  // name: 'Property_Design',

  props: {
    property: Object
    // ...
  },
  // 存放 数据
  data () {
    return {
      hiddenProperty: ['designId', 'ActiveLayer', 'backgroundUrl', 'backgroundColor'],
      backGroundType: [
        { value: 'picture', label: '图片' },
        { value: 'groundColor', label: '背景色' }
      ],
      spanProperty: ['Size', 'PanelBack', 'designId'],
      InputNumberProperty: ['x', 'y'],
      selectProperty: ['type'],
      layerOption: [{
        value: '1',
        label: '1层'
      }, {
        value: '2',
        label: '2层'
      }, {
        value: '3',
        label: '3层'
      }, {
        value: '4',
        label: '4层'
      }, {
        value: '5',
        label: '5层'
      }, {
        value: '6',
        label: '6层'
      }, {
        value: '7',
        label: '7层'
      }, {
        value: '8',
        label: '8层'
      }],
      list: []
    }
  },
  // 计算 属性
  computed: {
    PropertyList: function () {
      var temp = DesignApi.getPropertyList(this.property)
      temp.forEach(element => {
        element.visible = this.hiddenProperty.indexOf(element.Property) >= 0 ? 0 : 1
      })
      // return temp.filter((element) => {
      //   return element.visible === 1
      // })
      return temp
    }
  },
  // 存放 方法
  methods: {
    tableRowClassName () {
      return 'design-row'
    },
    rowDetail: function (row) {
      // console.log('row:', row)
    },
    designConfigChange (v) {
      this.$emit('designConfigChange', v)
    },
    setBackUrl: function (v) {
      console.log('setBackUrl:', v)
      this.$electron.remote.dialog
        .showOpenDialog({
          title: '选择图片',
          defaultPath: this.$path.resolve(__dirname),
          properties: ['openFile', 'createDirectory'],
          filters: [
            { name: 'Images', extensions: ['jpg', 'png'] }
          ]
        }).then(result => {
          console.log(result)
          const temp = Object.values(result.filePaths)
          console.log(temp)

          // const list = this.PropertyList.filter((element) => { return element.Property === 'backgroundUrl' })
          // console.log(list)
        }).catch(err => {
          console.log(err)
        })
    }
  },
  // 监听 属性
  watch: {
  },
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {
  },
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {
  },
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
<style lang="scss">
.Property_Design{
  width: 100%;
  height: 100%;
  .einClass {
    width: 100%;
  }
  .design-row {
    // color: rgba(61, 59, 59, 0.377);
    font-size: 12px;
  }
  .el-table .standard-row > td{
    padding: 1px;
  }
  .el-table td, .el-table th{
    padding: 1px;
  }
  .el-table .cell, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    padding: 0;
  }
  .el-table__indent {
    padding: 0;
  }
}
</style>
