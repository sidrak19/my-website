import * as React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Section, FlexRowCenter } from '../../LayoutUtils';

const DownloadButton = styled(Button)(({theme}) => ({
  borderRadius: '25px',
  width: '300px',
  background: theme.buttonBackground,
  borderColor: theme.buttonBackground,
  outlineColor: theme.buttonBackground,
  ':hover, :focus, &.active': {
    background: theme.buttonBackground,
    borderColor: theme.buttonBackground,
    outlineColor: theme.buttonBackground,
  }
}));

export const DownloadResume: React.FC = () => {
  return (
    <Section>
      <FlexRowCenter>
        <DownloadButton
          variant="primary"
          size="lg"
          href={`${process.env.PUBLIC_URL}/Siddharth_Rakesh_Resume.pdf`}
          target="_blank"
        >
          Download Resume
        </DownloadButton>
      </FlexRowCenter>
    </Section>
  );
};
