import { app, BrowserWindow } from "electron";
import * as path from "path";

app.whenReady().then(() => {
    const mainWindow: BrowserWindow = new BrowserWindow();
    mainWindow.loadURL(path.join(__dirname, "..", "html", "index.html"));
}).catch((err) => {

});

app.on("window-all-closed", () => {
    app.quit();
});