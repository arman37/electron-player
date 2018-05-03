/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';

/**
 *
 * @param elapsed
 * @param position
 * @param total
 * @returns {XML}
 * @constructor
 */
const Progress = ({elapsed, position, total}) => {
  return(
    <div className="progress">
      <span className="player__time-elapsed">{elapsed}</span>
      <progress
        value={position}
        max="1"></progress>
      <span className="player__time-total">{total}</span>
    </div>
  )
};

export default Progress;