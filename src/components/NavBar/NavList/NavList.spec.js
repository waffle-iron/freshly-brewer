import React from 'react';
import renderer from 'react-test-renderer';

import NavList from './NavList';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavList>
      Test children
    </NavList>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
