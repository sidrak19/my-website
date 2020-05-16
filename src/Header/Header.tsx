import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { lightGreen } from '../ColorUtils';

const StyledNavbar = styled(Navbar)({
  width: '100%',
  backgroundColor: lightGreen,
  zIndex: 1,
});

const StyledNavbarCollapse = styled(Navbar.Collapse)({
  justifyContent: 'flex-end',
});

const StyledNavbarToggle = styled(Navbar.Toggle)({
  marginLeft: '0',
  backgroundColor: 'white',
});

const StyledNavLink = styled(Nav.Link)({
  color: 'white !important',
  margin: '0 32px 0 16px',
  '@media (max-width: 768px)': {
    margin: '0',
  },
});

export const Header: React.FC = () => {
  return (
    <StyledNavbar expand="lg">
      <StyledNavbarToggle aria-controls="basic-navbar-nav" />
      <StyledNavbarCollapse id="basic-navbar-nav">
        <Nav>
          <StyledNavLink href="/">Home</StyledNavLink>
          <StyledNavLink href="/projects">Projects</StyledNavLink>
          <StyledNavLink href="/resume">Resume</StyledNavLink>
        </Nav>
      </StyledNavbarCollapse>
    </StyledNavbar>
  );
};
