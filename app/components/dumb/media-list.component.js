/**
 * @author arman
 * @since 5/3/18
 *
 */

import React from 'react';
import { connect } from "react-redux";
import VideoController from './video.component';
import AudioController from '../smart/audio.container';
import { updateMetadata } from '../../actions';

let mapStateToProps = state => ({
  tableView: state.get('tableView'),
  audioView: state.get('audioView'),
  backgroundImage: state.get('backgroundImage'),
  audioTrackList: state.get('audioTrackList'),
  tbodyHeight: state.get('tbodyHeight')
});

let mapDispatchToProps = dispatch => ({
  updateMetadata: (param) => dispatch(updateMetadata(param))
});

/**
 *
 * @param {boolean} tableView
 * @param {boolean} audioView
 * @param {array} audioTrackList
 * @param {number} tbodyHeight
 * @param {object} backgroundImage
 * @param {function} updateMetadata
 * @constructor
 */
const MediaList = ({ tableView, audioView, audioTrackList, tbodyHeight, backgroundImage, updateMetadata }) => (
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
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaList);