import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

interface IConnectItem {
  icon: any;
  link: string;
  color: string;
}

const StyledConnectItem = styled.a(
  {
    margin: '16px 32px',
    ':hover': {
      transform: 'translateY(-2px)',
    },
  },
  (props) => ({
    color: props.color,
    ':hover': {
      color: props.color,
    },
  })
);

export const ConnectItem: React.FC<IConnectItem> = ({ icon, link, color }) => {
  return (
    <StyledConnectItem
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      <FontAwesomeIcon icon={icon} size="3x" />
    </StyledConnectItem>
  );
};
