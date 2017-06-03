import React from 'react';
import renderer from 'react-test-renderer';

import NavItem from './NavItem';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavItem>Test item</NavItem>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
