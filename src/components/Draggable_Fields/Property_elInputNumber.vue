<!--
 * @Author: your name
 * @Date: 2021-07-12 17:06:39
 * @LastEditTime: 2021-08-03 10:11:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Property_elInputNumber.vue
-->

<template>
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
        prop="Value"
        label="Value"
        width="130">
        <template scope="scope">
          <span
            v-if='spanProperty.indexOf(scope.row.Property)>=0'
            size="small"
            >{{scope.row.Value}}
            </span>

          <el-select
            v-else-if='selectProperty.indexOf(scope.row.Property)>=0' v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            >
            <el-option v-for="item in options_Boolean"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
            </el-option>
          </el-select>
          <el-select
            v-else-if="scope.row.Property==='controlsPosition'" v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            >
            <el-option v-for="item in options_controlsPosition"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
            </el-option>
          </el-select>

          <el-input-number
            v-else-if='InputNumberProperty.indexOf(scope.row.Property)>=0'
            v-model="scope.row.Value"
            @change="standardConfigChange(scope.row)"
            size="small"
            label=""
            controls-position="right"
            >
            </el-input-number>

          <el-input-number
            v-else-if='InputNumberPropertyUNINT.indexOf(scope.row.Property)>=0'
            v-model="scope.row.Value"
            @change="standardConfigChange(scope.row)"
            size="small"
            label=""
            :min="scope.row.Property==='precision'?0:1"
            controls-position="right"
            >
            </el-input-number>

          <el-input
            v-else-if="scope.row.Property==='customCss'"
            v-model="scope.row.Value"
            size="small"
            type="textarea"
            :autosize="{ minRows: 2}"
            @change="standardConfigChange(scope.row)"
            ></el-input>

          <el-input
            v-else
            v-model="scope.row.Value"
            size="small"
            ></el-input>

        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import DesignApi from '@/api/draggable/design'
import { optionsBoolean, optionsSize, optionsFontFamily, optionsFontStyle, optionsTextType, optionsControlsPosition, InputNumberProperty, ColorPickerProperty, InputNumberPropertyUNINT } from '@/api/draggable/options'
export default {
  props: {
    property: Object
    // ...
  },
  // 存放 数据
  data () {
    return {
      options_Boolean: optionsBoolean,
      options_size: optionsSize,
      options_fontFamily: optionsFontFamily,
      options_fontStyle: optionsFontStyle,
      options_textType: optionsTextType,
      options_controlsPosition: optionsControlsPosition,
      spanProperty: ['htmlType', 'property', 'vdrProperty', 'style', 'name', 'active', 'copmStatus'],
      selectProperty: ['disabled', 'stepStrictly', 'controls', 'visible'],
      InputNumberProperty: InputNumberProperty,
      InputNumberPropertyUNINT: InputNumberPropertyUNINT,
      ColorPickerProperty: ColorPickerProperty
    }
  },
  // 计算 属性
  computed: {
    PropertyList: function () {
      return DesignApi.getPropertyList(this.property)
    }
  },
  // 存放 方法
  methods: {
    tableRowClassName () {
      return 'standard-row'
    },

    rowDetail: function (row) {
      // console.log('row:', row)
    },
    standardConfigChange (v) {
      console.log(v)
      this.$emit('standardConfigChange', v)
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
<style  lang="scss">
.standard-row {
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
</style>
