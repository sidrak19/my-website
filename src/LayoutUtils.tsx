import styled from 'styled-components';

export const Section = styled.section({
  maxWidth: '1000px',
  width: '1000px',
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