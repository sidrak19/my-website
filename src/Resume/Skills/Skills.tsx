import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { Line, StyledH2, StyledH3 } from '../../TextUtils';

export const Skills: React.FC = () => {
  return (
    <Section>
      <StyledH2>Skills</StyledH2>
      <StyledH3>Proficient</StyledH3>
      <Line>
        JavaScript, TypeScript, ReactJS, Angular, AngularJS, HTML, CSS, SASS,
        Webpack
      </Line>
      <StyledH3>Familiar</StyledH3>
      <Line>Java, Spring MVC, DropWizard, C++, C, Python</Line>
    </Section>
  );
};
