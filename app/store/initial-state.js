/**
 * @author arman
 * @since 5/3/18
 *
 */

import { List, Map } from 'immutable';

const initialState = Map({
  audioView: true,
  tableView: false,
  dialogOpen: false,
  drawerOpen: false,
  trackMetadata: null,
  backgroundImage: '',
  audioTrackList: List.of(),
  tbodyHeight: '680px',
  scanningForTracks: false,
  searchPathList: List.of()
});

export default initialState;