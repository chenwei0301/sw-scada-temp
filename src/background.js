/*
 * @Author: your name
 * @Date: 2021-01-28 15:59:40
 * @LastEditTime: 2021-05-28 09:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \swiscs_3d\src\background.js
 */
'use strict'
// session
import { app, protocol, BrowserWindow, ipcMain, screen, Tray, Menu, globalShortcut, session } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import path from 'path'
import { APPTITLE } from '@/api/appConfig.js'

const isDevelopment = process.env.NODE_ENV !== 'production'
if (!isDevelopment) {
  global.__icons = path.join(__dirname, './icons')
}

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let mainWindow
const subWindow = []
let appTray = null

// const trayIcon = isDevelopment ? 'public/favicon.ico' : path.join(__dirname, 'favicon.ico')

// Electron单实例
const gotTheLock = app.requestSingleInstanceLock()
if (gotTheLock) {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow && mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    mainWindow.focus()
  })
} else {
  app.quit()
  process.exit(0)
}

async function createSubWindow (arg) {
  const displays = screen.getAllDisplays()
  // 从第二个显示器开始判断
  for (let i = 1; i < arg.length; i++) {
    if (arg.includes(displays[i].id)) { // 若对应显示器在选中数组中 打开新窗口
      const externalDisplay = displays[i];
      const index = i - 1
      if (externalDisplay) {
        subWindow[index] = new BrowserWindow({
          // workAreaSize  size
          width: externalDisplay.size.width,
          height: externalDisplay.size.height,
          maxWidth: externalDisplay.size.width,
          maxHeight: externalDisplay.size.height,
          x: externalDisplay.bounds.x,
          y: externalDisplay.bounds.y,
          maximizable: true,
          resizable: true,
          frame: false,
          webPreferences: {
            webSecurity: false,
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION, // 集成node环境
            enableRemoteModule: true, // 使用remote模块
            devTools: isDevelopment //  禁用开发者调试工具
          }
        })
        if (process.env.WEBPACK_DEV_SERVER_URL) {
          await subWindow[index].loadURL(process.env.WEBPACK_DEV_SERVER_URL + '#/home/main?display=' + i)
          if (!process.env.IS_TEST) subWindow[index].webContents.openDevTools()
        } else {
          subWindow[index].loadURL('app://./index.html' + '#/home/main?display=' + i)
        }
      }
    }
  }
}

async function createWindow () {
  // Create the browser window.
  const display = screen.getAllDisplays()[0]
  mainWindow = new BrowserWindow({
    // width: 380,
    // height: 530,
    width: 1440,
    height: 960,
    maxHeight: display.size.height,
    maxWidth: display.size.width,
    // maximizable: false,
    // backgroundColor: '#3882ad',
    // frame: false,
    webPreferences: {
      webSecurity: false,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION, // 集成node环境
      enableRemoteModule: true, // 使用remote模块
      devTools: isDevelopment //  禁用开发者调试工具
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html')
  }
  if (!mainWindow.isFocused()) {
    mainWindow.focus()
  }
  mainWindow.moveTop()
  mainWindow.center()
  BanningDevTools(mainWindow)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    clearTray()
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await session.defaultSession.loadExtension(path.resolve(__dirname, '..', 'devTools/vue-devtools'))
      //  删除下载的vue插件 修改为上面的插件
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
  createTray()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        clearTray()
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      clearTray()
      app.quit()
    })
  }
}

function createTray () {
  // 创建系统通知区菜单
  try {
    // const trayIcon = isDevelopment ? 'public/favicon.png' : path.join(__dirname, 'favicon.png')
    const faviconName = 'favicon.png'
    const trayIcon = isDevelopment ? 'public/' + faviconName : path.join(__dirname, faviconName)
    appTray = new Tray(trayIcon)
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '打开',
        click: () => {
          mainWindow.show()
        }
      },
      {
        label: '退出',
        click: () => {
          clearAllWindow()
          clearTray()
          app.quit()
        }
      }
    ])
    appTray.setContextMenu(contextMenu)
    appTray.setToolTip(APPTITLE)
    appTray.on('click', (event, bounds, position) => {
      mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
      mainWindow.isVisible() ? mainWindow.setSkipTaskbar(false) : mainWindow.setSkipTaskbar(true);
    })
    appTray.on('right-click', (event, bounds) => {
      console.log(event, bounds)
    })
  } catch (error) {
    console.log(error)
  }
}

function clearTray () {
  if (appTray !== null) {
    appTray.destroy()
  } else {
    appTray = null
  }
}

function clearAllWindow () {
  mainWindow.destroy()
  for (var i = 0; i < subWindow.length; i++) {
    subWindow[i].destroy()
  }
}

function BanningDevTools (win) {
  // 生产环境
  if (!isDevelopment) {
    win.webContents.closeDevTools();
    // 快捷键禁用打开控制台
    globalShortcut.register('CommandOrControl+Shift+I', () => {
      console.log('globalShortcut');
    });
    globalShortcut.register('CommandOrControl+Option+I', () => {
      console.log('globalShortcut');
    });
  }
}

// 设置quitApp
ipcMain.on('main-quitApp', function () {
  clearAllWindow()
  clearTray()
})

// 设置显示最小化
ipcMain.on('main-min', (event, flag) => {
  if (flag === 0) {
    mainWindow.minimize()
  } else {
    subWindow[flag - 1].minimize()
  }
})

// 设置显示最大化
ipcMain.on('main-max', (event, flag) => {
  if (flag === 0) {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  } else {
    if (subWindow[flag - 1].isMaximized()) {
      subWindow[flag - 1].restore()
    } else {
      subWindow[flag - 1].maximize()
    }
  }
})

// 关闭窗口
ipcMain.on('main-close', (event, flag) => {
  if (flag === 0) {
    mainWindow.destroy()
  } else {
    subWindow[flag - 1].destroy()
  }
})

// 设置可调整显示大小
ipcMain.on('main-resizable', (event, flag) => {
  mainWindow.setResizable(flag)
})

// 设置显示尺寸
ipcMain.on('main-setSize', (event, arg) => {
  if (arg.full) {
    const { width, height } = screen.getPrimaryDisplay().size;
    mainWindow.setSize(width, height)
  } else {
    mainWindow.setSize(arg.width, arg.height)
  }
  mainWindow.center()
  event.returnValue = 'pong'
})

// 设置全屏模式可用
ipcMain.on('main-setMaximizable', (event, flag) => {
  mainWindow.setMaximizable(flag)
})

// 获取显示器信息
ipcMain.on('asynchronous-message-getDisplay', (event, flag) => {
  event.sender.send('asynchronous-message-getDisplay-reply', screen.getAllDisplays())
})

// 打开子显示界面
ipcMain.on('openSubWin', (event, arg) => {
  createSubWindow(arg)
})
