import React from 'react';
import styled from 'styled-components';

import LargeText from '../LargeText';

import ClockText from './ClockText'

const CountdownClockCore = ({ className }) => {
  return(
    <section className={className}>
      <LargeText color="white">December 2nd, 2017</LargeText>
      <ClockText />
    </section>
  )
}

const CountdownClock = styled(CountdownClockCore)`
  text-align: center;
`

export default CountdownClock;