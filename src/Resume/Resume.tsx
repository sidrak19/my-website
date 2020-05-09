import * as React from 'react';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import './Resume.css';

export const Resume: React.FC = () => {
  return (
    <>
      <Education/>
      <Experience />
    </>
  );
};
