/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';

const Details = ({metadata}) => {
    return (
        <marquee><span className="marquee"><b>Track</b>: {metadata.title}, <b>Artist</b>: {metadata.artist}, <b>Album</b>: {metadata.album}</span></marquee>
    )
};

export default Details;