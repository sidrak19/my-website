import * as React from 'react';
import * as H from 'history';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { lightGreen } from '../ColorUtils';
import { FlexExpand } from '../LayoutUtils';

const StyledNavbar = styled(Navbar)({
  width: '100%',
  backgroundColor: lightGreen,
  zIndex: 100,
});

const StyledNavbarToggle = styled(Navbar.Toggle)({
  marginLeft: '0',
  backgroundColor: 'aliceblue',
  ':focus': {
    outline: 'none',
  },
});

const StyledNavLink = styled(Nav.Link)({
  color: 'white !important',
  margin: '0 32px 0 16px',
  '@media (max-width: 768px)': {
    margin: '0',
  },
});

const StyledBrand = styled(Navbar.Brand)({
  fontWeight: 'bold',
});

const StyledNavbarCollapse = styled(Navbar.Collapse)({
  flexGrow: 0,
});

interface IHeader {
  location: H.Location;
}

export const Header: React.FC<IHeader> = ({ location }) => {
  return (
    <StyledNavbar expand="lg">
      <StyledBrand href="/">{'<Siddharth />'}</StyledBrand>
      <FlexExpand />
      <StyledNavbarToggle aria-controls="basic-navbar-nav" />
      <StyledNavbarCollapse id="basic-navbar-nav">
        <Nav activeKey={location.pathname}>
          <StyledNavLink href="/">Home</StyledNavLink>
          <StyledNavLink href="/projects">Projects</StyledNavLink>
          <StyledNavLink href="/resume">Resume</StyledNavLink>
        </Nav>
      </StyledNavbarCollapse>
    </StyledNavbar>
  );
};
