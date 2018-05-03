/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import Menu from './menu.component';
import Paper from 'material-ui/Paper';
import Title from './player-title.component';
import CustomDrawer from './custom-drawer.component';

/**
 *
 * @constructor
 */
const Header = ({}) => (
  <Paper zDepth={5} className="header__wrapper">
    <div className="player__header">
      <Menu />
      <Title text="Electron Player" />
      <CustomDrawer />
    </div>
  </Paper>
);

export default Header;
