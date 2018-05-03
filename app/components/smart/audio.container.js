/**
 * @author arman
 * @since 1/27/17
 *
 */

import React from 'react';
import base64 from 'base64-js';
import Sound from 'react-sound';
import Audio from '../dumb/audio.component';

class AudioController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 70,
      position: 0,
      totalInSec: 0,
      total: '00:00',
      elapsed: '00:00',
      currentTrack: {},
      playFromPosition: 0,
      playStatus: Sound.status.STOPPED
    };
  }

  formatMilliseconds(milliseconds) {
    let hours, minutes, seconds;
    hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;
    minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;
    seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? '0' : '') + minutes + ':' +
      (seconds < 10 ? '0' : '') + seconds;
  }

  togglePlay() {
    if (this.state.playStatus === Sound.status.PLAYING) {
      this.setState({playStatus: Sound.status.PAUSED})
    } else {
      this.setState({playStatus: Sound.status.PLAYING})
    }
  }

  stop() {
    this.setState({playStatus: Sound.status.STOPPED});
  }

  forward() {
    this.setState({playFromPosition: this.state.playFromPosition+=1000*10});
  }

  backward() {
    this.setState({playFromPosition: this.state.playFromPosition-=1000*10});
  }

  handleSongPlaying(audio) {
    this.setState({
        totalInSec: audio.duration,
        elapsed: this.formatMilliseconds(audio.position),
        total: this.formatMilliseconds(audio.duration),
        position: audio.position / audio.duration
      }
    );
  }

  handleSongFinished() {
    this.handleRandomSelect();
  }

  handleRandomSelect() {
    let trackNum, track;
    trackNum = this.getRandomTrackNum(0, this.props.trackList.size);
    track = this.props.trackList.get(trackNum);
    this.playNewTrack(track);
  }

  getRandomTrackNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  playNewTrack(track) {
    this.setState({
      currentTrack: track,
      playStatus: Sound.status.PLAYING
    });

    this.props.updateMetadata.call(null, track);
  }

  handleTrackProgress(evt, value) {
    let newPosition = (this.state.totalInSec * value * 100) / 100;
    this.setState({playFromPosition: newPosition });
  }

  handleVolumeProgress(evt, value) {
    this.setState({volume: value});
  }

  handleVolumeUpNDown(up, value) {
    let oldVolume = this.state.volume;

    if (up && oldVolume < 100) {
      this.setState({volume: oldVolume + value})
    } else if(oldVolume > 0) {
      this.setState({volume: oldVolume - value})
    }
  }

  play(track) {
    this.playNewTrack(track);
  }

  render() {
    return (
      <div className="container__audio__data">
        <Sound
          volume={this.state.volume}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying.bind(this)}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished.bind(this)}
          url={this.state.currentTrack.info ? this.state.currentTrack.info.fullPath : ''} />
        <Audio
          total={this.state.total}
          volume={this.state.volume}
          play={this.play.bind(this)}
          stop={this.stop.bind(this)}
          elapsed={this.state.elapsed}
          position={this.state.position}
          trackList={this.props.trackList}
          tableView={this.props.tableView}
          forward={this.forward.bind(this)}
          playStatus={this.state.playStatus}
          backward={this.backward.bind(this)}
          tbodyHeight={this.props.tbodyHeight}
          togglePlay={this.togglePlay.bind(this)}
          random={this.handleRandomSelect.bind(this)}
          scanningForTracks={this.props.scanningForTracks}
          handleVolumeUpNDown={this.handleVolumeUpNDown.bind(this)}
          handleTrackProgress={this.handleTrackProgress.bind(this)}
          handleVolumeProgress={this.handleVolumeProgress.bind(this)} />
      </div>
    )
  }
}

export default AudioController;