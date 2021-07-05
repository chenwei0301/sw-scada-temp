<!--
 * @Author: your name
 * @Date: 2021-06-28 09:09:39
 * @LastEditTime: 2021-07-02 17:29:39
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
      style="width:100%"
      class="vrt"
    >
        <div class="design"
          @drop="drop($event)"
          @dragover="dragover($event)"
          :style="designStyle"
          >

          <!--
          <div v-for="(item, index) in edrawComps"
            @dragstart="dragComp($event, item, 'start', index)"
            @drag="dragComp($event, item, 'drag', index)"
            :key="index"
            :style="{
                    width: item.style.width + 'px',
                    height: item.style.height + 'px',
                    top: item.style.top + 'px',
                    left: item.style.left + 'px',
                    position: item.style.position,
                    borderWidth: item.style.borderWidth + 'px',
                    transform: 'rotate(' + item.style.rotate + 'deg)',
                    'z-index': item.type === 'room' && '-1',
                     background: '#333333'

                }"
            >
          </div>
          -->

          <DragComp  v-for="(item, index) in edrawComps" :key="index" :item='item'></DragComp>
<!--
          <vue-draggable-resizable
            v-for="(item, index) in edrawComps" :key="index"

            class="vdr"
            :active.sync="item.active"
            :grid="[10,10]"
            :x="item.style.x - item.style.w/2"
            :y="item.style.y - item.style.h/2"
            :w="item.style.w"
            :h="item.style.h"
            :min-width="20"
            :min-height="20"
            >
            <button class='comp'>{{item.name}}</button>
          </vue-draggable-resizable>
          -->
        </div>
    </vue-ruler-tool>
  </div>
</template>

<script>
import VueRulerTool from 'vue-ruler-tool'
import DragComp from '@/components/Draggable_comps/DragComp'
export default {
  name: 'Draggable_Fields_Design',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      default: 'Draggable_Fields_Design'
    },
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
      presetLine: [{ type: 'l', site: 10 }, { type: 'v', site: 20 }],
      // ['absolute', 'fixed', 'relative', 'static', 'inherit']
      vrtPosition: 'inherit',
      title: 'Draggable_Fields_Design'
    };
  },
  // 计算 属性
  computed: {
    designWidth: function () {
      const val = this.designConfings.width || 800
      return val
    },
    designHeight: function () {
      const val = this.designConfings.height || 600
      return val
    },
    designBackgroundColor: function () {
      const bgColor = this.designConfings.backgroundColor
      const val = bgColor !== '' ? bgColor : '#F0F0F0'
      return val
    },
    designStyle: function () {
      const style = {
        width: this.designWidth + 'px',
        height: this.designHeight + 'px',
        backgroundColor: this.designBackgroundColor
      }
      return style
    }

  },
  // 存放 方法
  methods: {
    drop (e) {
      console.log('drop:')
      this.$emit('selectComp', e);
    },
    dragover (e) {
      // console.log('dragover:', e)
      e.preventDefault() // 阻止默认不可拖入
    },
    dragComp (event, item, type, index) {
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
    console.log(this.designWidth)
    console.log(this.designStyle)
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
   background: rgb(140, 187, 226);
    .design{
      overflow: hidden;
      border: 1px dashed #5a5858;
      .vdr{
        // background-color: lightcoral;
        background-color: #fff;
        .comp {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>
