<template>
  <div class="funcTest">
    <h4>{{msg | uppercase  }}</h4>
    <h4>{{msg | uppercaseFirst  }}</h4>
    <el-button @click.prevent="getAreas" type="primary">getAreas</el-button>
    <el-button @click.prevent="addAreas" type="primary">addAreas</el-button>
    <el-button @click.prevent="mysql" type="primary">mysql</el-button>
    <el-button @click.prevent="add" type="primary">mysql add</el-button>
    <el-button @click.prevent="test_Post" type="primary">test_Post</el-button>

    <el-button @click.prevent="axiosTest" type="primary">axiosTest</el-button>
    <el-button @click.prevent="VueToast" type="primary">VueToast</el-button>
        <vue-draggable-resizable :active.sync="active" class="vdr1">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import { addAreas, getAreas } from '@/api/db/s_area'
import Vue2Filters from 'vue2-filters'
export default {
  data () {
    return {
      active: false,
      msg: 'this is an function page'
    }
  },
  components: {
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    async mysql () {
      // const sql = 'select * from userinfo'
      // const sql = 'select * from userinfo' + ' order by user_name DESC'
      const sql = 'select * from ' + 's_area' + ' order by area_id ASC'
      console.time()
      var data = await this.$queryAsync(sql)
      console.group()
      // console.log(data)
      // console.dir(data)
      console.table(data)
      console.groupEnd()
      console.timeEnd()
    },
    async getAreas () {
      var ret = await getAreas(this, '*')
      console.table(ret)
      // ...

      // ...
    },
    // async addAreas () {
    //   var areaId = '403'
    //   var areaName = '测试车站'
    //   // eslint-disable-next-line quotes
    //   const sql = "INSERT INTO s_area VALUES('" + areaId + "','" + areaName + "')"
    //   // const sql = "INSERT INTO s_area VALUES('405','测试车站') "
    //   console.log(sql)
    //   var { status, ret } = await this.$queryAsync(sql)
    //   console.info(status)
    //   console.table(ret)
    //   if (!status) {
    //     console.log('失败')
    //   }
    // },
    async addAreas () {
      var ret = await getAreas(this, 'area_id')
      console.info(ret, typeof (ret))
      var arr = []
      for (var element of ret) {
        console.log(element);
        arr.push(element.area_id)
      }
      console.info(arr, typeof (arr))
      var areaId = '411'
      var areaName = '测试车站'
      if (arr.include(areaId)) {
        this.error('error')
      } else {
        addAreas(this, areaId, areaName)
      }
      // var areaId = '409'
      // var areaName = '测试车站'
      // // eslint-disable-next-line quotes
      // const sql = "INSERT INTO s_area VALUES('" + areaId + "','" + areaName + "')"
      // console.log(sql)
      // this.$querySync(sql, function (err, vals, fields) {
      //   if (err) {
      //     console.log(err.message)
      //   }
      //   if (vals) {
      //     console.log(JSON.parse(JSON.stringify(vals)))
      //   }
      //   if (fields) {
      //     console.log(fields)
      //   }
      // })
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
    },
    VueToast () {
      // this.$toast.error('简单的Toast消息')
      this.$toast.open({
        message: '简单的Toast消息',
        type: 'success',
        position: 'top',
        duration: 3000,
        // dismissible: false,
        // queue: false,
        onClose: () => {
          console.log('close')
        }
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
  // eslint-disable-next-line handle-callback-err
  errorCaptured: (err, vm, info) => {
    // console.log(err, vm, info)
  }
}
</script>

<style lang="scss" scoped>
.vdr1{
    background-color: lightcoral;
}
</style>
