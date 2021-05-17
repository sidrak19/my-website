import * as React from 'react';
import styled from 'styled-components';
import { lightGreen } from '../ColorUtils';
import { smallFontSize } from '../FontUtils';
import { FlexRowCenter } from '../LayoutUtils';

const StyledFooter = styled.footer({
  width: '100%',
  zIndex: 1,
});

const StyledFooterContent = styled(FlexRowCenter)({
  height: '64px',
  backgroundColor: lightGreen,
  fontSize: smallFontSize,
  color: 'black',
});

const StyledLink = styled.a({
  color: 'black',
});

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
