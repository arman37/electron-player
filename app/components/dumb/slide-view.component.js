/**
 * @author arman
 * @since 1/26/17
 *
 */

import React from 'react';
import base64 from 'base64-js';
import IconButton from 'material-ui/IconButton';
import {fullWhite} from 'material-ui/styles/colors';
import BtnPlay from 'material-ui/svg-icons/av/play-circle-outline';

const styles = {
    mediumIcon: {
        width: 48,
        height: 48,
    },
    largeIcon: {
        width: 60,
        height: 60,
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

const SlideView = ({play, trackList, drawSlider}) => {
    console.log('called...');
    let listView = trackList.map((track, index) => {
        let image = '';
        let metadata = track.metadata;
        if(metadata.picture.length) {
            image = `data:image/${metadata.picture[0].format};base64,` + base64.fromByteArray(metadata.picture[0].data);
        }
        return(
            <div key={index} className="swipabble">
                <div className="track__info" style={{backgroundImage: `url(${image ? image : 'public/images/background.jpg'})`, backgroundSize: 'cover'}}>
                    <div className="track__content">
                        <IconButton
                            className="track-play"
                            style={styles.medium}
                            iconStyle={styles.mediumIcon}
                            onClick={play.bind(null, track)} >
                            <BtnPlay color={fullWhite} />
                        </IconButton>
                        <h3>{track.metadata.title}</h3>
                        <h4>{track.metadata.artist}</h4>
                        <h4>{track.metadata.album}</h4>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div id="slider__preview" className="w3-container w3-animate-bottom">
            <div id="slider__preview__coverflow">
                {
                    listView
                }
            </div>
        </div>
    )
};

export default SlideView;
