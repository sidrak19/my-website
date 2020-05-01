import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { FlexColumnCenter, FlexRowCenter, PageSection, SectionContent } from '../../LayoutUtils';
import { StyledHeader } from '../../TextUtils';
import { ConnectItem } from './ConnectItem';

export const LetsConnect: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <FlexColumnCenter>
          <StyledHeader>Lets's Connect</StyledHeader>
          <FlexRowCenter>
            <ConnectItem
              icon={faEnvelope}
              link="mailto:sid.rakesh@gmail.com"
              color="red"
            />
            <ConnectItem
              icon={faLinkedin}
              link="https://www.linkedin.com/in/siddharthrakesh"
              color="#0077b5"
            />
            <ConnectItem
              icon={faGithub}
              link="https://github.com/sidrak19"
              color="black"
            />
            <ConnectItem
              icon={faInstagram}
              link="https://www.instagram.com/sidrakesh93"
              color="#dd2a7a"
            />
          </FlexRowCenter>
        </FlexColumnCenter>
      </SectionContent>
    </PageSection>
  );
};
