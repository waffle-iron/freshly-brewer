import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import BodyText from '../BodyText';

const DescriptionTextCore = ({header, subHeader, align, className, children }) => {
  return (
    <div className={className}>
      <Header tag="h1">{header}</Header>
      <Header tag="h1">{subHeader}</Header>
      <BodyText>{children}</BodyText>
    </div>
  )
}

const DescriptionText = styled(DescriptionTextCore)`
  text-align: ${props => props.align}
`

export default DescriptionText;
