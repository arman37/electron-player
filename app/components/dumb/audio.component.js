/**
 * @author arman
 * @since 12/31/2016
 *
 */

import React from 'react';
import DataList from '../smart/data-list.container';
import PlayerController from '../smart/player.container';
import TrackListView from '../dumb/track-list-view.component';
import CircularProgress from 'material-ui/CircularProgress';

/**
 *
 * @param tableView
 * @param trackList
 * @param scanningForTracks
 * @param tbodyHeight
 * @param play
 * @param togglePlay
 * @param stop
 * @param playStatus
 * @param forward
 * @param backward
 * @param random
 * @param elapsed
 * @param total
 * @param position
 * @param volume
 * @param handleVolumeUpNDown
 * @param handleTrackProgress
 * @param handleVolumeProgress
 * @returns {XML}
 * @constructor
 */
const Audio = ({tableView, trackList, scanningForTracks, tbodyHeight, play, togglePlay, stop, playStatus, forward, backward, random, elapsed, total, position, volume, handleVolumeUpNDown, handleTrackProgress, handleVolumeProgress}) => {
  return (
    <div id="audio" className="w3-container w3-animate-zoom table-view">
      <TrackListView
        play={play}
        tableView={tableView}
        trackList={trackList}
        playStatus={playStatus}
        tbodyHeight={tbodyHeight} />
      {/*{*/}
      {/*scanningForTracks ?*/}
      {/*(<div className="track-listing-progress">*/}
      {/*<CircularProgress />*/}
      {/*</div>)*/}
      {/*:*/}
      {/*('')*/}
      {/*}*/}
      <PlayerController
        play={play}
        stop={stop}
        total={total}
        random={random}
        volume={volume}
        elapsed={elapsed}
        forward={forward}
        position={position}
        backward={backward}
        trackList={trackList}
        playStatus={playStatus}
        togglePlay={togglePlay}
        handleVolumeUpNDown={handleVolumeUpNDown}
        handleTrackProgress={handleTrackProgress}
        handleVolumeProgress={handleVolumeProgress} />
    </div>
  )
};

export default Audio;