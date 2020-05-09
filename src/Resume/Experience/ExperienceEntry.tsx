import * as React from 'react';
import styled from 'styled-components';
import { SpacedItemDiv, StyledUl } from '../../LayoutUtils';
import { BoldLine, Line } from '../../TextUtils';
import { TimeLocation } from '../ResumeUtils';

const LightStyledUl = styled(StyledUl)({
  fontSize: '18px',
});

export interface IExperienceEntry {
  position: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: Array<string | JSX.Element>;
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
        {position}, {company}
      </BoldLine>
      <TimeLocation start={start} end={end} location={location} />
      <LightStyledUl>
        {description.map((descLine, index) => (
          <li key={index}>
            {typeof descLine === 'string' ? <Line>{descLine}</Line> : descLine}
          </li>
        ))}
      </LightStyledUl>
    </SpacedItemDiv>
  );
};
