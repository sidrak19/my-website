import * as React from 'react';
import { Section } from '../../LayoutUtils';
import { ExternalLink, Line, StyledH2 } from '../../TextUtils';
import { ExperienceEntry, IExperienceEntry } from './ExperienceEntry';

const experiences: Array<IExperienceEntry> = [
  {
    position: 'Front-End Engineer (Member of Technical Staff)',
    company: 'Rubrik, Inc.',
    location: 'Bengaluru, India',
    start: 'May, 2019',
    end: 'Present',
    description: [
      <Line>
        Developing the cloud (React) and on-premise (Angular) client portals for
        Rubrik’s{' '}
        <ExternalLink
          text="data management platforms"
          link="https://www.rubrik.com/en/products"
        />
        , to provide clients a user-friendly and easy to navigate web interface
        for managing their backups, and recover data on-demand.
      </Line>,
      `Developing common, re-usable components in React and Angular to promote rapid development and consistent
      web design across the websites in Rubrik's platforms.`,
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
        Worked on the client portal for HNI clients of the{' '}
        <ExternalLink
          text="Private Wealth Management"
          link="https://www.goldmansachs.com/what-we-do/consumer-and-investment-management/private-wealth-management/"
        />
        , used for managing their portfolios and investments.
      </Line>,
      `Developed the website (AngularJS) and back-end (DropWizard) for an incident resolution workflow creator,
      which allows users to create workflows using a set of re-usable actions, for automatically resolving reported
      incidents. Workflows created with this tool reduced the incidents count by 330,000 (out of over a million
      incidents) per month, saving over 50 months of human effort per month.`,
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
        Developed a developer-focused{' '}
        <ExternalLink
          text="performance analysis tool"
          link="https://github.com/sidrakesh93/grpc-tools/tree/master/benchmarking/performance_db"
        />{' '}
        for Google Remote Procedure Calls (
        <ExternalLink text="gRPC" link="https://grpc.io/" />
        ), which collected and stored various test metrics such as percentile
        latencies, QPS rate, etc. from developer tests, and provided a web based
        comparative view of these results.
      </Line>,
    ],
  },
  {
    position: 'Software Development Engineering Intern',
    company: 'Amazon.com, Inc.',
    location: 'Bengaluru, India',
    start: 'May, 2014',
    end: 'July, 2014',
    description: [
      `Implemented a feature in Amazon’s warehouse management tool for viewing the storage bins locked by warehouse
      administrators at any given time. This substantially reduced the manual effort for getting this information.`,
      `Migrated an existing Oracle SQL database to an internal NoSQL database for improved performance.`,
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <Section>
      <StyledH2>
        Professional Experience
      </StyledH2>
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
    </Section>
  );
};
