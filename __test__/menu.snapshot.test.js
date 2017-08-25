/**
 * @author arman
 * @since 8/25/17
 *
 */

import React from 'react';
import {shallow} from 'enzyme';
import Menu from '../app/components/dumb/menu.component';

test('Menu component renders the menu items correctly', () => {
  const tableView = false;
  const drawerOpen = false;
  const toggleTableView = jest.fn();
  const handleDrawerOpen = jest.fn();
  const handleCatViewChange = jest.fn();

  const wrapper = shallow(
    <Menu
      tableView={tableView}
      drawerOpen={drawerOpen}
      toggleTableView={toggleTableView}
      handleDrawerOpen={handleDrawerOpen}
      handleCatViewChange={handleCatViewChange} />
  );

  expect(wrapper).toMatchSnapshot();
});
