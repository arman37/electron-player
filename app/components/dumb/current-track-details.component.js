/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import { connect } from "react-redux";

let mapStateToProps = state => ({
  metadata: state.get('trackMetadata')
});

/**
 *
 * @param {object} metadata
 * @constructor
 */
const CurrentTrackDetails = ({metadata}) => (
  <div className="track__details shadow elegant-shadow">
    {
      metadata ?
        (<marquee><span className="marquee"><b>Track</b>: {metadata.title}, <b>Artist</b>: {metadata.artist}, <b>Album</b>: {metadata.album}</span></marquee>)
        :
        ('')
    }
  </div>
);

export default connect(
  mapStateToProps,
  null
)(CurrentTrackDetails);
