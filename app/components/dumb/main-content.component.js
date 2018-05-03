/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import Header from './header.component';
import MediaList from './media-list.component';
import AddLibrary from './add-library.component';
import CurrentTrackDetails from './current-track-details.component';

/**
 *
 * @constructor
 */
const MainContent = ({}) => (
  <div className="main__content">
    <Header />
    <AddLibrary />
    <div className="content__holder">
      <div className="content__header">
        <CurrentTrackDetails />
      </div>
      <MediaList />
    </div>
  </div>
);

export default MainContent;