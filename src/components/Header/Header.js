import React from 'react';
import styled from 'styled-components';

const HeaderCore = ({ className, type, children }) => {
  const HeaderTag = `h${type}`;

  return (
    <HeaderTag className={className}>{children}</HeaderTag>
  )
}

const Header = styled(HeaderCore)`
  margin: 0;
  font-family: "Freight-Book", "serif";
  letter-spacing: 3px;  
`

export default Header;