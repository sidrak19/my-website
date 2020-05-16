import * as React from 'react';
import { StyledH4, Line } from '../TextUtils';

interface ICodepenProject {
  title: string;
  url: string;
  description?: string;
}

export const CodepenProject: React.FC<ICodepenProject> = ({
  title,
  url,
  description,
}) => {
  return (
    <>
      <StyledH4>{title}</StyledH4>
      {description && <Line>{description}</Line>}
      <iframe
        height="400px"
        style={{ width: '100%', background: 'white', }}
        scrolling="no"
        title={title}
        src={url}
      />
    </>
  );
};
