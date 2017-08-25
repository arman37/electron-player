/**
 * @author arman
 * @since 8/25/17
 *
 */

import React from 'react';
import {shallow} from 'enzyme';
import Header from '../app/components/dumb/header.component';

test('Header component renders menu, title & drawer components inside it correctly', () => {
  const wrapper = shallow(
    <Header
      tableView={false}
      drawerOpen={false}
      toggleTableView={jest.fn()}
      handleDrawerOpen={jest.fn()}
      handleDialogOpen={jest.fn()}
      handleCatViewChange={jest.fn()} />
  );

  expect(wrapper).toMatchSnapshot();
});
