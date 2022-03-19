import * as React from 'react';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import './Resume.css';
import { Skills } from './Skills/Skills';
import { DownloadResume } from './DownloadResume/DownloadResume';

const Resume: React.FC = () => {
  return (
    <>
      <Education/>
      <Experience />
      <Skills />
      <DownloadResume />
    </>
  );
};

export default Resume;