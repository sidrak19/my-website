import styled from 'styled-components';
import { lightestSky } from './ColorUtils';

export const Section = styled.section({
  maxWidth: '1000px',
  width: '100%',
  borderRadius: '8px',
  marginBottom: '32px',
  display: 'flex',
  flexDirection: 'column',
});

export const Page = styled(Section)({
  padding: '0 32px',
});

export const PageSection = styled.div({
  flex: '1 1 auto',
  borderRadius: '8px',
  margin: '0 32px 32px 32px',
  backgroundColor: lightestSky,
});

export const LightSection = styled(Section)({
  backgroundColor: lightestSky,
});

export const SectionContent = styled.div({
  padding: '32px 48px',
});

export const FlexRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const FlexRowCenter = styled(FlexRow)({
  alignItems: 'center',
  justifyContent: 'center',
});

export const FlexColumnCenter = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const FlexExpand = styled.div({
  flex: '1 1 auto',
});
