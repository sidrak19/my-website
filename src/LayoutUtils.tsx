import styled from 'styled-components';

export const Page = styled.div({
  maxWidth: '1000px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  marginBottom: '0',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  padding: '32px',
  '@media (max-width: 768px)': {
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  zIndex: 1,
});

export const Section = styled.div({
  margin: '32px',
  '@media (max-width: 768px)': {
    margin: '16px',
  },
});

export const FlexRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const FlexRowAlignCenter = styled(FlexRow)({
  alignItems: 'center',
});

export const FlexRowCenter = styled(FlexRowAlignCenter)({
  justifyContent: 'center',
});

export const FlexColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const FlexColumnAlignCenter = styled(FlexColumn)({
  alignItems: 'center',
});

export const FlexColumnCenter = styled(FlexColumnAlignCenter)({
  justifyContent: 'center',
});

export const FlexExpand = styled.div({
  flex: '1 1 auto',
});

export const SpacedItemDiv = styled.div({
  ':not(:last-child)': {
    marginBottom: '32px',
  },
});

export const StyledUl = styled.ul({
  paddingInlineStart: '21px',
  marginBottom: '0',
  fontSize: '18px',
});
