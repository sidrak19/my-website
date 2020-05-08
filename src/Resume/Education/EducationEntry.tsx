import * as React from 'react';
import styled from 'styled-components';
import { BoldLine, Line } from '../../TextUtils';

export interface IEducationEntry {
  institute: string | JSX.Element;
  description: string | JSX.Element;
  subDescription?: string | JSX.Element;
}

const StyledEntry = styled.div({
  ':not(:last-child)': {
    marginBottom: '32px',
  },
});

export const EducationEntry: React.FC<IEducationEntry> = ({
  institute,
  description,
  subDescription,
}) => {
  return (
    <StyledEntry>
      {typeof institute === 'string' ? (
        <BoldLine>{institute}</BoldLine>
      ) : (
        institute
      )}
      {typeof description === 'string' ? (
        <Line>{description}</Line>
      ) : (
        description
      )}
      {subDescription}
    </StyledEntry>
  );
};
