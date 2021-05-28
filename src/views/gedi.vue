<!--
 * @Author: your name
 * @Date: 2021-05-26 09:09:39
 * @LastEditTime: 2021-05-28 08:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\gedi.vue
-->
<template>
  <div id="gedi">
    <!-- <vue-draggable-resizable :active.sync="active" class="vdr1">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable> -->
    <!-- 顶部功能区域 -->
    <div class="topFunc">
      <div class="topFunc-right">
        <i-button type="text" @click="importVue">导入</i-button>
        <i-button type="text" @click="exportVue">导出</i-button>
        <i-button type="text" @click="funcTest">funcTest</i-button>
      </div>
    </div>

    <Designer ref="designer"
              id="designer"
              :editorOptions="editorOptions"
              :content="content">

      <!-- 左边组件列表 -->
      <template #left>
        <ExplorerView id="d" title="组件" :components="components"></ExplorerView>
      </template>

      <!-- 右边属性列表 -->
      <template #right>
        <PanelView id="childPanelView" title="组件选项" :groups="groups1"></PanelView>
        <PanelView id="pagePanelView" title="页面选项" :groups="groups2"></PanelView>
        <PanelView id="pagePanelView2" title="页面选项2" :groups="groups2"></PanelView>
      </template>

    </Designer>
  </div>
</template>

<script>
import '@/plugins/view-design'
// import Designer from '@/plugins/vuc-designer'
import Vuc from 'vuc-designer'
import 'vuc-designer/dist/styles/vuc.css'
import configs from '@/configs'
import FileSaver from 'file-saver';
import { templateContent } from '@/views/template.js'

const Designer = Vuc.Designer
Designer.use(configs);

const explorerComponents = [
  {
    id: '2',
    title: '基础表单',
    children: [
      {
        id: '2-1',
        title: '基础表单',
        node: `<Card dis-hover :bordered="false" style="margin-bottom: 30px;">
                    <Row>
                      <i-col :xs="{span:24,offset:0}" :xs="{span:20,offset:2}" :md="{span:16,offset:4}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                        <i-form :model="formData" style="min-height: 100px" :label-width="100" label-position="right">
                          <form-item label="输入框">
                              <i-input></i-input>
                          </form-item>
                          <form-item>
                            <i-button>保存</i-button>
                          </form-item>
                        </i-form>
                      </i-col>
                    </Row>
                  </Card>`
      },
      {
        id: '2-2',
        title: '输入框',
        node: `<form-item label="输入框">
                <i-input></i-input>
              </form-item>`
      },
      {
        id: '2-3',
        title: '下拉框',
        node: `<form-item label="下拉框">
                <i-select>
                  <i-option value="1">选项1</i-option>
                  <i-option value="2">选项2</i-option>
                </i-select>
              </form-item>`
      },
      {
        id: '2-4',
        title: '单选框',
        node: `<form-item label="单项框">
                <RadioGroup>
                    <Radio label="1">选项1</Radio>
                    <Radio label="2">选项2</Radio>
                </RadioGroup>
              </form-item>`
      },
      {
        id: '2-5',
        title: '复选框',
        node: `<form-item label="复选框">
                <CheckboxGroup>
                    <Checkbox label="1">选项1</Checkbox>
                    <Checkbox label="2">选项2</Checkbox>
                </CheckboxGroup>
              </form-item>`
      },
      {
        id: '2-6',
        title: '按钮',
        node: `<form-item>
              <i-button>按钮</i-button>
            </form-item>`
      }
    ]
  },
  {
    id: '1',
    title: '高级表单',
    children: [
      {
        id: '1-0',
        title: '高级表单',
        node: `<i-form :model="formData" style="height: 100%" :label-width="100" label-position="right">
                    <Card title="基础信息" dis-hover :bordered="false" style="margin-bottom: 30px;">
                      <Row style="min-height: 20px;" :gutter="12" type="flex">
                        <i-col :span="12">
                          <form-item label="输入框">
                            <i-input></i-input>
                          </form-item>
                        </i-col>
                      </Row>
                    </Card>
                  </i-form>`
      },
      {
        id: '1-1',
        title: '卡片',
        node: `<Card title="基础信息" dis-hover :bordered="false" style="margin-bottom: 30px;">
                      <Row :gutter="12" type="flex">
                        <i-col :span="12">
                          <form-item label="输入框">
                            <i-input></i-input>
                          </form-item>
                        </i-col>
                      </Row>
                    </Card>`
      },
      {
        id: '1-2',
        title: '输入框',
        node: `<i-col :span="12">
                    <form-item label="输入框">
                      <i-input></i-input>
                    </form-item>
                  </i-col>`
      },
      {
        id: '1-3',
        title: '下拉框',
        node: `<i-col :span="12">
                    <form-item label="下拉框">
                      <i-select>
                        <i-option value="1">选项1</i-option>
                        <i-option value="2">选项2</i-option>
                      </i-select>
                    </form-item>
                  </i-col>`
      },
      {
        id: '1-4',
        title: '单选框',
        node: `<i-col :span="12">
                    <form-item label="单项框">
                      <RadioGroup>
                          <Radio label="1">选项1</Radio>
                          <Radio label="2">选项2</Radio>
                      </RadioGroup>
                    </form-item>
                  </i-col>`
      },
      {
        id: '1-5',
        title: '复选框',
        node: `<i-col :span="12">
                    <form-item label="复选框">
                      <CheckboxGroup>
                          <Checkbox label="1">选项1</Checkbox>
                          <Checkbox label="2">选项2</Checkbox>
                      </CheckboxGroup>
                    </form-item>
                  </i-col>`
      },
      {
        id: '1-6',
        title: '按钮',
        node: `<i-col :span="24">
                    <i-button>按钮</i-button>
                  </i-col>`
      },
      {
        id: '1-7',
        title: '测试组件',
        node: `<vue-draggable-resizable style="background:#004400">
               </vue-draggable-resizable>`
      }
    ]
  }
]

