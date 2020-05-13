import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { Line, StyledH3 } from '../../TextUtils';
import './Education.css';
import { EducationEntry, IEducationEntry } from './EducationEntry';

const educations: Array<IEducationEntry> = [
  {
    institute: 'Indian Institute of Technology, Kharagpur',
    start: '2011',
    end: '2016',
    location: 'Kharagpur, India',
    description:
      'Integrated Bachelors and Masters Degree Course, Computer Science & Engineering',
    subDescription: `CGPA - 9.07 / 10`,
  },
  {
    institute: "Children's Senior Academy",
    start: 'May, 2011',
    location: 'Roorkee, India',
    description: (
      <Line>
        86 <small>%</small> in 12<sup>th</sup> Grade Examinations, the highest
        percentage in Science Stream
      </Line>
    ),
  },
  {
    institute: 'Montfort Senior Secondary School',
    start: 'May, 2009',
    location: 'Roorkee, India',
    description: (
      <Line>
        93 <small>%</small> in 10<sup>th</sup> Grade Examinations
      </Line>
    ),
  },
];

export const Education: React.FC = () => {
  return (
    <Section>
      <StyledH3>Education</StyledH3>
      {educations.map(
        (
          { institute, description, subDescription, start, end, location },
          index
        ) => (
          <EducationEntry
            key={index}
            institute={institute}
            start={start}
            end={end}
            location={location}
            description={description}
            subDescription={subDescription}
          />
        )
      )}
    </Section>
  );
};
