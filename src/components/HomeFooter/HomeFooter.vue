<!--
 * @Author: your name
 * @Date: 2021-02-01 13:57:11
 * @LastEditTime: 2021-03-05 17:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\HomeFooter\HomeFooter.vue
-->
<template>
    <div class="footer">
      <div class="footer-bar">
        <HomeFooterBarList/>
        <HomeFooterBarTime/>
      </div>
      <div class="footer-content">
        <HomeFooterContentInfo/>
        <HomeFooterContentAlert/>
        <HomeFooterContentUser/>
      </div>
    </div>

</template>

<script>
import HomeFooterBarList from '@/components/HomeFooterBarList/HomeFooterBarList.vue'
import HomeFooterBarTime from '@/components/HomeFooterBarTime/HomeFooterBarTime.vue'
import HomeFooterContentInfo from '@/components/HomeFooterContentInfo/HomeFooterContentInfo.vue'
import HomeFooterContentAlert from '@/components/HomeFooterContentAlert/HomeFooterContentAlert.vue'
import HomeFooterContentUser from '@/components/HomeFooterContentUser/HomeFooterContentUser.vue'
export default {
  data () {
    return {
    };
  },
  components: {
    HomeFooterBarList,
    HomeFooterBarTime,
    HomeFooterContentInfo,
    HomeFooterContentAlert,
    HomeFooterContentUser
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.footer{
  .footer-bar{
    height: 40px;
    padding: 0 10px;
    width: 100%;
    background: #304758;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-content{
    height: 95px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
