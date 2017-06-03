import React from 'react';
import renderer from 'react-test-renderer';

import RSVPSection from './RSVPSection';

it('renders correctly', () => {
  const tree = renderer.create(
    <RSVPSection />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
