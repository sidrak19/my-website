import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import { Line } from '../TextUtils';

const TimeLocationGrid = styled.div({
  display: 'grid',
  gridColumnGap: '32px',
  gridTemplateColumns: 'repeat(auto-fill, 250px)',
  color: '#5788b9',
});

interface ITimeLocation {
  location: string;
  start: string;
  end?: string;
}

export const TimeLocation: React.FC<ITimeLocation> = ({
  start,
  end,
  location,
}) => {
  return (
    <TimeLocationGrid>
      <Line>
        <FontAwesomeIcon className="left-icon" icon={faCalendarAlt} />
        {start}
        {end ? ` - ${end}` : ''}
      </Line>
      <Line>
        <FontAwesomeIcon className="left-icon" icon={faMapMarkerAlt} />
        <i>{location}</i>
      </Line>
    </TimeLocationGrid>
  );
};

