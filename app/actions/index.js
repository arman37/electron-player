/**
 * @author arman
 * @since 4/13/17
 *
 */

import * as Types from '../constants';
const ipc = nodeRequire('electron').ipcRenderer;
const dialog = nodeRequire('electron').remote.dialog;
const config = new (nodeRequire('electron-config'))({name: 'electron-player-user-preferences'});

export const initializeApp = (param) => {
    return (dispatch) => {
        ipc.send('populate-track-list', 'give me initial track list.');
        ipc.on('new-track', function (event, track) {
            console.log(track);
            dispatch(addNewTrack(track));
        });
        dispatch(toggleTrackScanning(true));
        ipc.on('track-scanning-finished', (length) => {
            dispatch(toggleTrackScanning(false));
        });
        window.addEventListener('resize', () => {
            dispatch(updateView());
        });
        dispatch(updateSearchPath(config.get('pathList')));
    }
};

export const toggleTrackScanning = (bol) => {
    return {
        type: Types.TOGGLE_SCANNING,
        payload: bol
    }
};

export const updateSearchPath = (pathList) => {
    return {
        type: Types.UPDATE_SEARCH_PATH,
        payload: pathList
    }
};

export const addNewTrack = (track) => {
    return {
        type: Types.ADD_NEW_TRACK,
        payload: track
    }
};

export const updateMetadata = (track) => {
    return {
        type: Types.UPDATE_METADATA,
        payload: track
    }
};

export const toggleTableView = (bol) => {
    return {
        type: Types.TOGGLE_TABLE_VIEW,
        payload: bol
    }
};

export const addPath = (param) => {
    return (dispatch) => {
        dialog.showOpenDialog({
            properties: ['openDirectory']
        }, (dir) => {
            dispatch(updatePathList(dir.toString()));
        });
    };
};

export const updatePathList = (path) => {
    return {
        type: Types.UPDATE_PATH_LIST,
        payload: path
    }
};

export const clearPath = (param) => {
    return {
        type: Types.CLEAR_PATH_LIST,
        payload: param
    }
};

export const handleDialogOpen = (bol) => {
    return {
        type: Types.HANDLE_DIALOG_OPEN,
        payload: bol
    }
};

export const handleDrawerOpen = (bol) => {
    return {
        type: Types.HANDLE_DRAWER_OPEN,
        payload: bol
    }
};

export const handleCatViewChange = (category) => {
    return {
        type: Types.CHANGE_CATEGORY,
        payload: category
    }
};

export const updateView = () => {
    var viewHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    return {
        type: Types.UPDATE_VIEW,
        payload: (770 / 900) * viewHeight
    }
};