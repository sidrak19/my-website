import * as React from 'react';
import styled from 'styled-components';
import { StyledImg } from '../ComponentUtils';
import { FlexColumnCenter, PageSection } from '../LayoutUtils';
import profilepic from '../static/profilepic.jpg';
import { BiodataEntry, IBiodataEntry } from './BiodataEntry';

const BiodataContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '20px 8px',
  padding: '16px',
});

const biodataEntries: Array<IBiodataEntry> = [{
  label: 'Name',
  value: 'Siddharth Rakesh',
}, {
  label: 'Date of birth',
  value: '19/02/1993',
}, {
  label: 'Place of birth',
  value: 'New Delhi',
}, {
  label: 'Time of birth',
  value: '04:36 AM',
}, {
  label: 'Hometown',
  value: 'Roorkee',
}, {
  label: 'Education',
  value: 'Bachelors and Masters degree from IIT Kharagpur (2016)',
}, {
  label: 'Occupation',
  value: 'Software Engineer (Rubrik)',
}, {
  label: 'Current city',
  value: 'Bengaluru (Bangalore)',
}, {
  label: 'Salary',
  value: '35 LPA',
},{
  label: 'Height',
  value: '5\' 9"', 
}, {
  label: 'Caste',
  value: 'Brahmin (Gour)',
}, {
  label: 'Nadi',
  value: 'Antya',
}, {
  label: 'Gotra',
  value: 'Kaudini',
}, {
  label: 'Mothers\'s Gotra',
  value: 'Gautam',
}, {
  label: 'Paternal Grandmother\'s Gotra',
  value: 'Parashar',
}, {
  label: 'Maternal Grandmother\'s Gotra',
  value: 'Bharadwaj',
}, {
  label: 'Father',
  value: 'Late Shri Rakesh Sharma',
}, {
  label: 'Mother',
  value: 'Seema Sharma (B.Sc., B.Ed.)',
}, {
  label: 'Mother\'s occupation',
  value: 'Govt. school principal',
}, {
  label: 'Brother',
  value: 'Manu Rakesh',
}, {
  label: 'Brother\'s occupation',
  value: 'Technical Product manager at Max Life Insurance',
}, {
  label: 'Maternal Uncle',
  value: 'Shri S.P. Pathak (M.Sc. Physics)',
}, {
  label: 'Maternal Uncle\'s occupation',
  value: 'G.M., State Bank of India (Pune)',
}, {
  label: 'Paternal Uncles',
  value: '5, 4 Businessmen in Roorkee, 1 in Indian Army',
}, {
  label: 'Maternal Grandfather',
  value: 'Shri N.C. Pathak (BA, LLB)',
}, {
  label: 'Maternal Grandfather\'s occupation',
  value: 'Ret. Joint Secretary (UP Govt.)',
}];

export const Biodata: React.FC = () => {
  return <PageSection>
    <FlexColumnCenter>
      <StyledImg src={profilepic} alt="profile pic" width="240px" />
      <BiodataContainer>
        {biodataEntries.map(({
          label,
          value,
        }) => <BiodataEntry label={label} value={value} />)}
      </BiodataContainer>
    </FlexColumnCenter>
  </PageSection>;
};
