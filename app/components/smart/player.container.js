/**
 * @author arman
 * @since 1/23/17
 *
 */

import React from 'react';
import Player from '../dumb/player.component';

let canvas, ctx, radius;
const options = {
    percent:  25,
    size: 120,
    lineWidth: 10,
    rotate: 0
};

class PlayerController extends React.Component {

    drawCircle(color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };

    componentDidMount() {
        this.initCanvas();
        this.applyCanvas();
    }

    componentWillReceiveProps() {
        this.applyCanvas();
    }

    initCanvas() {
        canvas = document.getElementById('can');
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }
        ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;
        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
        radius = (options.size - options.lineWidth) / 2;
    }

    applyCanvas() {
        this.drawCircle('#efefef', options.lineWidth, 100 / 100);
        this.drawCircle('#05b3ca', options.lineWidth, (this.props.position * 100) / 100);
    }

    render() {
        const {play, togglePlay, stop, playStatus, forward, backward, random, elapsed, total, position, volume, handleVolumeUpNDown, handleTrackProgress, handleVolumeProgress} = this.props;
        return (
            <Player
                play={play}
                stop={stop}
                total={total}
                random={random}
                volume={volume}
                elapsed={elapsed}
                forward={forward}
                position={position}
                backward={backward}
                playStatus={playStatus}
                togglePlay={togglePlay}
                handleVolumeUpNDown={handleVolumeUpNDown}
                handleTrackProgress={handleTrackProgress}
                handleVolumeProgress={handleVolumeProgress} />
        )
    }
}

export default PlayerController;