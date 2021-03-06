import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styled from 'styled-components';
import { FlexColumnAlignCenter, Section } from '../../LayoutUtils';
import HimachalBoy from '../../static/Himachal-Boy.webp';
import Kratos from '../../static/Kratos.webp';
import MotherTeresa from '../../static/Mother-Teresa.webp';
import ShaoJun from '../../static/Shao-Jun.webp';
import ShunningCamera from '../../static/Shunning-Camera.webp';
import SouthIndian from '../../static/South-Indian.webp';
import Witcher from '../../static/Witcher.webp';
import { StyledH2Center } from '../../TextUtils';
import './ImageGallery.css';

const StyledGalleryImg = styled.img({
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  height: '400px',
});

interface IProps {}

interface IState {
  photoIndex: number;
  isOpen: boolean;
}

interface ISketch {
  image: string;
  caption: string;
}

export class ImageGallery extends React.Component<IProps, IState> {
  private sketches: Array<ISketch> = [
    { image: Kratos, caption: 'Kratos: God of War' },
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
  ];

  constructor(props: IProps) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <Section>
        <FlexColumnAlignCenter>
          <StyledH2Center>Sketches</StyledH2Center>
          <Carousel
            activeIndex={photoIndex}
            onSelect={(selectedIndex: number) =>
              this.setState({
                photoIndex: selectedIndex,
              })
            }
          >
            {this.sketches.map((sketch, index) => (
              <Carousel.Item key={index}>
                <StyledGalleryImg
                  src={sketch.image}
                  onClick={() => this.setState({ isOpen: true })}
                  alt={sketch.caption}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </FlexColumnAlignCenter>
        {isOpen && (
          <Lightbox
            mainSrc={this.sketches[photoIndex].image}
            nextSrc={
              this.sketches[(photoIndex + 1) % this.sketches.length].image
            }
            prevSrc={
              this.sketches[
                (photoIndex + this.sketches.length - 1) % this.sketches.length
              ].image
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.sketches.length - 1) %
                  this.sketches.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.sketches.length,
              })
            }
            imageCaption={this.sketches[photoIndex].caption}
          />
        )}
      </Section>
    );
  }
}
