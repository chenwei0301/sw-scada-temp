/* eslint-disable quotes */
/*
 * @Author: your name
 * @Date: 2021-06-15 13:47:10
 * @LastEditTime: 2021-06-22 14:42:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\api\base\login.js
 */
import tableName from '@/api/db/tableName'
import { queryAsync } from '@/plugins/modules/mysql'
// import { decodeBase64 } from '@/api/base/common.js'
import { decodeBase64, encodeBase64 } from '@/api/base/common.js'
import { ipcRenderer } from 'electron'
import sSysInfo from '@/api/db/s_sysinfo'
// import { constantRoutes } from '@/router'
// import { asyncRoutes, constantRoutes } from '@/router'

// import sRouter from '@/api/db/s_router'
/**
 * @description: 条件过滤查询
 * @param {*} para
 * @return {*}
 */
const whereUserAsync = async function (para) {
  const sql = "select " +
              para.selectFilter +
              " from " + tableName.user +
              " where " + para.whereFilter
  return await queryAsync(sql)
}

/**
 * @description: 登录
 * @param {*}
 * @return {*}
 */
const handleLoginLocal = async function (obj) {
  if (obj.ruleForm.uiType === '') {
    const msg = '请先选择UI类型！'
    obj.$layer.msg('<span style="color:#8a0606">' + msg + '</span>')
    return false
  }
  const param = {
    username: obj.ruleForm.username,
    password: obj.ruleForm.password,
    ui: obj.ruleForm.ui
  }

  const sqlFilter = {
    selectFilter: '*',
    whereFilter: "user_name='" + param.username + "' and user_password='" + param.password + "'"
  }

  const ret = await whereUserAsync(sqlFilter)
  if (ret.length === 0) {
    const msg = '用户名或密码错误！'
    obj.$layer.msg('<span style="color:#8a0606">' + msg + '</span>')
    return false
  }

  const userInfo = ret[0]

  // localStorage
  localStorage.setItem('SCADA_ui', param.ui)
  if (obj.ruleForm.remeber) {
    localStorage.setItem('SCADA_username', encodeBase64(userInfo.user_name))
    localStorage.setItem('SCADA_password', encodeBase64(userInfo.user_password))
    localStorage.setItem('SCADA_uiType', obj.ruleForm.uiType)
    localStorage.setItem('SCADA_rember', obj.ruleForm.remeber)
    localStorage.setItem('SCADA_fullScreen', obj.ruleForm.fullScreen)
    localStorage.setItem('SCADA_display', obj.ruleForm.displaySeleted)
  }

  // sessionStorage
  sessionStorage.setItem('SCADA_username', encodeBase64(userInfo.user_name))
  // sessionStorage.setItem('SCADA_token', userInfo.token)
  sessionStorage.setItem('SCADA_userComment', userInfo.user_des)
  sessionStorage.setItem('SCADA_ui', param.ui)

  loginEnterPush(obj)

  obj.$layer.msg('登录成功')
}

// const userPwdIsVerify = function (ret, pwd) {
//   for (var i = 0; i <= ret.length; i++) {
//     if (ret[i].user_password === pwd) {
//       return {
//         isVerify: true,
//         user: ret[i]
//       }
//     }
//   }
// }

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
        { msg, status }
    } = res.data

    if (status === 200) {
      // localStorage
      localStorage.setItem('SCADA_ui', param.ui)
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
      sessionStorage.setItem('SCADA_ui', param.ui)

      loginEnterPush(obj)
    }
    obj.$layer.msg(msg)
  }).catch(_error => {
    obj.$message.error('登录请求失败，请重试！')
  })
}

const initLoginParam = function (obj) {
  var ui = localStorage.getItem('SCADA_ui')
  if (ui !== undefined) {
    obj.ruleForm.ui = ui
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
  // if (obj.ruleForm.uiType === 'edit') {
  //   await obj.$router.push({ name: 'Edit', params: { display: 0, sysNum: 404 } })
  // } else
  var arg = {
    full: obj.ruleForm.fullScreen,
    width: 1280,
    height: 960
  }
  if (obj.ruleForm.uiType === 'Home') {
    // 加载home 动态路由
    // await sRouter.addAsyncRoutes(obj)
    sSysInfo.setSysInfoToStore(obj)

    await obj.$router.push({ path: '/home', query: { display: 0, sysNum: 404 } })
    ipcRenderer.send('main-setSize', arg)
    ipcRenderer.send('main-setMaximizable', true)
    ipcRenderer.send('main-resizable', true)

    // 等待主屏进入home界面在打开副屏
    obj.openMainSubWind(obj.ruleForm.displaySeleted)
  // } else if (obj.ruleForm.uiType === 'gedi') {
  //   await obj.$router.push({ name: 'Gedi', params: { display: 0, sysNum: 404 } })
  } else {
    await obj.$router.push({ name: obj.ruleForm.uiType, params: { display: 0, sysNum: 404 } })
    ipcRenderer.send('main-setSize', arg)
  }
}

export default {
  whereUserAsync,
  handleLoginLocal,
  handleLogin,
  initLoginParam,
  loginEnterPush
}