export default {
  name: 'gedi',
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {
    msg: {
      type: String,
      default: '11111'
    }
    // ...
  },
  // 存放 数据
  data () {
    return {
      active: false,
      title: 'template',
      editorOptions: {
        wrapperStyle: {
          // padding: '0px',
          background: '#f7f7f7'
        },
        beforeSelectNode (node) {
          return !node.isText();
        }
      },
      content: templateContent,
      components: explorerComponents,
      groups1: [
        {
          title: '组合选项',
          panels: ['ComboPanel']
        },
        {
          title: '选项',
          panels: ['TextPanel', 'PropsPanel', 'OptionEditorPanel']
        },
        {
          title: '事件',
          panels: ['EventPanel']
        },
        {
          title: '指令',
          panels: ['DirectivePanel']
        },
        {
          title: '样式',
          panels: ['StylePanel']
        }
      ],
      groups2: [
        {
          title: 'data',
          panels: ['DataPanel']
        },
        {
          title: 'computed',
          panels: ['ComputedPanel']
        },
        {
          title: 'watch',
          panels: ['WatchPanel']
        },
        {
          title: 'methods',
          panels: ['MethodPanel']
        }
      ]
    };
  },
  // 计算 属性
  computed: {},
  // 存放 方法
  methods: {
    importVue () {
      const designer = this.$refs.designer;
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = function () {
        const reader = new FileReader();

        reader.onload = () => {
          console.log(reader.result)
          designer.setVueContent(reader.result);
        };
        reader.readAsText(this.files[0]);
      };
      input.click();
    },
    exportVue () {
      const content = this.$refs.designer.getVueContent();
      FileSaver.saveAs('data:text/plain;charset=utf-8,' + encodeURIComponent(content), 'Untitled.vue');
    },
    funcTest () {
      const $designer = this.$refs
      console.log($designer)
    }
  },
  // 监听 属性
  watch: {},
  // 存放 过滤器
  filters: {},
  // 自定义 私有指令
  directives: {},
  // 存放 子组件
  components: Object.assign({ Designer }, Designer.getAllView()),
  /*  生命周期函数  */
  // 创建期间
  beforeCreate () {},
  created () {},
  beforeMount () {},
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
<style scoped lang="scss">
#gedi{
  width: 100%;
  height: 100%;
  background: lightblue;
  #designer{
    background-color: #ffffff;
    height: calc(100% - 33px);
    .app-wrapper{
      padding: 0px;
    }
  }
  .topFunc{
    text-align: center;
    border-top: 1px solid #dcdee2;
    display: flex;
    .topFunc-right{
      flex: 1;
      width: 100%;
    }
  }
}
</style>
