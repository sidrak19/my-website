import * as React from 'react';
import styled from 'styled-components';
import { FlexRowCenter, PageSection, SectionContent } from '../../LayoutUtils';
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
  maxWidth: '500px',
});

export const Intro: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <FlexRowCenter>
          <StyledImg src={profilepic} alt="profile pic" width="250px" />
          <StyledArticle>
            <StyledHeader>Hey there!</StyledHeader>
            <p>
              I'm Siddharth, an experienced web developer and user interface design
              enthusiast. I graduated from IIT Kharagpur with my Bachelor-cum-Masters degree in 2016.
            </p>
            <p>I'm also a fan of sketching and gaming.</p>
          </StyledArticle>
        </FlexRowCenter>
      </SectionContent>
    </PageSection>
  );
};
