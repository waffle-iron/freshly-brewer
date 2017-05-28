import React from 'react';
import styled from 'styled-components';

import Row from '../Row';
import Col from '../Col';
import Header from '../Header';

import NavList from './NavList';
import NavItem from './NavItem';

const NavBarCore = ({ className }) => {
  return(
    <Row
      className={className}
      middle
    >
      <Col width={6}>
        <Header type={1}>MORGAN & TYLER</Header>
      </Col>
      <Col width={6}>
        <NavList>
          <NavItem>HOME</NavItem>
          <NavItem>CEREMONY</NavItem>
          <NavItem>GALLERY</NavItem>
          <NavItem>PARTY</NavItem>
          <NavItem>FAQ</NavItem>
        </NavList>
      </Col>
    </Row>
  )
}

const NavBar = styled(NavBarCore)`
  height: 100px;
`

export default NavBar;