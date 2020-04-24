import * as React from 'react';
import styled from 'styled-components';
import { FlexRow, Section } from '../LayoutUtils';
import { HeaderItem } from './HeaderItem';

const StyledHeaderRow = styled(FlexRow)({
  justifyContent: 'flex-end',
});

export const Header: React.FC = () => {
  return (
    <Section>
      <StyledHeaderRow>
        <HeaderItem text="About" route="/" />
        <HeaderItem text="Resume" route="/resume" />
        <HeaderItem text="Projects" route="/projects" />
      </StyledHeaderRow>
    </Section>
  );
};
