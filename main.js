const os = require('os');
const fs = require('fs');
const url = require('url');
const path = require('path');
const mm = require('musicmetadata');
const scanner = require('readdirp');
const electron = require('electron');
const drivelist = require('drivelist');
const Config = require('electron-config');

let mainWindow = null;
let app = electron.app;
let ipc = electron.ipcMain;
let dialog = electron.dialog;
let BrowserWindow = electron.BrowserWindow;
let config = new Config({
        name: 'electron-player-user-preferences',
        pathList: []
    });


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      height: 900,
      width: 1600,
      frame: true,
      resizable: true,
      transparent: false,
      fullscreen: false,
      webPreferences: {
          nodeIntegration: true
      },
      icon: __dirname + '/public/images/player-icon-4.png'
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

/*********************************** IPC Section *****************************************/
let handleDialogOpenRequest = (event) => {
    dialog.showOpenDialog(dialogConfigs, handleFile);

    function handleFile(files) {
        if(files) {
            var path = files.toString();
            handleMetadata(path, function (metadata) {
                var track = buildTrackInfo({fullPath: path}, metadata)
                event.sender.send('selected-track', track);
            });
        }
    }
};

let handleMetadata = (path, callback) => {
    let readableStream = fs.createReadStream(path);
    let parser = mm(readableStream, function (err, metadata) {
        if (err) {
            //console.error(err);
            return
        }
        callback.call(this, metadata);
        readableStream.close();
    });
};

let buildTrackInfo = (entry, metadata) => {
    return {
        info: entry,
        metadata: metadata
    }
};

let dialogConfigs = {
    properties: ['openFile'],
    filters: [
        {name: 'Audio', extensions: ['mp3']}
    ]
};

ipc.on('populate-track-list', function (event, arg) {
    console.log('Got request from UI...');
    getFileReady(event);
});

ipc.on('open-file-dialog', handleDialogOpenRequest);

/*********************************** File Scanning Section *****************************************/
let files = [];
let counter = 0;
let directoryFilter;
let getFileReady = (ipcEvent) => {
    let platform = os.platform();
    let pathList = config.get('pathList');

    if(pathList.length) {
        pathList.forEach((path) => {
            console.log('Started Scanning for files at ', path);
            scanner({
                root: path,
                fileFilter: '*.mp3',
                depth: 4,
                directoryFilter: directoryFilter
            })
            .on('data', (entry) => {
                let filePath = entry.fullPath;
                console.log('Found a file at:', filePath);
                files.push(entry);
                handleMetadata(filePath, (metadata) => {
                    console.log('Metadata counter:', ++counter);
                    var track = buildTrackInfo(entry, metadata);
                    ipcEvent.sender.send('new-track', track);
                });
            })
            .on('end', () =>{
                ipcEvent.sender.send('track-snanning-finished', files.length);
                console.log('Length: ', files.length);
            });
        });
    } else {
        ipcEvent.sender.send('track-scanning-finished', files.length);
    }
};
