import * as React from 'react';
import { SpacedItemDiv, StyledUl } from '../../LayoutUtils';
import { BoldLine, Line, ItalicLine } from '../../TextUtils';
import { TimeLocation } from '../ResumeUtils';

export interface IExperienceEntry {
  position: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: Array<React.ReactNode>;
}

export const ExperienceEntry: React.FC<IExperienceEntry> = ({
  position,
  company,
  location,
  start,
  end,
  description,
}) => {
  return (
    <SpacedItemDiv>
      <BoldLine>
        {company}
      </BoldLine>
      <ItalicLine>
        {position}
      </ItalicLine>
      <TimeLocation start={start} end={end} location={location} />
      <StyledUl>
        {description.map((descLine, index) => (
          <li key={index}>
            {typeof descLine === 'string' ? <Line>{descLine}</Line> : descLine}
          </li>
        ))}
      </StyledUl>
    </SpacedItemDiv>
  );
};
