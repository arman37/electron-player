/**
 * @author arman
 * @since 8/23/17
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from '../app/components/dumb/menu.component';

test('Menu component renders the menu items inside it', () => {
  const tableView = false;
  const drawerOpen = false;
  const toggleTableView = jest.fn();
  const handleDrawerOpen = jest.fn();
  const handleCatViewChange = jest.fn();

  const wrapper = mount(
    <MuiThemeProvider>
      <Menu
        tableView={tableView}
        drawerOpen={drawerOpen}
        toggleTableView={toggleTableView}
        handleDrawerOpen={handleDrawerOpen}
        handleCatViewChange={handleCatViewChange} />
    </MuiThemeProvider>
  );

  const btnSetting = wrapper.find('.settings button');
  const btnAudio = wrapper.find('.audio__library button');
  const btnVideo = wrapper.find('.video__library button');

  btnSetting.simulate('click');
  expect(handleDrawerOpen).toBeCalledWith(!drawerOpen, expect.anything());

  btnAudio.simulate('click');
  expect(handleCatViewChange).toBeCalledWith('audio', expect.anything());

  btnVideo.simulate('click');
  expect(handleCatViewChange).toBeCalledWith('video', expect.anything());

});