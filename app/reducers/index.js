/**
 * @author arman
 * @since 4/13/17
 *
 */

import base64 from 'base64-js';
import { List, Map } from 'immutable';
import * as Types from '../constants';
import initialState from '../store/initial-state';
const config = new (nodeRequire('electron-config'))({name: 'electron-player-user-preferences'});

export default function(state = initialState, action) {
    switch(action.type) {
        case Types.ADD_NEW_TRACK:
            return state.set('audioTrackList', state.get('audioTrackList').push(action.payload));

        case Types.UPDATE_METADATA:
            let image = '';
            let metadata = action.payload.metadata;
            if(metadata.picture.length) {
                image = `data:image/${metadata.picture[0].format};base64,` + base64.fromByteArray(metadata.picture[0].data);
            }
            return state
                    .set('backgroundImage', image)
                    .set('trackMetadata', metadata);

        case Types.CHANGE_CATEGORY:
            return state.set('audioView', action.payload === 'audio');

        case Types.TOGGLE_TABLE_VIEW:
            return state.set('tableView', !state.get('tableView'));

        case Types.UPDATE_SEARCH_PATH:
            return state.set('searchPathList', List.of(action.payload));

        case Types.UPDATE_VIEW:
            return state.set('tbodyHeight', action.payload);

        case Types.TOGGLE_SCANNING:
            return state.set('scanningForTracks', action.payload);

        case Types.HANDLE_DIALOG_OPEN:
            return state.set('dialogOpen', action.payload);

        case Types.HANDLE_DRAWER_OPEN:
            return state.set('drawerOpen', action.payload);

        case Types.UPDATE_PATH_LIST:
            let newState = state.get('searchPathList').push(action.payload);
            config.set('pathList', newState.toJS());
            return newState;

        case Types.CLEAR_PATH_LIST:
            config.set('pathList', state.searchPathList.toJS());
            return state.set('searchPathList', state.get('searchPathList').clear());

        default:
            return state;
    }
}