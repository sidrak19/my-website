import * as React from 'react';
import HimachalBoy from '../../static/Himachal-Boy.webp';
import Kratos from '../../static/Kratos.webp';
import MotherTeresa from '../../static/Mother-Teresa.webp';
import ShaoJun from '../../static/Shao-Jun.webp';
import ShunningCamera from '../../static/Shunning-Camera.webp';
import SouthIndian from '../../static/South-Indian.webp';
import Witcher from '../../static/Witcher.webp';
import Aloy from '../../static/Aloy.webp';
import { ImageCarousel } from '../ImageCarousel/ImageCarousel';

interface ISketch {
  image: string;
  caption: string;
}

const sketches: Array<ISketch> = [
  { image: Kratos, caption: 'Kratos: God of War' },
  { image: Aloy, caption: 'Aloy: Horizon Zero Dawn' },
  { image: ShaoJun, caption: "Shao Jun - Assassin's Creed China" },
  {
    image: Witcher,
    caption: 'Geralt & Ciri - Witcher 3: The Wild Hunt',
  },
  {
    image: SouthIndian,
    caption: 'South Indian beauty in traditional attire',
  },
  {
    image: ShunningCamera,
    caption: 'A smiling face shunning the camera',
  },
  {
    image: MotherTeresa,
    caption: 'Mother Teresa',
  },
  {
    image: HimachalBoy,
    caption: 'Himachal Boy in traditional cap',
  },
]

export const ImageGallery: React.FC = () => {
  return <ImageCarousel title="Sketches" images={sketches} />;
};
