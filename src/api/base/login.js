/*
 * @Author: your name
 * @Date: 2021-06-15 13:47:10
 * @LastEditTime: 2021-06-16 14:10:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\base\login.js
 */
import { decodeBase64, encodeBase64 } from '@/api/base/common.js'
import { ipcRenderer } from 'electron'
import sSysInfo from '@/api/db/s_sysinfo'
// import { constantRoutes } from '@/router'
// import { asyncRoutes, constantRoutes } from '@/router'

// import sRouter from '@/api/db/s_router'

const handleLogin = function (obj) {
  if (obj.ruleForm.uiType === '') {
    const msg = '请先选择UI类型！'
    obj.$layer.msg('<span style="color:#8a0606">' + msg + '</span>')
    return
  }
  const param = {
    username: obj.ruleForm.username,
    password: obj.ruleForm.password,
    ui: obj.ruleForm.ui
  }
  obj.$axios.post('/login', obj.$Qs.stringify(param)).then(res => {
    const {
      data, meta:
        { msg }
    } = res.data

    // localStorage
    localStorage.setItem('SCADA_ui', data.ui)
    if (obj.ruleForm.remeber) {
      localStorage.setItem('SCADA_username', encodeBase64(param.username))
      localStorage.setItem('SCADA_password', encodeBase64(param.password))
      localStorage.setItem('SCADA_uiType', obj.ruleForm.uiType)
      localStorage.setItem('SCADA_rember', obj.ruleForm.remeber)
      localStorage.setItem('SCADA_fullScreen', obj.ruleForm.fullScreen)
      localStorage.setItem('SCADA_display', obj.ruleForm.displaySeleted)
    }

    // sessionStorage
    sessionStorage.setItem('SCADA_username', encodeBase64(param.username))
    sessionStorage.setItem('SCADA_token', data.token)
    sessionStorage.setItem('SCADA_userComment', data.userComment)
    sessionStorage.setItem('SCADA_ui', data.ui)

    loginEnterPush(obj)

    obj.$message({
      showClose: true,
      message: msg,
      type: 'success',
      center: true,
      duration: 2000,
      offset: 50
    })
    // console.log(data, msg)
  }).catch(_error => {
    obj.$message.error('登录请求失败，请重试！')
  })
}

const initLoginParam = function (obj) {
  var ui = localStorage.getItem('SCADA_ui')
  if (ui) {
    obj.ruleForm.ui = parseInt(ui)
  }
  var flag = localStorage.getItem('SCADA_rember') === 'true'
  if (flag) {
    obj.ruleForm.uiType = localStorage.getItem('SCADA_uiType')
    obj.ruleForm.username = decodeBase64(localStorage.getItem('SCADA_username'))
    obj.ruleForm.password = decodeBase64(localStorage.getItem('SCADA_password'))
    obj.ruleForm.remeber = flag
    obj.ruleForm.fullScreen = localStorage.getItem('SCADA_fullScreen') === 'true'
  }
}

const loginEnterPush = async function (obj) {
  if (obj.ruleForm.uiType === 'gedi') {
    obj.$router.push({ name: 'Edit', params: { display: 0, sysNum: 404 } })
  } else if (obj.ruleForm.uiType === 'home') {
    // 加载home 动态路由
    // await sRouter.addAsyncRoutes(obj)
    sSysInfo.setSysInfoToStore(obj)

    obj.$router.push({ path: '/home', query: { display: 0, sysNum: 404 } })
    var arg = {
      full: obj.ruleForm.fullScreen,
      width: 1280,
      height: 960
    }
    ipcRenderer.send('main-setSize', arg);
    ipcRenderer.send('main-setMaximizable', true);
    ipcRenderer.send('main-resizable', true);

    // 等待主屏进入home界面在打开副屏
    obj.openMainSubWind(obj.ruleForm.displaySeleted)
  }
}

export default {
  handleLogin,
  initLoginParam,
  loginEnterPush
}
