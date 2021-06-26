import * as React from 'react';
import styled from 'styled-components';
import { smallFontSize } from '../FontUtils';
import { FlexRowCenter } from '../LayoutUtils';

const StyledFooter = styled.footer({
  width: '100%',
  zIndex: 1,
});

const StyledFooterContent = styled(FlexRowCenter)(({theme}) => ({
  height: '64px',
  backgroundColor: theme.footerBackground,
  fontSize: smallFontSize,
  color: theme.footerText,
}));

const StyledLink = styled.a(({theme}) => ({
  color: theme.footerText,
}));

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        © 2021&nbsp;
        <StyledLink href="http://www.sidrakesh.com">
          Siddharth Rakesh
        </StyledLink>
        . All rights reserved.
      </StyledFooterContent>
    </StyledFooter>
  );
};
