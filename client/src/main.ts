import { app, BrowserWindow } from "electron";
import path from "node:path";
import url from "node:url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createWindow() {
  // Create the browser window.
  const mainWindow: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload/index.js"),
    },
  });

  const url =
    process.argv
      .slice(2)
      .find((x) => x.startsWith("--url="))
      ?.slice(6) ?? null;
  if (url) {
    await mainWindow.loadURL(`http://localhost:5173`);
  } else {
    const indexHtmlFilename = path.resolve(__dirname, "./view/index.html");
    await mainWindow.loadFile(indexHtmlFilename);
  }

  // and load the index.html of the app.
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  await createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
