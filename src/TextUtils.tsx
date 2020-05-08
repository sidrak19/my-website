import styled from "styled-components";

export const StyledHeader = styled.h2({
  margin: '16px 0 32px 0',
});

export const StyledHeaderCenter = styled(StyledHeader)({
  textAlign: 'center',
});

export const Line = styled.p({
  marginBottom: '10px',
});

export const NoMarginLine = styled.p({
  margin: '0',
});

export const BoldLine = styled(Line)({
  fontWeight: 'bold',
});
