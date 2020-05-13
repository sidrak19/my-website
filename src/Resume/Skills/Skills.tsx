import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { Line, StyledH3, StyledH4 } from '../../TextUtils';

export const Skills: React.FC = () => {
  return (
    <Section>
      <StyledH3>Skills</StyledH3>
      <StyledH4>Proficient</StyledH4>
      <Line>
        JavaScript, TypeScript, ReactJS, Angular, AngularJS, HTML, CSS, SASS,
        Webpack
      </Line>
      <StyledH4>Familiar</StyledH4>
      <Line>Java, Spring MVC, DropWizard, C++, C, Python</Line>
    </Section>
  );
};
