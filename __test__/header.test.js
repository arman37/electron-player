/**
 * @author arman
 * @since 8/25/17
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import Header from '../app/components/dumb/header.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('Header component renders menu, title & drawer components inside it', () => {
  const handleDrawerOpen = jest.fn();
  const handleDialogOpen = jest.fn();

  const wrapper = mount(
    <MuiThemeProvider>
      <Header
        tableView={false}
        drawerOpen={false}
        toggleTableView={jest.fn()}
        handleCatViewChange={jest.fn()}
        handleDrawerOpen={handleDrawerOpen}
        handleDialogOpen={handleDialogOpen} />
    </MuiThemeProvider>
  );

  const btnDrawerClose = wrapper.find('.player__header .drawer__hide button');
  const btnOpenLibrary = wrapper.find('.player__header .open__library__dialog button');

  btnDrawerClose.simulate('click');
  expect(handleDrawerOpen).toBeCalledWith(false, expect.anything());

  btnOpenLibrary.simulate('click');
  expect(handleDialogOpen).toBeCalledWith(true, expect.anything());

});