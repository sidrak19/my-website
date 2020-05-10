import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

interface IHeaderItem {
  text: string;
  route: string;
}

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: 'white',
});

export const HeaderItem: React.FC<IHeaderItem> = ({ text, route }) => {
  return (
    <StyledNavLink to={route}>
      <Route
        path={route}
        children={({ location }) => 
            location.pathname === route ? <b>{text}</b> : text
        }
      ></Route>
    </StyledNavLink>
  );
};
