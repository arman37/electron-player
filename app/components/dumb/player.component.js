/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import ClassNames from 'classnames';
import Slider from 'material-ui/Slider';

/**
 *
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
const Player = ({play, togglePlay, stop, playStatus, forward, backward, random, elapsed, total, position, volume, handleVolumeUpNDown, handleTrackProgress, handleVolumeProgress}) => {
  const playPauseClass = ClassNames({
    'btn__play': !(playStatus === 'PLAYING'),
    'btn__pause': (playStatus === 'PLAYING')
  });

  return (
    <div className="circular__progress">
      <div className="">
        <div className="">
          <div className="graph__canvas">
            <div className="player__backward">
              <button onClick={backward} className="btn__material btn__for__back"><div className="btn__backward"></div></button>
            </div>
            <div className="circular__section">
              <canvas id="can"></canvas>
              <span className="span__canvas">
                <div className="player">
                  <div className="player__main">
                    <button onClick={togglePlay} className="btn__material"><span className={playPauseClass}></span></button>
                    <button onClick={stop} className="btn__material"><span className="btn__stop"></span></button>
                    <button onClick={random} className="btn__material"><span className="btn__shuffle"></span></button>
                  </div>
                </div>
              </span>
            </div>
            <div className="player__forward">
              <button onClick={forward} className="btn__material btn__for__back"><div className="btn__forward"></div></button>
            </div>
            <div className="volume__control">
              <i onClick={handleVolumeUpNDown.bind(null, true, 5)} className="btn__volume volume__up btn__for__back">+</i>
              <div className="volume__progress">
                <Slider
                  axis="y"
                  min={0}
                  max={100}
                  step={5}
                  style={{height: 55}}
                  value={volume}
                  onChange={handleVolumeProgress} />
              </div>
              <i onClick={handleVolumeUpNDown.bind(null, false, 5)} className="btn__volume volume__down btn__for__back">-</i>
            </div>
          </div>
          <div className="progress__control">
            <div className="elapsed">{elapsed}</div>
            <div className="progress__slider">
              <Slider
                step={0.05}
                defaultValue={0}
                style={{marginTop: '-25px'}}
                onChange={handleTrackProgress}
                value={position ? position : 0} />
            </div>
            <div className="total__duration">{total}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Player;
