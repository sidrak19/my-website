import * as React from 'react';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { FlexExpand } from '../LayoutUtils';
import { ThemeSwitcher } from '../Themes/ThemeSwitcher';
import { useLocation } from 'react-router-dom';

const StyledNavbar = styled(Navbar)(({theme}) => ({
  width: '100%',
  backgroundColor: theme.headerBackground,
  zIndex: 100001,
}));

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

const StyledBrand = styled(Navbar.Brand)(({theme}) => ({
  fontWeight: 'bold',
  color: `${theme.brandColor} !important`,
  marginLeft: '32px',
}));

const StyledNavbarCollapse = styled(Navbar.Collapse)({
  flexGrow: 0,
});

export const Header: React.FC = () => {
  const {pathname} = useLocation();

  return (
    <StyledNavbar expand="lg">
      <StyledBrand href="/">{'<Siddharth />'}</StyledBrand>
      <FlexExpand />
      <ThemeSwitcher />
      <StyledNavbarToggle aria-controls="basic-navbar-nav" />
      <StyledNavbarCollapse id="basic-navbar-nav">
        <Nav activeKey={pathname}>
          <StyledNavLink href="/">Home</StyledNavLink>
          <StyledNavLink href="/projects">Projects</StyledNavLink>
          <StyledNavLink href="/resume">Resume</StyledNavLink>
        </Nav>
      </StyledNavbarCollapse>
    </StyledNavbar>
  );
};
