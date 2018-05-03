/**
 * @author arman
 * @since 4/10/17
 *
 */

import React from 'react';
import base64 from 'base64-js';
import Coverflow from 'react-coverflow';

/**
 *
 * @param trackList
 * @returns {XML}
 * @constructor
 */
const Slider = ({trackList}) => {

  let listView = trackList.map((track, index) => {
    let image = '';
    let metadata = track.metadata;
    if (metadata.picture.length) {
      image = `data:image/${metadata.picture[0].format};base64,` + base64.fromByteArray(metadata.picture[0].data);
    }

    return (
      <img key={index} src={`${image ? image : 'public/images/background.jpg'}`} alt='title or description'/>
    )
  });

  return (
    <Coverflow width="960" height="500"
               displayQuantityOfSide={2}
               navigation={true}
               enableScroll={true}
               clickable={true}
               active={0} >
      {listView}
    </Coverflow>
  );
};

export default Slider;