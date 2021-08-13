<!--
 * @Author: your name
 * @Date: 2021-08-10 09:22:50
 * @LastEditTime: 2021-08-12 09:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Property_Basic.vue
-->

<template>
<div>
    <el-table
      :data="PropertyList"
      stripe
      border
      lazy
      default-expand-all
      empty-text=" "
      row-key="id"
      height="600"
      max-height="1000"
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
            v-else-if="scope.row.Property==='size'"
            v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            @change="standardConfigChange(scope.row)"
            :style="{width:'100%'}"
            >
            <el-option
              v-for="item in options_size"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-else-if="scope.row.Property==='styleType'"
            v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            @change="standardConfigChange(scope.row)"
            :style="{width:'100%'}"
            >
            <el-option
              v-for="item in options_styleType"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-else-if="scope.row.Property==='type'"
            v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            @change="standardConfigChange(scope.row)"
            :style="{width:'100%'}"
            >
            <el-option
              v-for="item in options_type"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-else-if='selectProperty.indexOf(scope.row.Property)>=0' v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            @change="standardConfigChange(scope.row)"
            :style="{width:'100%'}"
            >
            <el-option
              v-for="item in options_Boolean"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-else-if="scope.row.Property==='fontFamily'"
            v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            @change="standardConfigChange(scope.row)"
            :style="{width:'100%'}"
            >
            <el-option
              v-for="item in options_fontFamily"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-else-if="scope.row.Property==='fontStyle'"
            v-model="scope.row.Value"
            placeholder="请选择"
            size="small"
            @change="standardConfigChange(scope.row)"
            :style="{width:'100%'}"
            >
            <el-option
              v-for="item in options_fontStyle"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <el-input-number
            v-else-if='InputNumberProperty.indexOf(scope.row.Property)>=0'
            v-model="scope.row.Value"
            @change="standardConfigChange(scope.row)"
            size="small"
            label=""
            :min="0"
            controls-position="right"
            :style="{width:'100%'}"
            ></el-input-number>

          <div v-else-if='ColorPickerProperty.indexOf(scope.row.Property)>=0'>
            <el-color-picker
              v-model="scope.row.Value"
              show-alpha
              size='mini'
              @change="standardConfigChange(scope.row)"
              :style="{top:'5px'}"
              ></el-color-picker>
            <span :style="{'margin-left':'5px'}">{{scope.row.Value}}</span>
          </div>

          <div v-else-if="scope.row.Property==='border'">
            <span :style="{'margin-left':'5px'}">{{scope.row.Value}}</span>
          </div>

          <el-input
            v-else-if="scope.row.Property==='customCss'"
            v-model="scope.row.Value"
            size="small"
            type="textarea"
            :autosize="{ minRows: 2}"
            @change="standardConfigChange(scope.row)"
            ></el-input>

          <el-input
            v-else-if="scope.row.Property==='src'"
            v-model="scope.row.Value"
            size="small"
            @change="standardConfigChange(scope.row)"
            @dblclick.native = "setSrc"
            ></el-input>

          <el-input
            v-else
            v-model="scope.row.Value"
            size="small"
            @change="standardConfigChange(scope.row)"
            ></el-input>

        </template>
      </el-table-column>

      <el-table-column
        prop="Property"
        label=""
        width="40">
        <template scope="scope">
          <el-button
          :style="{width:'100%',height:'100%'}"
          v-if="scope.row.Property==='border'"
          @click="borderClick(scope.row)"
          ></el-button>
        </template>
      </el-table-column>

    </el-table>

    <SWDialog_Border
      :title="'border边框'"
      ref="SWDialog_Border"
      @standardConfigChange=standardConfigChange
      ></SWDialog_Border>
</div>
</template>

<script>
import DesignApi from '@/api/draggable/design'
import PropertyApi from '@/api/draggable/property'
import { optionsStyleType, optionsBoolean, optionsSize, optionsType, optionsFontFamily, optionsFontStyle, InputNumberProperty, ColorPickerProperty } from '@/api/draggable/options'

export default {
  props: {
    property: Object
    // ...
  },
  // 存放 数据
  data () {
    return {
      options_styleType: optionsStyleType,
      options_Boolean: optionsBoolean,
      options_size: optionsSize,
      options_type: optionsType,
      options_fontFamily: optionsFontFamily,
      options_fontStyle: optionsFontStyle,
      spanProperty: ['htmlType', 'property', 'vdrProperty', 'style', 'active', 'copmStatus', 'compType'],
      selectProperty: ['loading', 'disabled', 'autofocus', 'visible', 'draggable', 'resizable', 'enableNativeDrag', 'axis'],
      InputNumberProperty: InputNumberProperty,
      ColorPickerProperty: ColorPickerProperty
    }
  },
  // 计算 属性
  computed: {
    PropertyList: function () {
      return DesignApi.getPropertyList(this.property)
    }
  },
  // 监听 属性
  watch: {
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
      this.$emit('standardConfigChange', v)
    },

    setSrc: function (v) {
      PropertyApi.setSrc(this, (picSrc) => {
        this.$emit('standardConfigChange', { Property: 'src', Value: picSrc })
      })
    },
    borderClick: function (v) {
      console.log('borderClick:', v)
      this.$refs.SWDialog_Border.setDialogVisible(true)
    }
  },
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: {
    SWDialog_Border: () => import(/* webpackChunkName: "SWDialog_Border" */'@/components/Draggable_Fields/SWDialog_Border')
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
.border-dialog{
  border-radius: 10px;
  .el-dialog__title{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    color: #FFFFFF;
  }
  .el-dialog__header{
    text-align: left;
    padding: 10px;
    //background-color: lightsalmon;
    color: #ffffff;
    background: #333333;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    .el-dialog__headerbtn{
      top: 10px;
      right: 10px;
      .el-dialog__close{
        color: #ffffff;
      }
    }
  }
  .el-dialog__body{
    padding: 15px 20px 15px 15px;
    margin-left: 0px;
    color: #606266;
    font-size: 14px;
  }
  .el-dialog__footer{
    padding: 10px 20px;
    background: #333333;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }
}
</style>
