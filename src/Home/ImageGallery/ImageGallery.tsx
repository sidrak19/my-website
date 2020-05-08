import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styled from 'styled-components';
import { FlexRowCenter, PageSection, SectionContent } from '../../LayoutUtils';
import HimachalBoy from '../../static/Himachal-Boy.jpg';
import Kratos from '../../static/Kratos.jpg';
import MotherTeresa from '../../static/Mother-Teresa.jpg';
import ShaoJun from '../../static/Shao-Jun.jpg';
import SouthIndian from '../../static/South-Indian.jpg';
import Witcher from '../../static/Witcher.jpg';
import { StyledHeaderCenter } from '../../TextUtils';

const StyledGapperyImg = styled.img({
  width: '200px',
  height: '200px',
  margin: '4px',
  cursor: 'pointer',
  objectFit: 'cover',
});

const MoreIconIconContainer = styled(FlexRowCenter)({
  flexDirection: 'column',
  width: '208px',
  height: '150px',
  cursor: 'pointer',
});

interface IProps {}

interface IState {
  photoIndex: number;
  isOpen: boolean;
  loadMore: boolean;
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
      loadMore: false,
    };
  }

  render() {
    const { photoIndex, isOpen, loadMore } = this.state;

    return (
      <PageSection>
        <SectionContent>
          <StyledHeaderCenter>Sketches</StyledHeaderCenter>
          <FlexRowCenter>
            {this.sketches.map((sketch, index) => {
              if (!loadMore && index > 2) {
                return undefined;
              }
              return (
                <StyledGapperyImg
                  key={index}
                  src={sketch.image}
                  onClick={() =>
                    this.setState({ isOpen: true, photoIndex: index })
                  }
                  alt={sketch.caption}
                />
              );
            })}
            {!loadMore && (
              <MoreIconIconContainer
                onClick={() =>
                  this.setState({
                    loadMore: true,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  size="4x"
                  cursor="pointer"
                  color="grey"
                />
              </MoreIconIconContainer>
            )}
          </FlexRowCenter>
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
        </SectionContent>
      </PageSection>
    );
  }
}
