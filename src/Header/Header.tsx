import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { lightestSky } from '../ColorUtils';

const StyledNavbar = styled(Navbar)({
  width: '100%',
  marginBottom: '32px',
  backgroundColor: lightestSky,
});

const StyledNavbarCollapse = styled(Navbar.Collapse)({
  justifyContent: 'flex-end',
});

const StyledNavbarToggle = styled(Navbar.Toggle)({
  marginLeft: '16px',
});

const StyledNavLink = styled(Nav.Link)({
  margin: '0 32px 0 16px',
});

export const Header: React.FC = () => {
  return (
    <StyledNavbar expand="lg">
      <StyledNavbarToggle aria-controls="basic-navbar-nav" />
      <StyledNavbarCollapse id="basic-navbar-nav">
        <Nav>
          <StyledNavLink href="/">Home</StyledNavLink>
          {/* <StyledNavLink href="resume">Resume</StyledNavLink> */}
          {/* <StyledNavLink href="projects">Projects</StyledNavLink> */}
        </Nav>
      </StyledNavbarCollapse>
    </StyledNavbar>
  );
};
