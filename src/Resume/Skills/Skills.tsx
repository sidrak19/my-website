import * as React from 'react';
import styled from 'styled-components';
import { PageSection, SectionContent } from '../../LayoutUtils';
import { StyledH3 } from '../../TextUtils';
import { ISkillEntry, SkillEntry } from './SkillEntry';

const SkillsContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 100px minmax(150px, auto))',
  gridGap: '8px 32px',
});

const skills: Array<ISkillEntry> = [
  {
    name: 'JavaScript',
    rating: 4.5,
  },
  {
    name: 'TypeScript',
    rating: 4.5,
  },
  {
    name: 'React',
    rating: 4,
  },
  {
    name: 'Angular',
    rating: 4,
  },
  {
    name: 'AngularJS',
    rating: 4.5,
  },
  {
    name: 'HTML',
    rating: 4.5,
  },
  {
    name: 'CSS',
    rating: 4.5,
  },
  {
    name: 'SASS',
    rating: 3.5,
  },
  {
    name: 'Webpack',
    rating: 4,
  },
  {
    name: 'Java',
    rating: 3.5,
  },
  {
    name: 'C++',
    rating: 3.5,
  },
  {
    name: 'C',
    rating: 3,
  },
  {
    name: 'Python',
    rating: 3,
  },
  {
    name: 'Linux',
    rating: 3.5,
  },
];

export const Skills: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <StyledH3>Skills</StyledH3>
        <SkillsContainer>
          {skills.map(({ name, rating }, index) => (
            <SkillEntry key={index} name={name} rating={rating} />
          ))}
        </SkillsContainer>
      </SectionContent>
    </PageSection>
  );
};
