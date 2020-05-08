import * as React from 'react';
import styled from 'styled-components';
import { StyledImg } from '../../ComponentUtils';
import { FlexRowCenter, PageSection, SectionContent } from '../../LayoutUtils';
import profilepic from '../../static/profilepic.jpg';
import { StyledHeader } from '../../TextUtils';

const StyledArticle = styled.article({
  textAlign: 'center',
  margin: '16px',
  maxWidth: '530px',
});

export const Intro: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <FlexRowCenter>
          <StyledImg src={profilepic} alt="profile pic" width="240px" />
          <StyledArticle>
            <StyledHeader>Hey there!</StyledHeader>
            <p>
              I'm Siddharth, an experienced web developer and user interface
              design enthusiast, currently working at{' '}
              <a href="https://www.rubrik.com/en">Rubrik, Inc</a>.
            </p>
            <p>
              I graduated from the Indian Institute of Technology, Kharagpur
              (IIT Kharagpur), with an Integrated Bachelors and Masters degree
              in Computer Science and Engineering in 2016.
            </p>
            <p>I'm also a fan of sketching and gaming.</p>
          </StyledArticle>
        </FlexRowCenter>
      </SectionContent>
    </PageSection>
  );
};
