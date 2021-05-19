<!--
 * @Author: your name
 * @Date: 2021-02-01 10:19:36
 * @LastEditTime: 2021-05-13 16:09:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\LoginBody\LoginBody.vue
-->
<template>
<div class="login-wrap">
  <el-form :label-position="labelPosition" label-width="100px" :model="ruleForm" :rules="rules" class="login-from" size="mini">
    <div class="login-img">
     <el-image  :src="ruleForm.loginImg"  fit="'contain'"></el-image>
    </div>
    <el-form-item label="用户名" prop="username">
      <el-input placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
    </el-form-item>
    <el-form-item label="工作站编号" prop="ui">
      <el-col :span="24">
        <el-input-number v-model="ruleForm.ui" controls-position="right" :min="1" :max="100" class="login-stepui"></el-input-number>
      </el-col>
    </el-form-item>
    <el-form-item label="多屏选择" prop="displaySeleted">
      <el-checkbox-group v-model="ruleForm.displaySeleted">
        <el-checkbox v-for="(item, index) in ruleForm.displayInfo" :label="item.id" :key="index" :disabled="index === 0">{{item.text}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="记住用户">
      <el-switch v-model="ruleForm.remeber">
      </el-switch>
    </el-form-item>
    <el-form-item label="登录后全屏">
      <el-switch v-model="ruleForm.fullScreen">
    </el-switch>
    </el-form-item>
    <div class="login-line">
      <el-image  :src="ruleForm.loginImgLine"  fit="'contain'"></el-image>
    </div>
    <el-button @click.prevent="handleLogin" class="login-btn" type="primary">登 录</el-button>
    <el-button @click.prevent="test" type="primary">test_post</el-button>
  <FooterCopyright class="login-copyright"></FooterCopyright>
  </el-form>
</div>
</template>

<script>
import FooterCopyright from '@/components/FooterCopyright/FooterCopyright.vue'
import { ipcRenderer } from 'electron'
import { ERR_OK } from '@/api/baseConst.js'
import { swHttpLogin } from '@/api/api.js'
import { encodeBase64, decodeBase64 } from '@/api/common.js'
const remote = require('electron').remote;
export default {
  data () {
    return {
      labelPosition: 'left',
      ruleForm: {
        username: '',
        password: '',
        ui: 1,
        displaySeleted: [],
        displayInfo: {},
        remeber: false,
        fullScreen: false,
        loginImg: require('@/assets/image/loginTitle.png'),
        loginImgLine: require('@/assets/image/line.png')
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        ui: [
          { required: true, message: '请选择工作站编号', trigger: 'change' }
        ]
      }
    }
  },
  components: {
    FooterCopyright
  },
  methods: {
    // 登录信息初始化
    loginInfoInit () {
      var ui = localStorage.getItem('ISCS_ui')
      if (ui !== null) {
        this.ruleForm.ui = parseInt(ui)
      }
      // eslint-disable-next-line no-unneeded-ternary
      var flag = localStorage.getItem('ISCS_rember') === 'true' ? true : false
      if (flag) {
        this.ruleForm.username = decodeBase64(localStorage.getItem('ISCS_username'))
        this.ruleForm.password = decodeBase64(localStorage.getItem('ISCS_password'))
        this.ruleForm.remeber = flag
        // eslint-disable-next-line no-unneeded-ternary
        this.ruleForm.fullScreen = localStorage.getItem('ISCS_fullScreen') === 'true' ? true : false
      }
    },

    // 登录
    async  handleLogin () {
      try {
        var param = {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          ui: this.ruleForm.ui
        }
        const {
          data, meta:
        { msg, status }
        } = await swHttpLogin(this, param)
        if (status === ERR_OK) {
          localStorage.setItem('ISCS_ui', data.ui)
          // local用户名
          if (this.ruleForm.remeber) {
            localStorage.setItem('ISCS_username', encodeBase64(param.username))
            localStorage.setItem('ISCS_password', encodeBase64(param.password))
            localStorage.setItem('ISCS_rember', this.ruleForm.remeber)
            localStorage.setItem('ISCS_fullScreen', this.ruleForm.fullScreen)
            localStorage.setItem('ISCS_display', this.ruleForm.displaySeleted)
          } else {
            localStorage.removeItem('ISCS_username')
            localStorage.removeItem('ISCS_password')
            localStorage.removeItem('ISCS_rember')
            localStorage.removeItem('ISCS_fullScreen')
          }
          // 缓存信息
          sessionStorage.setItem('ISCS_username', encodeBase64(param.username))
          sessionStorage.setItem('ISCS_token', data.token)
          sessionStorage.setItem('ISCS_userComment', data.userComment)
          sessionStorage.setItem('ISCS_ui', data.ui)
          await this.enterToHome(this.ruleForm.fullScreen)
          // 等待主屏进入home界面在打开副屏
          this.openMainSubWind(this.ruleForm.displaySeleted)
        } else {
          this.$layer.msg('<span style="color:#8a0606">' + msg + '</span>')
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 进入home界面
    enterToHome (flag) {
      // this.$router.push({ name: 'Home', params: { sysnum: 404 } })
      this.$router.push({ path: '/home', query: { display: 0 } })
      var arg = {
        full: flag,
        width: 1280,
        height: 960
      }
      ipcRenderer.send('main-setSize', arg);
      ipcRenderer.send('main-setMaximizable', true);
      ipcRenderer.send('main-resizable', true);
    },

    // 获取显示器信息
    getMainDisplay () {
      const message = remote.screen.getAllDisplays();
      var arr = []
      for (let i = 0; i < message.length; i++) {
        if (i === 0) {
          // 将主屏添加到默认选中数组中
          this.ruleForm.displaySeleted.push(message[i].id)
        }
        arr.push({ id: message[i].id, text: '屏幕' + (i + 1), num: i + 1 })
      }
      this.ruleForm.displayInfo = arr
    },

    openMainSubWind (displays) {
      if (displays.length > 1) { // 若屏幕选中大于1
        ipcRenderer.send('openSubWin', displays)
      }
    },

    test () {
      const data = {
        username: 'admin',
        password: '123456',
        ui: 1
      }
      this.$axios.post('/login', this.$Qs.stringify(data)).then(res => {
        const {
          data, meta:
          { msg }
        } = res.data
        this.$message({
          showClose: true,
          message: 'msg',
          type: 'success',
          center: true,
          duration: 2000,
          offset: 50
          // onClose: () => {
          //   console.log('close')
          // }
        })
        console.log(data, msg)
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log(error)
        this.$message.error('登录请求失败，请检查后再试！')
      })
    }

  },
  beforeCreate () {},
  created () {
    this.loginInfoInit()
    this.getMainDisplay()
  },
  beforeMount () {
  },
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

}
</script>

<style scope lang="scss" >
.login-wrap {
  background: linear-gradient(to right, #3882ad, #10395a);
  // height: calc(100% - 30px);
  height: 500px;
  display: flex;
  justify-content: center;
  // align-items: center;
  .login-img {
    text-align:center;
    padding-bottom: 30px;
  }
  .login-from {
    width: 350px;
    border-radius: 5px;
    padding: 25px;
    margin-top: 10px;
    .login-line {
      text-align:center;
    }
    .login-btn {
      width: 100%;
      font-size: 18px;
    }
    .login-copyright {
      margin-top: 40px;
    }
  }
  label{
    color: #7ecef4;
  }
}

</style>
