import * as React from 'react';
import styled from "styled-components";
import { headings } from './ColorUtils';

export const StyledH1 = styled.h1({
  margin: '16px 0 32px 0',
  color: headings,
});

export const StyledH2 = styled.h2({
  margin: '16px 0 32px 0',
  color: headings,
});

export const StyledH3 = styled.h3({
  margin: '16px 0 16px 0',
  color: headings,
});

export const StyledH2Center = styled(StyledH2)({
  textAlign: 'center',
  color: headings,
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

export const ExternalLink: React.FC<{
  text?: string;
  link: string;
}> = ({
  text,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text ? text : link}
    </a>
  );
};
