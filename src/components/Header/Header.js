import React from 'react';
import styled from 'styled-components';

const HeaderCore = ({ className, tag, children }) => {
  const HeaderTag = tag;

  return (
    <HeaderTag className={className}>{children}</HeaderTag>
  )
}

const Header = styled(HeaderCore)`
  margin: 0;
  font-family: "FreightBook", "serif";
  letter-spacing: 3px;  
`

export default Header;