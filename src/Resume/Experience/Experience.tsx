import * as React from 'react';
import { PageSection, SectionContent } from '../../LayoutUtils';
import { ExternalLink, Line, StyledH3 } from '../../TextUtils';
import { ExperienceEntry, IExperienceEntry } from './ExperienceEntry';

const experiences: Array<IExperienceEntry> = [
  {
    position: 'Member of Techincal Staff',
    company: 'Rubrik, Inc.',
    location: 'Bengaluru, India',
    start: 'May, 2019',
    end: 'Present',
    description: [
      <Line>
        Working on the client web interface for Rubrik's <ExternalLink text="data management platforms" link="https://www.rubrik.com/en/products" /> in
        the data center and the cloud. They allow our users to efficiently manage and schedule
        backups through a user friendly policy-based solution, while also allowing them to archive and
        migrate data to the cloud securely, and recover data on-demand.
      </Line>,
      `Developing common, re-usable components in React and Angular to promote rapid development and consistent
      web design across the websites in Rubrik's platforms.`
    ],
  },
  {
    position: 'Technology Associate',
    company: 'Goldman Sachs Private Limited',
    location: 'Bengaluru, India',
    start: 'June, 2016',
    end: 'April, 2019',
    description: [
      <Line>
        Worked on the client website for Goldman Sachs{' '}
        <ExternalLink
          text="Private Wealth Management"
          link="https://www.goldmansachs.com/what-we-do/consumer-and-investment-management/private-wealth-management/"
        />{' '}
        division, which manages the portfolio of ultra-high net worth
        individuals.
      </Line>,
      `Developed the web interface and back-end systems for an automated incident resolution product, which reduced the incident count by 330,000 incidents (out of over a million incidents) per month, saving over 50 months of human effort per month.`,
      <Line>
        Developed an application management user interface for{' '}
        <ExternalLink text="AppDynamics" link="https://www.appdynamics.com/" />,
        a third-party monitoring framework, used for process telemetry
        monitoring in Angular.
      </Line>,
      <Line>
        Developed a resource utilization monitoring tool (using{' '}
        <ExternalLink text="JointJS" link="https://www.jointjs.com/" />) to
        analyze the health, metadata, etc. for infrastructure resources such as
        networks, machines, processes, etc. in Angular.
      </Line>,
    ],
  },
  {
    position: 'Software Engineering Intern',
    company: 'Google, Inc.',
    location: 'Mountain View, California',
    start: 'May, 2015',
    end: 'July, 2015',
    description: [
      <Line>
        Developed a{' '}
        <ExternalLink
          text="web-based performance database tool"
          link="https://github.com/sidrakesh93/grpc-tools/tree/master/benchmarking/performance_db"
        />
        , for collecting and storing various test metrics from the users of
        Google Remote Procedure Calls (
        <ExternalLink text="gRPC" link="https://grpc.io/" />
        ).
      </Line>,
      `Tested and provided feedback on the new Devanagari keyboard being developed at the time.`,
    ],
  },
  {
    position: 'Software Development Engineering Intern',
    company: 'Amazon.com, Inc.',
    location: 'Bengaluru, India',
    start: 'May, 2014',
    end: 'July, 2014',
    description: [
      `Implemented a feature in an internal warehouse management tool for viewing the locked storage bins at
      any given time. This substantially reduced the manual effort for getting this information.`,
      `Migrated an existing Oracle SQL database to an internal NoSQL database for improved performance.`,
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <PageSection>
      <SectionContent>
        <StyledH3>
          Professional Experience
        </StyledH3>
        {
          experiences.map(({
            position,
            company,
            location,
            start,
            end,
            description,
          }, index) => <ExperienceEntry key={index} position={position} company={company} location={location} start={start} end={end} description={description} />)
        }
      </SectionContent>
    </PageSection>
  );
};
