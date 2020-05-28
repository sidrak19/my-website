import * as React from 'react';
import styled from 'styled-components';
import { FlexRowCenter, Section } from '../../LayoutUtils';
import { ExternalLink, StyledH1 } from '../../TextUtils';
import { Avatar } from './Avatar';

const StyledArticle = styled.article({
  textAlign: 'center',
  margin: '16px',
  maxWidth: '530px',
});

export const Intro: React.FC = () => {
  return (
    <Section>
      <FlexRowCenter>
        <Avatar />
        <StyledArticle>
          <p>Greetings, Traveller. I'm</p>
          <StyledH1>Siddharth Rakesh.</StyledH1>
          <p>
            I'm an experienced web developer and UX
            design enthusiast, currently working at{' '}
            <ExternalLink
              text="Rubrik, Inc"
              link="https://www.rubrik.com/en"
            /> in Bengaluru, India. I'm also a fan of sketching and gaming.
          </p>
          <p>You can find my resume <a href="/resume">here</a>.</p>
        </StyledArticle>
      </FlexRowCenter>
    </Section>
  );
};
