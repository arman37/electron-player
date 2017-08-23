/**
 * @author arman
 * @since 8/23/17
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../app/components/dumb/player-title.component';

test('Title component renders the title correctly', () => {
  const rendered = renderer.create(
    <Title text="Electron Player" />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
