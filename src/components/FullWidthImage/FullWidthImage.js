import React from 'react';
import styled from 'styled-components';

const FullWidthImage = styled.div`
  background-image: url(${props => props.src})
  background-size: cover;
  background-position: center;
  height: 800px;
`

export default FullWidthImage;