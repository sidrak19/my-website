import * as React from 'react';
import { addDisplayName } from '../ReactUtils';
import { Intro } from './Intro/Intro';
import { LetsConnect } from './LetsConnect/LetsConnect';

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <LetsConnect />
    </>
  );
};

addDisplayName(Home, 'Home');
