import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { FlexColumnCenter, FlexRow, PageSection, SectionContent } from '../../LayoutUtils';
import profilepic from '../../static/profilepic.jpg';
import { StyledHeader } from '../../TextUtils';

const StyledImg = styled.img({
  borderRadius: '50%',
  margin: '16px',
  minWidth: '250px',
});

const StyledArticle = styled.article({
  textAlign: 'center',
  margin: '16px',
});

export const Intro: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  const IntroDetails = (
    <>
      <StyledImg src={profilepic} alt="profile pic" width="250px" />
      <StyledArticle>
        <StyledHeader>Hey there!</StyledHeader>
        <p>
          I'm Siddharth, an experienced web developer and user interface design
          enthusiast. Adept in the design, installation, testing and maintenance
          of web systems.
        </p>
        <p>I'm also a fan of sketching and gaming.</p>
      </StyledArticle>
    </>
  );
  return (
    <PageSection>
      <SectionContent>
        {isDesktopOrLaptop && <FlexRow>{IntroDetails}</FlexRow>}
        {!isDesktopOrLaptop && (
          <FlexColumnCenter>{IntroDetails}</FlexColumnCenter>
        )}
      </SectionContent>
    </PageSection>
  );
};
