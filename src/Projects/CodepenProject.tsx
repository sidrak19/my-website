import * as React from 'react';
import { StyledH4 } from '../TextUtils';
import { Section } from '../LayoutUtils';
import styled from 'styled-components';

interface ICodepenProject {
  title: string;
  url: string;
  description?: React.ReactNode;
}

const StyledDescription = styled.div({
  marginBottom: '24px',
});

export const CodepenProject: React.FC<ICodepenProject> = ({
  title,
  url,
  description,
}) => {
  return (
    <Section>
      <StyledH4>{title}</StyledH4>
      {description && <StyledDescription>{description}</StyledDescription>}
      <iframe
        height="400px"
        style={{ width: '100%', background: 'white' }}
        scrolling="no"
        title={title}
        src={`${url}&height=400`}
      />
    </Section>
  );
};
