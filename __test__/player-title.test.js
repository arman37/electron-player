/**
 * @author arman
 * @since 8/23/17
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import Title from '../app/components/dumb/player-title.component';

test('titleComponent renders the title text inside it', () => {
  let text = 'Electron Player';
  const wrapper = mount(
    <Title text={text} />
  );
  const h = wrapper.find('.title');
  expect(h.text()).toBe(text);
});