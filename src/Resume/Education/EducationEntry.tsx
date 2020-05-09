import * as React from 'react';
import { SpacedItemDiv } from '../../LayoutUtils';
import { BoldLine, Line } from '../../TextUtils';
import { TimeLocation } from '../ResumeUtils';

export interface IEducationEntry {
  institute: string | JSX.Element;
  start: string;
  end?: string;
  location: string;
  description: string | JSX.Element;
  subDescription?: string | JSX.Element;
}

export const EducationEntry: React.FC<IEducationEntry> = ({
  institute,
  start,
  end,
  location,
  description,
  subDescription,
}) => {
  return (
    <SpacedItemDiv>
      {typeof institute === 'string' ? (
        <BoldLine>{institute}</BoldLine>
      ) : (
        institute
      )}
      <TimeLocation start={start} end={end} location={location} />
      {typeof description === 'string' ? (
        <Line>{description}</Line>
      ) : (
        description
      )}
      {subDescription}
    </SpacedItemDiv>
  );
};
