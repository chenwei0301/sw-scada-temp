<!--
 * @Author: your name
 * @Date: 2021-06-22 14:52:01
 * @LastEditTime: 2021-06-22 17:59:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\components\Draggable\Draggable.vue
-->
<template>

    <splitpanes style="height: 100%"  class="default-theme" horizontal>

      <!-- <pane style="height: 60px"> -->
      <pane :style="{ height: draggableTopHeight + 'px' }">
        <DraggableTop :msg='123'></DraggableTop>
      </pane>

      <!-- <pane style="height:calc(100% - 90px)"> -->
      <pane :style="{height:draggableCenterHeight}">
        <splitpanes
          :dbl-click-splitter='dblClickSplitter'
          :first-splitter='firstSplitter'
          @resize='centerResize($event)'
          @pane-maximize='centerPaneMaximize($event)'
          @pane-click='centerPaneClick($event)'
          @ready='centerReady($event)'
          @splitter-click='centerSplitterClick($event)'
          >

        <pane min-size="5" size='10' >2
        </pane>

        <pane min-size="60" size='80'>3
        </pane>

        <pane min-size="5" size='10'>4
        </pane>

        </splitpanes>
      </pane>

      <!-- <pane style="height: 30px"> -->
      <pane :style="{ height: draggableBottomHeight + 'px' }">
        <DraggableBottom></DraggableBottom>
      </pane>

    </splitpanes>

</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import DraggableTop from '@/components/Draggable/Draggable_Top'
import DraggableBottom from '@/components/Draggable/Draggable_Bottom'

export default {
  name: 'draggable',
  data () {
    return {
      // top height
      draggableTopHeight: 60,
      // bottom height
      draggableBottomHeight: 30,
      dblClickSplitter: false,
      firstSplitter: false
    }
  },
  computed: {
    // center height
    draggableCenterHeight: function () {
      return 'calc(100% - ' + (this.draggableTopHeight + this.draggableBottomHeight) + 'px)'
    }
  },
  components: {
    Splitpanes,
    Pane,
    DraggableTop,
    DraggableBottom
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
.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

</style>
