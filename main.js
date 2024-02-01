const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");
// Checking for dev mode
const isDev = process.env.NODE_ENV !== "production";

// Creating the app menu tabs
const menuTabs = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        click: () => app.quit(),
        accelerator: "Ctrl+Q",
      },
    ],
  },
];

const createMainWindow = () => {
  // Creating the native window
  const mainWindow = new BrowserWindow({
    title: "Native Electron App",
    width: isDev ? 1200 : 800,
    height: 800,
    webPreferences: {
      // Required to bridge the backend to the frontend
      preload: path.join(__dirname, "./preload.js"),
      nodeIntegration: true,
    },
  });
  // Checking for dev mode to allow devtools
  if (isDev) mainWindow.webContents.openDevTools();
  // Loading our index.html
  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  // Display native window
  createMainWindow();
  // Build our menu tabs on windows
  const mainMenu = Menu.buildFromTemplate(menuTabs);
  Menu.setApplicationMenu(mainMenu);
});
