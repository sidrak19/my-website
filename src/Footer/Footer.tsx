import * as React from 'react';
import styled from 'styled-components';
import { lightGreen } from '../ColorUtils';
import { smallFontSize } from '../FontUtils';
import { FlexRowCenter } from '../LayoutUtils';

const StyledFooter = styled.footer({
  width: '100%',
});

const StyledFooterContent = styled(FlexRowCenter)({
  height: '64px',
  backgroundColor: lightGreen,
  fontSize: smallFontSize,
  color: 'white',
});

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        © 2020&nbsp;<a href="http://www.sidrakesh.com">Siddharth Rakesh</a>. All rights reserved.
      </StyledFooterContent>
    </StyledFooter>
  );
};
