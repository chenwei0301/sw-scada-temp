<!--
 * @Author: your name
 * @Date: 2021-02-01 13:42:36
 * @LastEditTime: 2021-03-05 14:55:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeHeader\HomeHeader.vue
-->
<template>
    <el-header class="header" height="180px">
      <!-- 1.站名列表 -->
      <div class="header-station">
        <!-- 左边图片 -->
        <div class="header-station-left">
          <el-image :src="headerImg_left"  fit="'fill'"></el-image>
        </div>
        <div class="header-station-middle">
          <ul class="station-mid-ui">
            <!-- 车站列表 -->
            <li class="station-li" :class="getStaLiClass(item.id)" v-for="item in stationList" :key="item.id" :value="item.id" @click="clickStation(item)"><span>{{item.text}}</span></li>
             <!-- 中心、变电所、停车场 列表-->
            <li class="other-li" :class="getOtherLiClass(item.id)" v-for="item in otherList" :key="item.id" :value="item.id" @click="clickStation(item)"><span>{{item.text}}</span></li>
          </ul>
        </div>
        <!-- 右边图片 -->
        <div class="header-station-right">
          <el-image :src="headerImg_right"  fit="'fill'"></el-image>
        </div>
      </div>
      <!-- 2.系统导航 -->
      <div class="header-menu">
        <!-- 2.1子系统 一级菜单 -->
        <div class="header-menu-left">
          <ul class="header-menu-subSys">
            <li class="menu-sys" :class="getSubSysLiClass(item.id)" v-for="(item) in subSysList" :key='item.id' :id="item.id" @click="subSysClick(item)"><span>{{item.text}}</span></li>
             </ul>
        </div>
        <!-- 2.2退出按钮 -->
        <!-- 2.2退出按钮1 -->
        <div class="header-menu-right">
          <img :src="quitImgSrc" title="注销" @click="quitApp">
        </div>
      </div>
      <!-- 二级菜单 -->
      <div class="header-menu-popup">
        <ul class="menu-popup">
            <li class="menu-popup-path" v-for="(item, index) in stedSubPopMenu" :key='index' @click="menuClickToRouter(item)"><span>{{item.text}}</span></li>
        </ul>
      </div>
    </el-header>

</template>

<script>
import { ipcRenderer } from 'electron'
import swStationList from '@/api/stationInfo.js'
import swSubSysList from '@/api/subSysInfo.js'
import { swHttpGetUserRole } from '@/api/api.js'
import { decodeBase64 } from '@/api/common.js'

