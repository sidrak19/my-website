import * as React from 'react';
import styled from 'styled-components';
import { Section, FlexColumnCenter } from '../../LayoutUtils';
import { StyledH1, Line } from '../../TextUtils';
import { Avatar } from './Avatar';

const IntroGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gridRowGap: '32px',
});

const NameSection = styled(FlexColumnCenter)({
  textAlign: 'center',
});

export const Intro: React.FC = () => {
  return (
    <Section>
      <IntroGrid>
        <NameSection>
          <Line>Greetings, Traveller. Welcome to</Line>
          <StyledH1>Siddharth Rakesh's personal website</StyledH1>
        </NameSection>
        <FlexColumnCenter>
          <Avatar />
        </FlexColumnCenter>
      </IntroGrid>
    </Section>
  );
};
