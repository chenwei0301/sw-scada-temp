<!--
 * @Author: willChen
 * @Date: 2021-02-24 16:49:48
 * @LastEditTime: 2021-03-04 15:48:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeFooterBarList\HomeFooterBarList.vue
-->
<template>
  <div id="bar-list" v-clickoutside="outSideClose">
    <!--  tabBar 工具栏 -->
    <ul class="bar-list-tool">
    <!--  tabBarTool 一级工具栏 -->
      <li v-for="(item, index) in tabBarList" :key="index" :class="{liSted:stedBarToolId===item.id}">
        <img :src="formatSrc(item)" :title="item.text" @click="tabBarClick(item)">
        <!--  tabBarToolSub 二级弹出工具栏 -->
        <ul class="bar-list-tool-popup" v-if="stedBarToolId===item.id">
          <li v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="tabBarSubClick(subItem)">
          {{subItem.text}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import tabBarList from '@/api/tabBarList.js'
import { TABBARTYPE_MAINCONTENT, TABBARTYPE_TOOL_PRINT, TABBARTYPE_TOOL_HELP, TABBARTYPE_TOOL_PUSH, TABBARTYPE_TOOL_ACTIVE } from '@/api/tabBarBtnType.js'
export default {
  vueName: 'HomeFooterBarList',
  data () {
    return {
      imgsrc: require('../../assets/image/setUser.png'),
      tabBarList: [],
      stedBarToolId: '',
      hasPushAlert: true,
      hasLink: true,
      hasTransfer: true
    };
  },
  directives: {
    clickoutside: {
      bind (el, binding, vnode) {
        function documentHandler (e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }

        function KeyUp (e) {
          if (e.keyCode === 27) {
            if (binding.expression) {
              binding.value(e)
            }
          }
        }
        el.__vueClickOutSize__ = documentHandler
        el.__vueKeyup__ = KeyUp

        document.addEventListener('keyup', KeyUp)
        document.addEventListener('click', documentHandler)
      },
      unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutSize__)
        delete el.__vueClickOutSize__

        document.removeEventListener('keyup', el.__vueKeyup__)
        delete el.__vueKeyup__
      }
    }
  },

  methods: {

    // 工具栏外点击 二级弹出工具栏隐藏
    outSideClose () {
      this.stedBarToolId = ''
    },

    // 组件初始化执行函数
    componentInit () {
      this.tabBarList = tabBarList
    },

    // 获取路由参数并设置属性
    initRouterparams () {
      const query = this.$route.query
      if (query.staName !== undefined) {
        this.staName = query.staName
      }
    },

    // 返回barTool src
    formatSrc (item) {
      if (item.type === TABBARTYPE_TOOL_ACTIVE) {
        if (item.id === 'transfer' && this.hasTransfer) {
          return require('../../assets/image/' + item.activeSrc)
        }
        if (item.id === 'link' && this.hasLink) {
          return require('../../assets/image/' + item.activeSrc)
        }
      } else if (item.type === TABBARTYPE_TOOL_PUSH) {
        if (item.id === 'pushAlert' && this.hasPushAlert) {
          return require('../../assets/image/' + item.activeSrc)
        }
      }
      return require('../../assets/image/' + item.defaultSrc)
    },

    // tabBarTool 一级工具栏按钮点击
    tabBarClick (item) {
      // 重复点击 隐藏二级工具栏 否则显示
      this.stedBarToolId = this.stedBarToolId === item.id ? '' : item.id
      switch (item.type) {
        case TABBARTYPE_MAINCONTENT:
          console.log(TABBARTYPE_MAINCONTENT)
          if (!item.popup) {
            this.routerToHomeMain({ path: item.path, id: item.id, text: item.text })
          }
          break;

        case TABBARTYPE_TOOL_PRINT:
          console.log(TABBARTYPE_TOOL_PRINT)
          break;

        case TABBARTYPE_TOOL_HELP:
          console.log(TABBARTYPE_TOOL_HELP)
          break;

        case TABBARTYPE_TOOL_PUSH:
          console.log(TABBARTYPE_TOOL_PUSH)
          break;

        case TABBARTYPE_TOOL_ACTIVE:
          console.log(TABBARTYPE_TOOL_ACTIVE)
          if (!item.popup) {
            this.routerToHomeMain({ path: item.path, id: item.id, text: item.text })
          }
          break;

        default:
          break;
      }
    },

    // tabBarToolSub 二级弹出按钮点击
    tabBarSubClick (item) {
      this.$router.push({ path: item.path, query: { id: item.id, text: item.text } })
      this.stedBarToolId = ''
    },

    // 判断工具栏按钮类型 进行跳转
    routerToHomeMain (params) {
      const path = params.path
      delete params.path
      this.$router.push({ path: path, query: params })
    }
  },
  beforeCreate () {},
  created () {
    this.componentInit()
    this.initRouterparams()
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
};
</script>

<style lang="scss" scoped>
#bar-list {
  height: 40px;
  margin: 0 10px;
  display: flex;
  .bar-list-tool {
    li {
      display: inline-block;
      height: 100%;
      margin: 0 5px;
      cursor: pointer;
      position: relative;
      .bar-list-tool-popup {
        display: block;
        position: absolute;
        left: -5px;
        bottom: 40px;
        li {
          color: #7ecef4;
          line-height: 30px;
          font-size: 12px;
          width: 80px;
          padding-left: 10px;
          background: linear-gradient(#323c4b, #2e2b2b);
        }
        li:hover {
          background: linear-gradient(#2e353b, #534040);
        }
      }
    }
    li:hover {
      background: #4c6171;
    }
    .liSted {
      background: #111f29;
    }
  }
}
</style>
