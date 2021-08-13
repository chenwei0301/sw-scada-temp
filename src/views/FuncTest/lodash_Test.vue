<!--
 * @Author: your name
 * @Date: 2021-08-09 10:26:38
 * @LastEditTime: 2021-08-09 17:54:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\FuncTest\lodash_Test.vue
-->

<template>
  <!-- <div class="about" v-contextmenu='el=>contextmenus(el)' > -->
  <div class="about" >
  <vue-context-menu :contextMenuData="contextMenuData"
        @home="home"
        @deletedata="deletedata"></vue-context-menu>

    <h1 @contextmenu="showMenu">This is an lodash_Test page</h1>
    <el-button type="primary" @click="lodash_Test">lodash_Test</el-button>
    <el-button type="primary" >contextmenu</el-button>

    <hr>
    <json-viewer
      :value="jsonData"
      :expand-depth=5
      copyable
      boxed
      sort></json-viewer>

  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer'
export default {
  name: 'lodashTest',
  data () {
    return {
      jsonData: {
        total: 25,
        limit: 10,
        skip: 0,
        links: {
          previous: undefined,
          next: function () {}
        }
      },
      contextMenuData: {
        menuName: 'demo',
        // 菜单显示的位置
        axis: {
          x: null,
          y: null
        },
        // 菜单选项
        menulists: [{
          fnHandler: 'home', // 绑定事件
          icoName: 'fa fa-home fa-fw', // icon图标
          btnName: '回到主页' // 菜单名称
        }, {
          fnHandler: 'deletedata',
          icoName: 'fa fa-minus-square-o  fa-fw',
          btnName: '删除布局'
        }]
      }
    }
  },
  watch: {

  },
  computed: {

  },
  filters: {

  },
  methods: {
    lodash_Test: function () {
      // console.info(this._.chunk(['a', 'b', 'c', 'd'], 3))
      console.info(this._.compact([0, 1, false, 2, '', 3, null, undefined, NaN]))
    },
    contextmenus (el) {
    // 获取触发右键菜单的dom；与action中的el一致
      // 注意：一般情况下你不应该向contextmenus方法传递动态参数，因为它不会自动更新，正确的做法是向触发右键菜单的dom上绑定dataset，然后在这里通过el.dataset来获取动态的值
      console.log(el)

      // 你可以在这里通过 return null 来禁用右键菜单
      // return null

      return [
        {
          text: '剪切',
          subText: 'Ctrl + X',
          action: () => {
            console.log('你点击了剪切')
          }
        },
        {
          text: '复制',
          subText: 'Ctrl + C',
          action: el => {
            console.log('你点击了复制')
            console.log(el)
          }
        }
      ]
    },

    showMenu () {
      event.preventDefault()
      var x = event.clientX
      var y = event.clientY
      // Get the current location
      this.contextMenuData.axis = {
        x, y
      }
    },
    home () {
      alert('主页')
    },
    deletedata () {
      console.log('delete!')
    }

  },
  components: {
    JsonViewer
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
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.about {
  background-color: #fff;
}
.about .contextmenu-active {
  background-color: #f5f5f5;
}

</style>
