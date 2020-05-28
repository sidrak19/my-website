import * as React from 'react';
import { addDisplayName } from '../ReactUtils';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Intro } from './Intro/Intro';
import { LetsConnect } from './LetsConnect/LetsConnect';
import { FavoriteQuotes } from './Quotes/FavoriteQuotes';
import { HomeProjects } from './Projects/HomeProjects';

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <HomeProjects />
      <ImageGallery />
      <FavoriteQuotes />
      <LetsConnect />
    </>
  );
};

addDisplayName(Home, 'Home');
