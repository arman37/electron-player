/**
 * @author arman
 * @since 4/13/17
 *
 */

import { connect } from 'react-redux';
import MainContent from '../dumb/main-content.component';
import {handleDialogOpen, handleDrawerOpen, handleCatViewChange, toggleTableView, updateMetadata, addPath, clearPath} from '../../actions';

export const Containers = connect(
    function mapStateToProps(state) {
        return {
            tableView: state.get('tableView'),
            audioView: state.get('audioView'),
            dialogOpen: state.get('dialogOpen'),
            drawerOpen: state.get('drawerOpen'),
            trackMetadata: state.get('trackMetadata'),
            backgroundImage: state.get('backgroundImage'),
            audioTrackList: state.get('audioTrackList'),
            tbodyHeight: state.get('tbodyHeight'),
            scanningForTracks: state.get('scanningForTracks'),
            searchPathList: state.get('searchPathList'),
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addPath: (param) => dispatch(addPath(param)),
            clearPath: (param) => dispatch(clearPath(param)),
            updateMetadata: (param) => dispatch(updateMetadata(param)),
            toggleTableView: (param) => dispatch(toggleTableView(param)),
            handleDialogOpen: (param) => dispatch(handleDialogOpen(param)),
            handleDrawerOpen: (param) => dispatch(handleDrawerOpen(param)),
            handleCatViewChange: (param) => dispatch(handleCatViewChange(param))
        };
    }
)(MainContent);