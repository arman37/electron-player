/**
 * @author arman
 * @since 4/10/17
 *
 */

import React from 'react';
import TableView from '../dumb/table-view.component';
import SlideView from '../smart/coverflow.container';

/**
 *
 * @param tableView
 * @param play
 * @param trackList
 * @param tbodyHeight
 * @param playStatus
 * @returns {XML}
 * @constructor
 */
const TrackListView = ({tableView, play, trackList, tbodyHeight, playStatus}) => {
  return (
    <div style={{height: '100%', width: '100%', left: '0'}}>
      {
        tableView ?
          (<TableView
            play={play}
            trackList={trackList}
            tbodyHeight={tbodyHeight} />)
          :
          (<SlideView
            play={play}
            trackList={trackList}
            playStatus={playStatus}/>)
      }
    </div>
  )
};

export default TrackListView;