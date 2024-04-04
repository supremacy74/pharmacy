import { app, BrowserWindow } from 'electron'
import { spawn } from 'child_process'

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // Определите порт, который используется вашим React приложением
    const reactDevPort = 5173

    // Загрузите ваше React приложение
    mainWindow.loadURL(`http://localhost:${reactDevPort}`)

    mainWindow.setMenu(null)
}

app.whenReady().then(() => {
    const appPath = app.getAppPath() // Получаем абсолютный путь к приложению
    const serverPath = path.join(appPath, 'resources/app') // Конструируем путь к директории с React приложением

    const npmRunDev = spawn('npm', ['run', 'dev'], {
        cwd: serverPath,
        shell: true
    })

    npmRunDev.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
    })

    npmRunDev.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`)
    })

    npmRunDev.on('close', (code) => {
        console.log(`child process exited with code ${code}`)
    })

    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
