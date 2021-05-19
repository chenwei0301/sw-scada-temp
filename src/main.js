/*
 * @Author: your name
 * @Date: 2021-01-28 15:50:04
 * @LastEditTime: 2021-05-19 17:33:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\main.js
 */
// import devtools from '@vue/devtools'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/normalize.css'
import '@/assets/css/reset.css'
import VueAjax from 'v-ajax';
import MyHttpServer from '@/plugins/axios.js'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
import Moment from 'moment'
import 'moment/locale/zh-cn'
import Qs from 'qs'
import { queryFunc } from '@/db/queryFunc.js'

Vue.use(MyHttpServer)
Vue.prototype.$layer = layer(Vue)
Vue.prototype.moment = Moment
Vue.prototype.$Qs = Qs
Vue.prototype.$queryFunc = queryFunc

// Vue.prototype.$layer = layer({
//   msgtime: 3 // 目前只有一项，即msg方法的默认消失时间，单位：秒
// });
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss dddd') {
  return Moment(dataStr).format(pattern);
})
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAjax)

// if (process.env.NODE_ENV === 'development') {
//   const devtools = require('@vue/devtools')
//   devtools.connect('localhost', '8080')
// }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
