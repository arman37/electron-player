/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import Details from '../dumb/details.component';
import Header from '../dumb/header.component';
import AudioController from '../smart/audio.container';
import VideoController from '../dumb/video.component';
import AddLibrary from '../dumb/add-library.component';

const MainContent = ({tableView, audioView, audioTrackList, addPath, toggleTableView, dialogOpen, drawerOpen, trackMetadata, tbodyHeight, clearPath, searchPathList, backgroundImage, updateMetadata, handleClose, scanningForTracks, handleViewChange, handleDialogOpen, handleDrawerOpen, handleCatViewChange}) => {
  return (
    <div className="main__content">
      <Header />
      <AddLibrary />
      <div className="content__holder">
        <div className="content__header">
          <div className="switch__button__group">

          </div>
          <div className="track__details shadow elegant-shadow">
            {
              trackMetadata ?
                (<Details metadata={trackMetadata} />)
                :
                ('')
            }
          </div>
        </div>
        <div className="content__audio__video" style={{backgroundImage: `url(${backgroundImage ? backgroundImage : (Math.round(Math.random()) === 1 ? 'public/images/fire.jpg' : 'public/images/music-woman.jpg') })`, backgroundSize: 'contain'}}>
          {
            audioView ?
              (<AudioController
                tableView={tableView}
                tbodyHeight={tbodyHeight}
                trackList={audioTrackList}
                updateMetadata={updateMetadata} />)
              :
              (<VideoController/>)
          }
        </div>
      </div>
    </div>
  )
};

export default MainContent;