export default {
  data () {
    return {
      headerImg_left: require('@/assets/image/header_left.png'),
      headerImg_right: require('@/assets/image/header_right.png'),
      headerImg_staBg: require('@/assets/image/station_bg.png'),
      quitImgSrc: require('@/assets/image/quit.png'),
      stationList: [],
      otherList: [],
      roleList: [],
      subSysList: [],
      isOcc: false,
      stedStationId: null,
      stedStationName: '',
      stedSubSysId: '',
      stedSubPopMenu: []
    };
  },
  methods: {
    // 初始化站名列表
    initStationList () {
      this.stationList = swStationList.station
      this.otherList = swStationList.other
      this.stedStationId = swStationList.localInfo.stationId
      this.stedStationName = swStationList.localInfo.stationName
      this.isOcc = swStationList.localInfo.isOcc
      this.subSysList = swSubSysList.subSys
    },

    setVueStore () {
      this.$store.commit('setLocalInfo', swStationList.localInfo)
    },

    // 车站列表点击事件
    clickStation (item) {
      this.$router.push({ path: '/home/main', query: { id: item.id, staName: item.text } })
      this.stedStationId = item.id
      this.stedStationName = item.text
      // 清空二级导航栏
      this.stedSubSysId = ''
      this.stedSubPopMenu = []
      // if (this.stedStationId !== id) {
      //   this.stedStationId = id
      // }
    },

    // 其他列表点击事件
    clickOther (item) {
      this.$router.push({ path: '/home/main', query: { id: item.id, staName: item.text } })
      this.stedStationId = item.id
      this.stedStationName = item.text
      // 清空二级导航栏
      this.stedSubSysId = ''
      this.stedSubPopMenu = []
      // if (this.stedStationId !== item.id) {
      //   this.stedStationId = item.id
      // }
    },

    // 动态计算站名列表 li 属性类
    getStaLiClass (id) {
      if (this.isOcc) {
        return this.stedStationId === id ? 'station-mid-li-station-selected' : 'station-mid-li-station'
      } else {
        // return this.stedStationId === id ? 'station-mid-li-station-selected' : 'station-mid-li-station-disabled'
        return this.stedStationId === id ? 'station-mid-li-station-selected' : 'station-mid-li-station'
      }
    },

    // 动态计算其他列表 li 属性类
    getOtherLiClass (id) {
      if (this.isOcc) {
        return this.stedStationId === id ? 'station-mid-li-other-selected' : 'station-mid-li-other'
      } else {
        return this.stedStationId === id ? 'station-mid-li-other-selected' : 'station-mid-li-other'
      }
    },

    // 动态计算子系统导航 按钮 属性类
    getSubSysLiClass (id) {
      const role = this.subSysList.filter(item => item.id === id)[0].role
      // 有权限
      if (role.indexOf('M') > -1) {
        return this.stedSubSysId === id ? 'menu-sys-active' : ''
      } else {
        return 'menu-sys-disabled'
      }
    },

    // 一级子系统导航点击事件
    subSysClick (item) {
      this.stedSubSysId = item.id
      if (item.popSub) {
        this.stedSubPopMenu = item.children
      } else {
        this.stedSubPopMenu = []
        // 路由跳转
        this.menuClickToRouter({ path: item.path, text: item.text })
      }
    },

    // 二级导航点击事件
    menuClickToRouter (item) {
      this.$router.push({ path: item.path, query: { id: this.stedStationId, staName: this.stedStationName, title: item.text } })
    },

    // 请求用户权限数据
    async getUserRoleFromServe () {
      try {
        var param = {
          username: decodeBase64(localStorage.getItem('ISCS_username'))
        }
        const {
          data, meta:
        { msg, status }
        } = await swHttpGetUserRole(this, param)
        if (status === 200) {
          this.$store.commit('setUserRole', data)
          this.setSubSysRole(data);
        } else {
          this.msg(msg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 设置子系统导航按钮状态
    setSubSysRole (roles) {
      const filterRoles = roles.filter(item => item.sysNumber === this.stedStationId)
      if (filterRoles.length !== 0) {
      // 遍历子系统信息 赋值权限值
        const stedStationIdRole = filterRoles[0]
        const roleTemp = this.subSysList
        for (var i = 0; i < roleTemp.length; i++) {
          const id = roleTemp[i].id
          if (stedStationIdRole[id] !== undefined) {
            roleTemp[i].role = stedStationIdRole[id]
          }
        }
        this.subSysList = roleTemp
      }
    },

    // 退出app
    quitApp () {
      // this.$layer.confirm('是否退出吗？', {
      //   title: '确认',
      //   btn: ['确认', '取消'],
      //   shade: true,
      //   shadeClose: true
      //   // icon: 3
      // },
      // layerid => {
      //   this.$layer.msg('执行了确认');
      //   this.$layer.close(layerid);
      // },
      // layerid => {
      //   this.$layer.msg('执行了取消');
      //   this.$layer.close(layerid);
      // }
      // );
      this.$confirm('是否退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('comfirm')
        ipcRenderer.send('main-quitApp');
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        console.log('cancel')
      });
    }
  },
  beforeCreate () {},
  created () {
    this.initStationList()
    this.setVueStore()
    this.getUserRoleFromServe()
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

<style lang="scss" scope>
*{
  box-sizing: border-box;
}
.header{
  padding: 0;
  background: #1d2531;
  .header-station{
    display: flex;
    height: 115px;
    border-bottom: 2px solid #7ecef4;
    .header-station-left{
      img{
      width: 154px;
      height: 113px;
      }
    }
    .header-station-middle{
      flex: 1;
      .station-mid-ui{
      display: inline-flex;
      padding: 5px;
      li{
        width: 40px;
        height: 104px;
        display: block;
        margin: 0 1px;
        line-height: 1.1em;
        font-size: 11px;
        text-align: center;
        color: #7ecef4;
        cursor:pointer;
      }
      .station-li{
        padding: 35px 10px 0;
      }
      .other-li{
        padding: 10px;
      }
      .station-mid-li-station{
        background: url(../../assets/image/station_bg.png) no-repeat;
      }
      .station-mid-li-station-selected{
        background: url(../../assets/image/station_bg.gif) no-repeat;
        color: #00ffff;
      }
      .station-mid-li-station-disabled{
        pointer-events: none;
        color: #666666;
        background: url(../../assets/image/station_disable.png) no-repeat;
      }
      .station-mid-li-other{
        background: url(../../assets/image/other_bg.png) no-repeat;
      }
      .station-mid-li-other-selected{
        background: url(../../assets/image/other_selected.png) no-repeat;
        color: #00ffff;
      }
      .station-mid-li-other-disabled{
        pointer-events: none;
        color: #666666;
        background: url(../../assets/image/other_disable.png) no-repeat;
      }
    }
    }
    .header-station-right{
      img{
        width: 44px;
        height: 113px;
      }
    }
  }
  .header-menu{
    display: flex;
    .header-menu-left{
      flex: 1;
      height: 35px;
      .header-menu-subSys{
        height: 35px;
        display: flex;
        li {
          display: block;
          float: left;
          flex: 1;
          position: relative;
          min-width: 100px;
          height: 35px;
          margin-left: 3px;
          color: #7ecef4;
          span {
            font-size: 13px;
            line-height: 35px;
            text-align: center;
            display: block;
            cursor:pointer;
          }
        }
        li::before{
            content: '';
            background: url('../../assets/image/sys_line.png') no-repeat;
            position: absolute;
            left: -3px;
            top: 0;
            width: 3px;
            height: 35px;
        }
        li::after{
            content: '';
            background: url('../../assets/image/sys_line.png') no-repeat;
            position: absolute;
            right: -3px;
            top: 0;
            width: 3px;
            height: 35px;
        }
        .menu-sys-active {
          background: url('../../assets/image/subSys_active.png') no-repeat;
        }
        .menu-sys-disabled {
          pointer-events: none;
          background: linear-gradient(#515f74, #2e2b2b);
          color: #666666;
        }
      }
    }
    .header-menu-right{
      width: 80px;
      align-items: center;
      display: flex;
      justify-content: flex-end;
    }
  }
  .header-menu-popup{
    border-bottom: 1px solid #7ecef4;
    display: flex;
    height: 30px;
    .menu-popup{
      height: 30px;
      flex: 1;
      .menu-popup-path{
        display: block;
        float: left;
        position: relative;
        width: 100px;
        color: #7ecef4;
        border-right: 1px solid #7ecef4;
        span {
            font-size: 13px;
            line-height: 29px;
            text-align: center;
            display: block;
            cursor:pointer;
          }
      }
      li:hover {
          background: #4c6171;
        }
    }
  }

}
</style>
