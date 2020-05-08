import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import StarRatings from 'react-star-ratings';
import {
  FlexRowAlignCenter,
  PageSection,
  SectionContent,
} from '../../LayoutUtils';
import { Line, NoMarginLine, StyledHeader } from '../../TextUtils';
import './Education.css';
import { EducationEntry, IEducationEntry } from './EducationEntry';

const educations: Array<IEducationEntry> = [
  {
    institute: 'Indian Institute of Technology, Kharagpur',
    description:
      'Integrated Bachelors and Masters Degree Course, Computer Science & Engineering',
    subDescription: (
      <FlexRowAlignCenter>
        <NoMarginLine>CGPA - 9.07 / 10&nbsp;&nbsp;&nbsp;</NoMarginLine>
        <StarRatings
          rating={4.535}
          starRatedColor="gold"
          starDimension="20px"
          starSpacing="2px"
          numberOfStars={5}
          name="rating"
        ></StarRatings>
      </FlexRowAlignCenter>
    ),
  },
  {
    institute: "Children's Senior Academy, Roorkee, India",
    description: (
      <Line>
        86 <small>%</small> in 12<sup>th</sup> Grade Examinations, the highest
        percentage in Science Stream
      </Line>
    ),
  },
  {
    institute: 'Montfort Senior Secondary School, Roorkee, India',
    description: (
      <Line>
        93 <small>%</small> in 10<sup>th</sup> Grade Examinations
      </Line>
    ),
  },
];

export const Education: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <StyledHeader>
          Education
          <FontAwesomeIcon icon={faGraduationCap} className="title-icon" />
        </StyledHeader>
        {educations.map(({ institute, description, subDescription }, index) => (
          <EducationEntry
            key={index}
            institute={institute}
            description={description}
            subDescription={subDescription}
          />
        ))}
      </SectionContent>
    </PageSection>
  );
};
