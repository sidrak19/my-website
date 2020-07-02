import * as React from 'react';
import { SpacedItemDiv } from '../../LayoutUtils';
import { BoldLine, Line } from '../../TextUtils';
import { TimeLocation } from '../ResumeUtils';

export interface IEducationEntry {
  institute: React.ReactNode;
  start: string;
  end?: string;
  location: string;
  description: React.ReactNode;
  subDescription?: React.ReactNode;
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
