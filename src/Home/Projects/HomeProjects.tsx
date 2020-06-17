import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { StyledH2Center, CenterLine } from '../../TextUtils';

export const HomeProjects: React.FC = () => {
  return (
    <Section>
      <StyledH2Center>Projects</StyledH2Center>
      <CenterLine>
        Check out some of my recent <a href="/projects">front-end projects</a>.
      </CenterLine>
    </Section>
  );
};
