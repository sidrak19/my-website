import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { StyledHeaderCenter, Line } from '../../TextUtils';

export const HomeProjects: React.FC = () => {
  return (
    <Section>
      <StyledHeaderCenter>Projects</StyledHeaderCenter>
      <Line>Check out some of my recent front-end projects <a href="/projects">here</a>.</Line>
    </Section>
  );
};
