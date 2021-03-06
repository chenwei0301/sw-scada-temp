/* eslint-disable quotes */
/*
 * @Author: your name
 * @Date: 2021-06-15 13:47:10
 * @LastEditTime: 2021-07-26 09:49:52
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
import { Encrypt, Decrypt } from '@/utils/crypto'

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
    password: Encrypt(obj.ruleForm.password),
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
  localStorage.setItem('SWHMI_ui', param.ui)
  if (obj.ruleForm.remeber) {
    localStorage.setItem('SWHMI_username', encodeBase64(userInfo.user_name))
    localStorage.setItem('SWHMI_password', userInfo.user_password)
    localStorage.setItem('SWHMI_uiType', obj.ruleForm.uiType)
    localStorage.setItem('SWHMI_rember', obj.ruleForm.remeber)
    localStorage.setItem('SWHMI_fullScreen', obj.ruleForm.fullScreen)
    localStorage.setItem('SWHMI_display', obj.ruleForm.displaySeleted)
  }

  // sessionStorage
  sessionStorage.setItem('SWHMI_username', encodeBase64(userInfo.user_name))
  // sessionStorage.setItem('SWHMI_token', userInfo.token)
  sessionStorage.setItem('SWHMI_userComment', userInfo.user_des)
  sessionStorage.setItem('SWHMI_ui', param.ui)

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
    password: Encrypt(obj.ruleForm.password),
    ui: obj.ruleForm.ui
  }
  obj.$axios.post('/login', obj.$Qs.stringify(param)).then(res => {
    const {
      data, meta:
        { msg, status }
    } = res.data

    if (status === 200) {
      // localStorage
      localStorage.setItem('SWHMI_ui', param.ui)
      if (obj.ruleForm.remeber) {
        localStorage.setItem('SWHMI_username', encodeBase64(param.username))
        localStorage.setItem('SWHMI_password', param.password)
        localStorage.setItem('SWHMI_uiType', obj.ruleForm.uiType)
        localStorage.setItem('SWHMI_rember', obj.ruleForm.remeber)
        localStorage.setItem('SWHMI_fullScreen', obj.ruleForm.fullScreen)
        localStorage.setItem('SWHMI_display', obj.ruleForm.displaySeleted)
      }

      // sessionStorage
      sessionStorage.setItem('SWHMI_username', encodeBase64(param.username))
      sessionStorage.setItem('SWHMI_token', data.token)
      sessionStorage.setItem('SWHMI_userComment', data.userComment)
      sessionStorage.setItem('SWHMI_ui', param.ui)

      loginEnterPush(obj)
    }
    obj.$layer.msg(msg)
  }).catch(_error => {
    obj.$message.error('登录请求失败，请重试！')
  })
}

const initLoginParam = function (obj) {
  var ui = localStorage.getItem('SWHMI_ui')
  if (ui !== undefined) {
    obj.ruleForm.ui = ui
  }
  var flag = localStorage.getItem('SWHMI_rember') === 'true'
  if (flag) {
    obj.ruleForm.uiType = localStorage.getItem('SWHMI_uiType')
    obj.ruleForm.username = decodeBase64(localStorage.getItem('SWHMI_username'))
    obj.ruleForm.password = Decrypt(localStorage.getItem('SWHMI_password'))
    obj.ruleForm.remeber = flag
    obj.ruleForm.fullScreen = localStorage.getItem('SWHMI_fullScreen') === 'true'
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
