import * as React from 'react';
import styled from "styled-components";

export const StyledH2 = styled.h2({
  margin: '16px 0 32px 0',
});

export const StyledH3 = styled.h3({
  margin: '16px 0 32px 0',
});

export const StyledHeaderCenter = styled(StyledH2)({
  textAlign: 'center',
});

export const Line = styled.p({
  marginBottom: '10px',
}, ({
  color,
}) => ({
  color,
}));

export const NoMarginLine = styled.p({
  margin: '0',
});

export const BoldLine = styled(Line)({
  fontWeight: 'bold',
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
