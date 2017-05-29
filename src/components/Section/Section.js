import React from 'react';
import styled from 'styled-components';

const SectionCore = ({className, children, backgroundImage }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

const Section = styled(SectionCore)`
  padding: 120px 0;
  background-image: url(${props => props.backgroundImage});
  text-align: ${props => props.centered ? 'center' : ''};
  background-size: cover;
  background-position: center;
`

export default Section;