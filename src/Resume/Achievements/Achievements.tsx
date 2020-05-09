import * as React from 'react';
import { PageSection, SectionContent, StyledUl } from '../../LayoutUtils';
import { Line, StyledH3 } from '../../TextUtils';

const achievements: Array<string | JSX.Element> = [
  <Line>
    Secured All-India-Rank 809 in IIT-JEE, 2011 (99.8<sup>th</sup> percentile).
  </Line>,
  <Line>Secured All-India-Rank 372 in AIEEE, 2011 (99.96<sup>th</sup> percentile).</Line>,
  `Merit-Cum-Means Scholar (MHRD), 2011, 2012, 2013 and 2014.`,
  <Line>Won the Kamlesh Devi memorial award for highest percentage in 12<sup>th</sup> board examinations (2011).</Line>,
];

export const Achievements: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <StyledH3>Achievements</StyledH3>
        <StyledUl>
          {
            achievements.map(achievement => <li>{typeof achievement === 'string' ? <Line>{achievement}</Line> : achievement}</li>)
          }
        </StyledUl>
      </SectionContent>
    </PageSection>
  );
};
