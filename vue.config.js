/* eslint-disable no-template-curly-in-string */
/*
 * @Author: sw0447
 * @Date: 2021-01-29 10:22:58
 * @LastEditTime: 2021-05-26 14:45:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\vue.config.js
 */

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to  electron-builder
        // 在这里的配置将会和默认配置合并，然后传递给electron-builder
        appId: 'com.szsunwin.www', // 项目唯一标识
        productName: 'SunWin SCADA OA', // 打包产物的前缀
        // eslint-disable-next-line no-template-curly-in-string
        copyright: 'Copyright © 2021 Sunwin',
        // copyright: 'Copyright © 2021 ${author}',
        // 可用使用${}引用package.json里面配置项，配置yarn项不存在会报错
        directories: {
          output: 'dist_electron' // 打包产物的位置
        },
        win: {
          target: 'nsis',
          icon: 'public/favicon.ico',
          legalTrademarks: 'http://www.szsunwin.com/'
        },
        asar: true,
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          perMachine: true,
          runAfterFinish: false, // 安装完成后启动app
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: 'public/favicon.ico', // 安装图标
          uninstallerIcon: 'public/favicon.ico', // 卸载图标
          installerHeaderIcon: 'public/favicon.ico', // 安装时头部图标
          shortcutName: 'SunWin SCADA OA', // 图标名称
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true // 创建开始菜单图标
        }
      },
      nodeIntegration: true
    }
  }
}
