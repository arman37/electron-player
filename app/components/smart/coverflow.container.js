/**
 * @author arman
 * @since 4/10/17
 *
 */

import React from 'react';
import base64 from 'base64-js';
import Coverflow from 'reactjs-coverflow';
import IconButton from 'material-ui/IconButton';
import {fullWhite} from 'material-ui/styles/colors';
import BtnPlay from 'material-ui/svg-icons/av/play-circle-outline';

const styles = {
    smallIcon: {
        height: 40,
        width: 40
    },
    mediumIcon: {
        width: 48,
        height: 48,
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    small: {
        height: 80,
        width: 80,
        padding: 20
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    },
    large: {
        width: 120,
        height: 120,
        padding: 30,
    },
};

class SlideView extends React.Component {
    constructor(props) {
        super(props);
    }

    goAt(num, e) {
        e.preventDefault();
        this.refs.coverflow.goAt(num);
    }

    shouldComponentUpdate() {
        console.log('updating...');
        if(this.props.playStatus === 'PLAYING') {
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        let {trackList, play} = this.props;
        let listView = trackList.map((track, index) => {
            let image = '';
            let metadata = track.metadata;
            if (metadata.picture.length) {
                image = `data:image/${metadata.picture[0].format};base64,` + base64.fromByteArray(metadata.picture[0].data);
            }

            return(
                <div key={index} className="swipeable" onClick={this.goAt.bind(this, index)}>
                    <div className="track__info" style={{backgroundImage: `url(${image ? image : 'public/images/fire-bird.jpg'})`, backgroundSize: 'cover'}}>
                        <div className="track__content">
                            <IconButton
                                className="track-play"
                                style={styles.small}
                                iconStyle={styles.smallIcon}
                                onClick={play.bind(null, track)} >
                                <BtnPlay color={fullWhite} />
                            </IconButton>
                            <h5>{track.metadata.title}</h5>
                            <h5>{track.metadata.artist}</h5>
                        </div>
                    </div>
                </div>
            )
        });

        return (
        <div id="slider__preview" className="w3-container w3-animate-zoom">
            <Coverflow ref="coverflow"
                       displayQuantityOfSide={5}
                       style={{width: "100vw", height:"100%", left: '-16px'}}
                       margin={(this.state && this.state.margin + "px") || undefined}
                       startPosition={0}
                       enableScroll={true}
                       animationSpeed={0.8}>
                {
                    listView
                }
            </Coverflow>
        </div>
        );
    }
}

export default SlideView;