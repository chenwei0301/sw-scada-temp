<!--
 * @Author: your name
 * @Date: 2021-03-03 11:08:05
 * @LastEditTime: 2021-03-04 15:46:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\components\FooterCopyright\FooterCopyright.vue
-->

<template>
  <div id="footer-Copyrights">
    <p>© 1997-{{swCurrentYear}} Sunwin.All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  vueName: 'FooterCopyRights',
  data () {
    return {
      swCurrentYear: new Date().getFullYear()
    };
  },
  methods: {},
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
  }
};
</script>

<style lang="scss" scoped>
#footer-Copyrights{
  height: 20px;
  line-height: 20px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 10px;
  letter-spacing: 1px;
}
</style>
