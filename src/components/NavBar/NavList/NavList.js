import React from 'react';
import styled from 'styled-components';

const NavListCore = ({ className, children }) => {
  return(
    <ul className={className}>
      {children}
    </ul>
  )
}

const NavList = styled(NavListCore)`
  float: right;
  font-family: 'AvenirNextBold', 'Helvetica', 'sans-serif';
`

export default NavList;