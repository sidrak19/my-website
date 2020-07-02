import * as React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Section, FlexRowCenter } from '../../LayoutUtils';

const DownloadButton = styled(Button)({
  borderRadius: '25px',
  width: '300px',
});

export const DownloadResume: React.FC = () => {
  return (
    <Section>
      <FlexRowCenter>
        <DownloadButton
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
