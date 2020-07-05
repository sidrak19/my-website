import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import './ConnectItem.css';

interface IConnectItem {
  icon: any;
  link: string;
  color: string;
  name: string;
}

const StyledConnectItem = styled.a(
  {
    display: 'flex',
    justifyContent: 'center',
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

export const ConnectItem: React.FC<IConnectItem> = ({ icon, link, color, name }) => {
  return (
    <StyledConnectItem key={link} href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="3x" color={color} title={name} />
    </StyledConnectItem>
  );
};
