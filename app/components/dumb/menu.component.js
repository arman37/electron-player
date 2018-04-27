/**
 * @author arman
 * @since 4/28/17
 *
 */

import React from 'react';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Settings from 'material-ui/svg-icons/action/settings';
import Audio from 'material-ui/svg-icons/av/library-music';
import Video from 'material-ui/svg-icons/av/video-library';

const btnStyle = {
    marginTop: '2.2px',
    marginLeft: '0.3px'
};

const Menu = ({tableView, drawerOpen, toggleTableView, handleDrawerOpen, handleCatViewChange}) => {
  return (
    <nav className="menu">
      <input type="checkbox" href="#" className="menu__open" name="menu__open" id="menu__open" />
      <label className="menu__open__button" htmlFor="menu__open">
        <span className="menu__icon menu__icon-1"></span>
        <span className="menu__icon menu__icon-2"></span>
        <span className="menu__icon menu__icon-3"></span>
      </label>

      <a href="#" className="menu__item settings" title="Settings">
        <FloatingActionButton
          mini={true}
          style={btnStyle}
          onClick={handleDrawerOpen.bind(null, !drawerOpen)} >
          <Settings />
        </FloatingActionButton>
      </a>
      <a href="#" className="menu__item audio__library" title="Audio Library">
        <FloatingActionButton
          mini={true}
          style={btnStyle}
          onClick={handleCatViewChange.bind(null, 'audio')} >
          <Audio />
        </FloatingActionButton>
      </a>
      <a href="#" className="menu__item video__library" title="Video Library">
        <FloatingActionButton
          mini={true}
          style={btnStyle}
          onClick={handleCatViewChange.bind(null, 'video')} >
          <Video />
        </FloatingActionButton>
      </a>
      <a href="#" className="menu__item" style={{backgroundColor: 'white', textAlign: 'center'}} title="Switch View">
        <div className="btn__change__view" style={{margin: '10px 5px auto auto'}}>
          <Toggle
              defaultToggled={!tableView}
              style={{width: '10px', float: 'right'}}
              onToggle={toggleTableView} />
        </div>
      </a>
    </nav>
  );
};

export default Menu;