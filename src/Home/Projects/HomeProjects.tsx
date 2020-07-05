import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { StyledH2Center, CenterLine, InternalLink } from '../../TextUtils';

export const HomeProjects: React.FC = () => {
  return (
    <Section>
      <StyledH2Center>Projects</StyledH2Center>
      <CenterLine>
        Check out some of my recent <InternalLink link="/projects" text="front-end projects" />.
      </CenterLine>
    </Section>
  );
};
