import React from 'react';
import renderer from 'react-test-renderer';

import LinkButton from './LinkButton';

it('renders correctly', () => {
  const tree = renderer.create(
    <LinkButton>Test</LinkButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
