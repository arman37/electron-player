/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import Open from '../dumb/open.component';
import Player from '../dumb/player.component';
import Progress from '../dumb/progress.component';

const Footer = ({togglePlay, stop, playStatus, forward, backward, random, elapsed, total, position, handleOpen}) => {
    return (
        <div className="player-footer electron__player">
            <Progress
                elapsed={elapsed}
                total={total}
                position={position} />
            <Player
                togglePlay={togglePlay}
                stop={stop}
                playStatus={playStatus}
                forward={forward}
                backward={backward}
                random={random}/>
            <Open
                handleOpen={handleOpen} />
        </div>
    )
};

export default Footer;
