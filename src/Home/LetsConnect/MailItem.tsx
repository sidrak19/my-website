import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import styled from 'styled-components';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import './ConnectItem.css';
import CopyToClipboard from 'react-copy-to-clipboard';

const StyledConnectItem = styled.div(
  {
    cursor: 'pointer',
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

export const MailItem: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const [showCopied, setShowCopied] = React.useState<boolean>(false);
  const ref = React.useRef(null);

  return (
    <div ref={ref}>
      <CopyToClipboard text="sid.rakesh@gmail.com">
        <StyledConnectItem
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setShowCopied(true)}
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" color="red" />
        </StyledConnectItem>
      </CopyToClipboard>
      <Overlay
        show={show}
        target={ref}
        key={'mail'}
        placement="bottom"
        container={ref.current}
        onExit={() => setShowCopied(false)}
      >
        <Tooltip id="Mail">
          {showCopied
            ? 'Email address copied to clipboard.'
            : 'Click to copy email address.'}
        </Tooltip>
      </Overlay>
    </div>
  );
};
