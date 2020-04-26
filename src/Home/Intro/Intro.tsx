import * as React from 'react';
import styled from 'styled-components';
import { FlexRow, LightSection, SectionContent } from '../../LayoutUtils';
import profilepic from '../../static/profilepic.jpg';
import { StyledHeader } from '../../TextUtils';

const StyledImg = styled.img({
  borderRadius: '50%',
  marginLeft: '32px',
  minWidth: '250px',
});

const StyledArticle = styled.article({
  textAlign: 'center',
});

export const Intro: React.FC = () => {
  return (
    <LightSection>
      <SectionContent>
        <FlexRow>
          <StyledArticle>
            <StyledHeader>Hey there!</StyledHeader>
            <p>
              I'm Siddharth, an experienced web developer and user interface
              design enthusiast. Adept in the design, installation, testing and
              maintenance of web systems.
            </p>
            <p>I'm also a fan of sketching and gaming.</p>
          </StyledArticle>
          <StyledImg src={profilepic} alt="profile pic" width="250px" />
        </FlexRow>
      </SectionContent>
    </LightSection>
  );
};
