import * as React from 'react';
import styled from 'styled-components';
import { FlexRowCenter, Section } from '../../LayoutUtils';
import { ExternalLink, StyledHeaderCenter } from '../../TextUtils';
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
          <StyledHeaderCenter>Greetings, Traveller.</StyledHeaderCenter>
          <p>
            I'm Siddharth Rakesh, an experienced web developer and UX
            design enthusiast, currently working at{' '}
            <ExternalLink
              text="Rubrik, Inc"
              link="https://www.rubrik.com/en"
            />.
          </p>
          <p>I'm also a fan of sketching and gaming.</p>
        </StyledArticle>
      </FlexRowCenter>
    </Section>
  );
};
