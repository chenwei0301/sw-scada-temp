<!--
 * @Author: your name
 * @Date: 2021-05-19 17:52:36
 * @LastEditTime: 2021-07-21 09:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\views\Edit.vue
-->
<template>
  <div class="funcTest">
    <!-- <h4>{{msg | uppercase  }}</h4> -->
    <h4>{{msg | uppercaseFirst  }}</h4>

    <sSysInfo></sSysInfo>

    <staticRouter></staticRouter>

    <sArea></sArea>

    <sRouter></sRouter>

    <Axios></Axios>

    <Toast></Toast>

    <el-button @click='test'>test</el-button>{{testPath}}

    <span>{{picPath}}</span>

  </div>
</template>

<script>
import sArea from '@/components/FunctionTest/s_area.vue'
import sRouter from '@/components/FunctionTest/s_router.vue'
import sSysInfo from '@/components/FunctionTest/s_sysinfo.vue'
import Axios from '@/components/FunctionTest/axios.vue'
import Toast from '@/components/FunctionTest/toast.vue'
import staticRouter from '@/../public/WebConfigure/components/static_router.vue'

import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      active: false,
      msg: 'this is an function page',
      testPath: '',
      picPath: []
    }
  },
  components: {
    sArea,
    sRouter,
    Axios,
    Toast,
    staticRouter,
    sSysInfo
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    test () {
      // 生产环境  C:\Program Files\SW-HMI-IDE V1.0.0\resources\app
      // picPath C:\Program Files\SW-HMI-IDE V1.0.0\resources\app\WebConfigure\pictures\Element\el-input.png

      // 生产环境 未打包
      // testPath   D:\SW-SCADA_PROJECT\sw_scada_temp\dist_electron_V1.0.1\win-unpacked\resources\app
      // picPath D:\SW-SCADA_PROJECT\sw_scada_temp\dist_electron_V1.0.1\win-unpacked\resources\app\WebConfigure\pictures\Element\el-input.png

      // 开发环境
      // D:\SW-SCADA_PROJECT\sw_scada_temp\node_modules\electron\dist\resources\electron.asar\renderer
      // D:\SW-SCADA_PROJECT\sw_scada_temp\public\WebConfigure\pictures\Element\el-input.png
      this.testPath = this.$path.resolve(__dirname)
      console.log(this.testPath)
      this.$electron.remote.dialog
        .showOpenDialog({
          title: '选择图片',
          defaultPath: this.testPath,
          properties: ['openFile', 'multiSelections', 'createDirectory'],
          filters: [
            { name: 'Images', extensions: ['jpg', 'png'] }
          ]
        }).then(result => {
          console.log(result)
          const temp = Object.values(result.filePaths)
          console.log(temp[0])
          this.picPath = result.filePaths
        }).catch(err => {
          console.log(err)
        })
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    // console.log('route:', this.$route.params)
  },
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
.vdr1{
    background-color: lightcoral;
}
</style>
