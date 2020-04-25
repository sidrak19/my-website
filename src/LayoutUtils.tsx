import styled from 'styled-components';
import { lightestSky } from './ColorUtils';

export const Section = styled.section({
  maxWidth: '1000px',
  width: '1000px',
});

export const LightSection = styled(Section)({
  backgroundColor: lightestSky,
});

export const SectionContent = styled.div({
  padding: '48px 64px',
});

export const FlexRow = styled.div({
  display: 'flex',
});

export const FlexRowCenter = styled.div({
  display: 'flex',
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
