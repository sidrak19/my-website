import * as React from 'react';
import BirdQuilling from '../../static/bird-quilling.webp';
import WomanLines from '../../static/woman-lines.webp';
import DogStars from '../../static/dog-stars.webp';
import SolLines from '../../static/sol-lines.webp';
import { ImageCarousel } from '../ImageCarousel/ImageCarousel';
import { CenterLine, ExternalLink } from '../../TextUtils';

interface ISketch {
  image: string;
  caption: string;
}

const imageProcessingProjects: Array<ISketch> = [
  { image: WomanLines, caption: 'Portrait of woman constructed using straight lines' },
  {
    image: SolLines,
    caption: 'Statue of Liberty constructed using points clustering',
  },
  { image: BirdQuilling, caption: 'Bird constructed using quilling' },
  { image: DogStars, caption: 'Dog constructed using point stars' },
]

export const ImageProcessing: React.FC = () => {
  return <ImageCarousel
    title="Image Processing"
    subTitle={<CenterLine>Check out my image processing projects on <ExternalLink link={'https://github.com/sidrakesh/images-to-art'} text={'GitHub'} /></CenterLine>}
    images={imageProcessingProjects}
  />;
};
