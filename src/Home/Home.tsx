import * as React from 'react';
import styled from 'styled-components';
import { largeFontSize } from '../FontUtils';
import { FlexRow, LightSection, SectionContent } from '../LayoutUtils';
import profilepic from '../static/profilepic.jpg';

const StyledImg = styled.img({
  borderRadius: '50%',
  marginLeft: '32px',
  minWidth: '250px',
});

const StyledHeader = styled.h1({
  fontSize: largeFontSize,
});

export const Home: React.FC = () => {
  return (
    <LightSection>
      <SectionContent>
        <FlexRow>
          <article>
            <StyledHeader>Hey there!</StyledHeader>
            <p>
              I'm Siddharth, an experienced web developer and user interface
              design enthusiast. Adept in the design, installation, testing and
              maintenance of web systems.
            </p>
            <p>I'm a sketching and gaming fan as well.</p>
          </article>
          <StyledImg src={profilepic} alt="profile pic" width="250px" />
        </FlexRow>
      </SectionContent>
    </LightSection>
  );
};
