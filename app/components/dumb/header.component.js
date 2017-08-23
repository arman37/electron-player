/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import Menu from './menu.component';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import Title from './player-title.component';
import FlatButton from 'material-ui/FlatButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import LibMusic from 'material-ui/svg-icons/av/library-music';

const Header = ({drawerOpen, tableView, toggleTableView, handleDrawerOpen, handleDialogOpen, handleCatViewChange}) => {
    return (
        <Paper zDepth={5} className="header__wrapper">
            <div className="player__header">
                <Menu
                    tableView={tableView}
                    drawerOpen={drawerOpen}
                    toggleTableView={toggleTableView}
                    handleDrawerOpen={handleDrawerOpen}
                    handleCatViewChange={handleCatViewChange} />
                <Title text="Electron Player" />
                <Drawer
                    width={200}
                    openSecondary={true}
                    open={drawerOpen}
                    docked={false}
                    onRequestChange={handleDrawerOpen} >
                    <FlatButton
                        label="Cancel"
                        icon={<Cancel />}
                        labelPosition="before"
                        style={{width: '100%', textAlign: 'left'}}
                        onClick={handleDrawerOpen.bind(null, false)} />
                    <FlatButton
                        icon={<LibMusic />}
                        label="Music Library"
                        labelPosition="before"
                        style={{width: '100%', textAlign: 'left'}}
                        onClick={handleDialogOpen.bind(null, true)} />
                </Drawer>
            </div>
        </Paper>
    )
};

export default Header;
