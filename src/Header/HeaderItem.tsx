import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lightestSky } from '../ColorUtils';
import { FlexRowCenter } from '../LayoutUtils';

interface IHeaderItem {
  text: string;
  route: string;
}

const StyledHeaderItem = styled(FlexRowCenter)({
  width: '150px',
  height: '100px',
  '&:hover': {
    backgroundColor: lightestSky,
    color: 'black',
  },
});

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: 'white',
});

export const HeaderItem: React.FC<IHeaderItem> = ({ text, route }) => {
  return (
    <StyledNavLink to={route}>
      <StyledHeaderItem>{text}</StyledHeaderItem>
    </StyledNavLink>
  );
};
