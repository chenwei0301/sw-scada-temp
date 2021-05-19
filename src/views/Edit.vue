
<template>
  <div class="funcTest">
    <h4>This is an function page</h4>
    <el-button @click.prevent="mysql" type="primary">mysql</el-button>
    <el-button @click.prevent="add" type="primary">mysql add</el-button>
    <el-button @click.prevent="test_Post" type="primary">test_Post</el-button>

    <el-button @click.prevent="axiosTest" type="primary">axiosTest</el-button>
  </div>
</template>

<script>
// import LoginTitleBar from '@/components/LoginTitleBar/LoginTitleBar.vue'
// import { queryFunc } from '@/db/queryFunc.js'
export default {
  data () {
    return {

    }
  },
  components: {
    // LoginTitleBar
  },
  methods: {
    async mysql () {
      const sql = 'select * from userinfo'
      console.time()
      var data = await this.$queryFunc(sql)
      console.group()
      // console.log(data)
      // console.dir(data)
      console.table(data)
      console.groupEnd()
      console.timeEnd()
    },
    // async add () {
    //   const sql = "INSERT INTO roleinfo VALUES( 11,'authtest11','测试权限组1','MACT',1,1,1,1,1,'2020-02-13 14:25:37',null)"
    //   console.time()
    //   var data = await this.$queryFunc(sql)
    //   console.group()
    //   // console.log(data)
    //   // console.dir(data)
    //   console.table(data)
    //   console.groupEnd()
    //   console.timeEnd()
    // },
    test_Post () {
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
    },
    axiosTest () {
      this.$axios.get('/sw3D', {}).then(res => {
        // const {
        //   data, meta:
        //   { msg }
        // } = res.data
        // console.log(data, msg)
        console.log(res)
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log(error)
        this.$message.error('登录请求失败，请检查后再试！')
      })
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
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  }
}
</script>

<style lang="scss" scoped>

</style>
