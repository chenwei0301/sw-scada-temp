<!--
 * @Author: your name
 * @Date: 2021-07-12 17:06:39
 * @LastEditTime: 2021-07-21 09:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Property_Standard.vue
-->

<template>
  <div class="Property_Standard">

    <PropertyElButton
      v-if="checkHtmlType('el-button')"
      :property=property
      @standardConfigChange=standardConfigChange
    >
    </PropertyElButton>

    <PropertyElImage
      v-if="checkHtmlType('el-image')"
      :property=property
      @standardConfigChange=standardConfigChange
    >
    </PropertyElImage>

    <PropertyElInput
      v-if="checkHtmlType('el-input')"
      :property=property
      @standardConfigChange=standardConfigChange
    >
    </PropertyElInput>

    <PropertyElInputNumber
      v-if="checkHtmlType('el-input-number')"
      :property=property
      @standardConfigChange=standardConfigChange
    >
    </PropertyElInputNumber>
  </div>
</template>

<script>
import PropertyElButton from '@/components/Draggable_Fields/Property_elButton'
import PropertyElImage from '@/components/Draggable_Fields/Property_elImage'
import PropertyElInput from '@/components/Draggable_Fields/Property_elInput'
import PropertyElInputNumber from '@/components/Draggable_Fields/Property_elInputNumber'

export default {
  props: {
    property: Object
  },
  // 存放 数据
  data () {
    return {
    }
  },
  // 计算 属性
  computed: {
  },
  // 存放 方法
  methods: {
    checkHtmlType: function (htmlType) {
      return this.property.htmlType === htmlType
    },
    standardConfigChange (v) {
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
    PropertyElButton,
    PropertyElImage,
    PropertyElInput,
    PropertyElInputNumber
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
.Property_Standard{
  width: 100%;
  height: 100%;
}
</style>
