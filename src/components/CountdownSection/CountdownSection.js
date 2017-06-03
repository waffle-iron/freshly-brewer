import React from 'react';
import styled from 'styled-components';

import CountdownClock from '../CountdownClock';
import Section from '../Section';

const CountdownSection = ({backgroundImage}) => {
  return (
    <Section backgroundImage={backgroundImage}>
      <CountdownClock />
    </Section>
  )
}

export default CountdownSection;