<!--
 * @Author: your name
 * @Date: 2021-06-28 09:09:39
 * @LastEditTime: 2021-07-14 10:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable_Fields\Design.vue
-->
<template>
  <div class="Draggable_Fields_Design">
    <vue-ruler-tool
      :content-layout="{left:0,top:0}"
      :is-scale-revise="true"
      :preset-line="presetLine"
      class="vrt"
    >
        <div class="design"
          @drop="drop($event)"
          @dragover="dragover($event)"
          :style="designStyle"
          >
          <DragComp
          v-for="(item, index) in edrawComps"
          :key="index"
          :item='item'
          class="dragComp"
          @compActive=compActive
          @onResizeStop=onResizeStop
          @onDragStop=onDragStop
            ></DragComp>

        </div>
    </vue-ruler-tool>
  </div>
</template>

<script>
import VueRulerTool from 'vue-ruler-tool'
import DragComp from '@/components/Draggable_comps/DragComp'
export default {
  // name: 'Draggable_Fields_Design',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    designId: String,
    designConfings: Object,
    edrawComps: Array // 绘制组件（图片）列表
    // ...
  },
  // 创建实例时传递 props。主要作用是方便测试。
  // propsData: {},
  // 存放 数据
  data () {
    return {
      active: false,
      presetLine: [{ type: 'l', site: 10 }, { type: 'v', site: 10 }],
      // ['absolute', 'fixed', 'relative', 'static', 'inherit']
      vrtPosition: 'inherit',
      title: 'Draggable_Fields_Design'
    };
  },
  // 计算 属性
  computed: {
    designWidth: function () {
      const val = this.designConfings.Size.x || 800
      return val
    },
    designHeight: function () {
      const val = this.designConfings.Size.y || 600
      return val
    },
    designBackgroundColor: function () {
      const bgColor = this.designConfings.PanelBackground.backgroundColor
      const val = bgColor !== '' ? bgColor : '#F0F0F0'
      return val
    },
    designStyle: function () {
      const style = {
        width: this.designConfings.Size.x + 'px',
        height: this.designConfings.Size.y + 'px',
        backgroundColor: this.designConfings.PanelBackground.backgroundColor
      }
      return style
    }

  },
  // 存放 方法
  methods: {
    drop (e) {
      // console.log('drop:')
      this.$emit('selectComp', e);
    },
    dragover (e) {
      // console.log('dragover:', e)
      e.preventDefault() // 阻止默认不可拖入
    },
    dragComp (event, item, type, index) {
    },
    compActive: function (activeItem, active) {
      this.$emit('compActive', activeItem, active)
    },
    compOnResize: function (activeItem, para) {
      this.$emit('compOnResize', activeItem, para)
    },
    onResizeStop: function (activeItem, para) {
      this.$emit('onResizeStop', activeItem, para)
    },
    compOnDrag: function (activeItem, para) {
      this.$emit('compOnDrag', activeItem, para)
    },
    onDragStop: function (activeItem, para) {
      this.$emit('onDragStop', activeItem, para)
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
    VueRulerTool,
    DragComp
  },
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
  },
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
.Draggable_Fields_Design{
  // width: 100%;
  height: 100%;
  .vrt{
    width: 100%;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) repeat scroll 0% 0% / 10px 10px, rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) repeat scroll 0% 0% / 10px 10px;
    .design{
      position: relative;
      overflow: hidden;
      border: 1px dashed #5a5858;
      .dragComp {
        position: absolute;
      }
    }
  }
}

</style>
