import * as React from 'react';
import styled from 'styled-components';
import { Section, FlexColumnCenter } from '../../LayoutUtils';
import { ExternalLink, StyledH2Center } from '../../TextUtils';

const AboutMeLine = styled.p({
  textAlign: 'center',
});

export const About: React.FC = () => {
  return (
    <Section>
      <FlexColumnCenter>
        <StyledH2Center>About Me</StyledH2Center>
        <AboutMeLine>
          I'm an experienced web developer and UX design enthusiast, currently
          working at{' '}
          <ExternalLink text="Rubrik, Inc" link="https://www.rubrik.com/en" />{' '}
          in Bengaluru, India.
        </AboutMeLine>
        <AboutMeLine>
          I graduated from the{' '}
          <ExternalLink
            text="Indian Institute of Technology, Kharagpur"
            link="http://www.iitkgp.ac.in/"
          />{' '}
          with an Integrated Bachelors and Masters Degree in{' '}
          <ExternalLink
            text="Computer Science and
          Engineering"
            link="http://cse.iitkgp.ac.in/"
          />{' '}
          in 2016.
        </AboutMeLine>
        <AboutMeLine>
          To know more about me, check out my <a href="/resume">web resume</a>.
        </AboutMeLine>
      </FlexColumnCenter>
    </Section>
  );
};
