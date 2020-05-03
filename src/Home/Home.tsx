import * as React from 'react';
import { addDisplayName } from '../ReactUtils';
import { Intro } from './Intro/Intro';
import { LetsConnect } from './LetsConnect/LetsConnect';
import { GeraltWitcher3Quote } from './Quotes/Geralt';

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <GeraltWitcher3Quote />
      <LetsConnect />
    </>
  );
};

addDisplayName(Home, 'Home');
