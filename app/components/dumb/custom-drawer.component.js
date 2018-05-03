/**
 * @author arman
 * @since 5/3/18
 *
 */

import React from 'react';
import { connect } from "react-redux";
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import LibMusic from 'material-ui/svg-icons/av/library-music';
import { handleDialogOpen, handleDrawerOpen } from '../../actions';

let mapStateToProps = state => ({
  drawerOpen: state.get('drawerOpen')
});

let mapDispatchToProps = dispatch => ({
  handleDrawerOpen: (param) => dispatch(handleDrawerOpen(param)),
  handleDialogOpen: (param) => dispatch(handleDialogOpen(param))
});

/**
 *
 * @param {boolean} drawerOpen
 * @param {function} handleDrawerOpen
 * @param {function} handleDialogOpen
 * @constructor
 */
const CustomDrawer = ({drawerOpen, handleDrawerOpen, handleDialogOpen}) => (
  <Drawer
    width={200}
    docked={false}
    open={drawerOpen}
    openSecondary={true}
    onRequestChange={handleDrawerOpen} >
    <FlatButton
      label="Cancel"
      icon={<Cancel />}
      labelPosition="before"
      className='drawer__hide'
      style={{width: '100%', textAlign: 'left'}}
      onClick={handleDrawerOpen.bind(null, false)} />
    <FlatButton
      icon={<LibMusic />}
      label="Music Library"
      labelPosition="before"
      className='open__library__dialog'
      style={{width: '100%', textAlign: 'left'}}
      onClick={handleDialogOpen.bind(null, true)} />
  </Drawer>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawer);