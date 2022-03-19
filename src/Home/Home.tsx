import * as React from 'react';
import { addDisplayName } from '../ReactUtils';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Intro } from './Intro/Intro';
import { LetsConnect } from './LetsConnect/LetsConnect';
import { FavoriteQuotes } from './Quotes/FavoriteQuotes';
import { HomeProjects } from './Projects/HomeProjects';
import { About } from './About/About';
import { ImageProcessing } from './ImageProcessing/ImageProcessing';

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <About />
      <HomeProjects />
      <ImageGallery />
      <ImageProcessing />
      <FavoriteQuotes />
      <LetsConnect />
    </>
  );
};

addDisplayName(Home, 'Home');
