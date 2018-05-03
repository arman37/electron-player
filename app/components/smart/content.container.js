/**
 * @author arman
 * @since 12/31/2016
 *
 */

import React from 'react';
import Audio from '../dumb/audio.component';
import Video from '../dumb/video.component';
import Details from '../dumb/current-track-details.component';

let val = 0;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: true
    };
  }

  componentDidMount() {
    //this.drawSlider();
  }

  componentDidUpdate() {
    val = 1;
    console.log('updated', this.props.playStatus );
    this.drawSlider();
  }

  shouldComponentUpdate() {
    return (this.props.playStatus === 'STOPPED');
  }

  drawSlider(slider) {
    slider = $('#slider__preview__coverflow');

    if (slider && !this.props.tableView) {
      slider.coverflow({
        index:			6,
        density:		2,
        innerOffset:	50,
        innerScale:		.7,
        animateStep:	function(event, cover, offset, isVisible, isMiddle, sin, cos) {
          if (isVisible) {
            if (isMiddle) {
              $(cover).css({
                'filter':			'none',
                '-webkit-filter':	'none'
              });
            } else {
              let brightness	= 1 + Math.abs(sin),
                contrast	= 1 - Math.abs(sin),
                filter		= 'contrast('+contrast+') brightness('+brightness+')';
              $(cover).css({
                'filter':			filter,
                '-webkit-filter':	filter
              });
            }
          }
        }
      });
    }
  }

  handleChange(type) {
    this.setState({
      audio: (type === 'audio')
    });
  };

  render() {
    return (
      <div className="main-content" style={{backgroundImage: `url(${this.props.backgroundImage ? this.props.backgroundImage : 'public/images/background.jpg'})`, backgroundSize: 'contain'}}>
        <div className="switch-button">
          <button onClick={this.handleChange.bind(this, 'audio')} className="btn audio">Audio</button>
          <button onClick={this.handleChange.bind(this, 'video')} className="btn video">Video</button>
        </div>
        <div className="track-details shadow elegant-shadow">
          {
            this.props.metadata ?
              (<Details metadata={this.props.metadata} />)
              :
              ('')
          }
        </div>
        <div className="content__audio__video">
          {this.state.audio ?
            (<Audio
              play={this.props.play}
              stop={this.props.stop}
              total={this.props.total}
              volume={this.props.volume}
              elapsed={this.props.elapsed}
              forward={this.props.forward}
              position={this.props.position}
              backward={this.props.backward}
              trackList={this.props.trackList}
              tableView={this.props.tableView}
              playStatus={this.props.playStatus}
              togglePlay={this.props.togglePlay}
              tbodyHeight={this.props.tbodyHeight}
              random={this.props.random}
              drawSlider={this.drawSlider.bind(this)}
              scanningForTracks={this.props.scanningForTracks}
              handleVolumeUpNDown={this.props.handleVolumeUpNDown}
              handleTrackProgress={this.props.handleTrackProgress}
              handleVolumeProgress={this.props.handleVolumeProgress}/>)
            :
            (<Video/>)
          }
        </div>
      </div>
    );
  }
}

export default Content;