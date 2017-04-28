/**
 * @author arman
 * @since 1/23/17
 *
 */

import React from 'react';
import Player from '../dumb/player.component';
import Slider from 'material-ui/Slider';

let canvas, ctx, radius;

var options = {
    percent:  25,
    size: 120,
    lineWidth: 10,
    rotate: 0
};

class Canvas extends React.Component {

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
        canvas = document.getElementById('can');

        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;
        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        radius = (options.size - options.lineWidth) / 2;

        this.drawCircle('#efefef', options.lineWidth, 100 / 100);
        this.drawCircle('#05b3ca', options.lineWidth, (this.props.position * 100) / 100);
    }

    componentWillReceiveProps() {
        // span.textContent = Math.floor(this.props.percent) + '%';
        this.drawCircle('#efefef', options.lineWidth, 100 / 100);
        this.drawCircle('#05b3ca', options.lineWidth, (this.props.position * 100) / 100);
    }

    render() {
        return (
            <div className="circular-progress">
                <div className="">
                    <div className="">
                        <div className="graph__canvas">
                            <div className="player__backward">
                                <button onClick={this.props.backward} className="btn__material btn__for__back"><div className="btn__backward"></div></button>
                            </div>
                            <div className="circular__section">
                                <canvas id="can"></canvas>
                                <span className="span__canvas">
                                    <Player
                                        togglePlay={this.props.togglePlay}
                                        stop={this.props.stop}
                                        playStatus={this.props.playStatus}
                                        forward={this.props.forward}
                                        backward={this.props.backward}
                                        random={this.props.random}/>
                                </span>
                            </div>
                            <div className="player__forward">
                                <button onClick={this.props.forward} className="btn__material btn__for__back"><div className="btn__forward"></div></button>
                            </div>
                            <div className="volume__control">
                                <i onClick={this.props.handleVolumeUpNDown.bind(null, true, 5)} className="btn__volume volume__up btn__for__back">+</i>
                                <div className="volume__progress">
                                    <Slider
                                        axis="y"
                                        min={0}
                                        max={100}
                                        step={5}
                                        style={{height: 55}}
                                        value={this.props.volume}
                                        onChange={this.props.handleVolumeProgress} />
                                </div>
                                <i onClick={this.props.handleVolumeUpNDown.bind(null, false, 5)} className="btn__volume volume__down btn__for__back">-</i>
                            </div>
                        </div>
                        <div className="progress__control">
                            <div className="elapsed">{this.props.elapsed}</div>
                            <div className="progress__slider">
                                <Slider
                                    step={0.05}
                                    defaultValue={0}
                                    style={{marginTop: '-25px'}}
                                    onChange={this.props.handleTrackProgress}
                                    value={this.props.position ? this.props.position : 0} />
                            </div>
                            <div className="total__duration">{this.props.total}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Canvas;