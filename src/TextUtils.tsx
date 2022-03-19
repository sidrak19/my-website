import * as React from 'react';
import styled from "styled-components";

export const StyledH1 = styled.h1(({theme}) => ({
  margin: '16px 0 32px 0',
  color: theme.headingTextColor,
}));

export const StyledH2 = styled.h2(({theme}) => ({
  margin: '16px 0 32px 0',
  color: theme.headingTextColor,
}));

export const StyledH2Center = styled(StyledH2)({
  textAlign: 'center',
});

export const StyledH3 = styled.h3(({theme}) => ({
  margin: '16px 0 16px 0',
  color: theme.headingTextColor,
}));

export const StyledH3Center = styled(StyledH3)({
  textAlign: 'center',
});

export const Line = styled.p({
  marginBottom: '10px',
}, ({
  color,
}) => ({
  color,
}));

export const CenterLine = styled(Line)({
  textAlign: 'center',
});

export const NoMarginLine = styled(Line)({
  margin: '0',
});

export const BoldLine = styled(Line)({
  fontWeight: 'bold',
});

export const ItalicLine = styled(Line)({
  fontStyle: 'italic',
});

const StyledLink = styled.a(({theme}) => ({
  color: theme.linkColor,
}));

export const ExternalLink: React.FC<{
  text?: string;
  link: string;
}> = ({text, link}) => {
  return (
    <StyledLink href={link} target="_blank" rel="noopener noreferrer">
      {text ? text : link}
    </StyledLink>
  );
};

export const InternalLink: React.FC<{
  text?: string;
  link: string;
}> = ({ text, link }) => {
  return <StyledLink href={link}>{text ? text : link}</StyledLink>;
};
