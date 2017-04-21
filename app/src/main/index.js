'use strict'

import {
  app,
  BrowserWindow
} from 'electron'

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:${require('../../../config').port}` :
  `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 750,
    width: 1366
  })

  mainWindow.setMenu(null)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // mainWindow.webContents.on('devtools-opened', () => {
  //   // mainWindow.webContents.closeDevTools()
  // })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')

  const see = mainWindow.webContents.session
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    see.clearStorageData(localstorage)
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})