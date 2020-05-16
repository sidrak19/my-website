import { faGithub, faInstagram, faLinkedin, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { FlexColumnCenter, Section } from '../../LayoutUtils';
import { StyledHeaderCenter } from '../../TextUtils';
import { ConnectItem } from './ConnectItem';
import styled from 'styled-components';

const StyledGrid = styled.div({
  maxWidth: '600px',
  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 100px)',
  gridRowGap: '32px',
});

export const LetsConnect: React.FC = () => {
  return (
    <Section>
      <FlexColumnCenter>
        <StyledHeaderCenter>Let's Connect</StyledHeaderCenter>
        <StyledGrid>
          <ConnectItem
            name="Mail"
            icon={faEnvelope}
            link="mailto:sid.rakesh@gmail.com"
            color="red"
          />
          <ConnectItem
            name="LinkedIn"
            icon={faLinkedin}
            link="https://www.linkedin.com/in/siddharthrakesh"
            color="#0077b5"
          />
          <ConnectItem
            name="Github"
            icon={faGithub}
            link="https://github.com/sidrak19"
            color="black"
          />
          <ConnectItem
            name="Codepen"
            icon={faCodepen}
            link="https://codepen.io/sidrakesh"
            color="black"
          />
          <ConnectItem
            name="Instagram"
            icon={faInstagram}
            link="https://www.instagram.com/sidrakesh93"
            color="#dd2a7a"
          />
          <ConnectItem
            name="Twitter"
            icon={faTwitter}
            link="https://twitter.com/SiddharthRakesh"
            color="#00acee"
          />
        </StyledGrid>
      </FlexColumnCenter>
    </Section>
  );
};
