import * as React from 'react';
import { CodepenProject } from '../CodepenProject';
import { Line, ExternalLink } from '../../TextUtils';

export const InnerChild: React.FC = () => {
  return (
    <CodepenProject
      title={'The inner child'}
      url="https://codepen.io/sidrakesh/embed/BaoqxWw?theme-id=dark&default-tab=result"
      description={
        <>
          <Line>
            Inspired from the sculpture at the{' '}
            <ExternalLink link="shorturl.at/cuCK9" text="Burning man festival in Nevada" />
            , which demonstrates a conflict between a man and a woman as well as
            the outer and inner expression of human nature. This interactive SVG uses{' '}
            <code>clip-path</code> for showing selective pieces of an SVG on mouse
            interaction.
          </Line>
          <Line>Hover over or touch the image of the couple to reveal their inner selves.</Line>
        </>
      }
    />
  );
};
