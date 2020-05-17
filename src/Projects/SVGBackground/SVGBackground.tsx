import * as React from 'react';
import { CodepenProject } from '../CodepenProject';
import { Line } from '../../TextUtils';

export const SVGBackground: React.FC = () => {
  return (
    <CodepenProject
      title={'SVG Random path background'}
      description={
        <>
          <Line>
            A re-usable React based SVG background component. The background is generated through
            a random walk algorithm, which incrementally adds lines to the background SVG.
            A unique background is generated on each render.
          </Line>
          <Line>
            Click <code>Rerun</code> at the bottom right of the widget below to re-render the background.
          </Line>
        </>
      }
      url="https://codepen.io/sidrakesh/embed/VwvEpae?theme-id=light&default-tab=result"
    />
  );
};
