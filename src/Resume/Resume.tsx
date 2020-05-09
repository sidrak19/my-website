import * as React from 'react';
import { Achievements } from './Achievements/Achievements';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import './Resume.css';
import { Skills } from './Skills/Skills';

export const Resume: React.FC = () => {
  return (
    <>
      <Education/>
      <Experience />
      <Skills />
      <Achievements />
    </>
  );
};
