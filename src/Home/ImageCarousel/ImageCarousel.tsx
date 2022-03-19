import * as React from 'react';
import LazyLoad from 'react-lazyload';
import Carousel from 'react-bootstrap/Carousel';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styled from 'styled-components';
import { FlexColumnAlignCenter, Section } from '../../LayoutUtils';
import { StyledH2Center } from '../../TextUtils';
import './ImageCarousel.css';

const StyledGalleryImg = styled.img({
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  height: '400px',
});

interface IImage {
  image: string;
  caption: string;
}

export const ImageCarousel: React.FC<{
  title: string;
  subTitle?: React.ReactNode;
  images: ReadonlyArray<IImage>;
}> = ({title, subTitle, images}) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Section>
      <FlexColumnAlignCenter>
        <StyledH2Center>{title}</StyledH2Center>
        {subTitle}
        <Carousel
          activeIndex={imageIndex}
          onSelect={(selectedIndex: number) =>
            setImageIndex(selectedIndex)
          }
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <LazyLoad height={400} once>
                <StyledGalleryImg
                  src={image.image}
                  onClick={() => setIsOpen(true)}
                  alt={image.caption}
                />
              </LazyLoad>
            </Carousel.Item>
          ))}
        </Carousel>
      </FlexColumnAlignCenter>
      {isOpen && (
        <Lightbox
          mainSrc={images[imageIndex].image}
          nextSrc={
            images[(imageIndex + 1) % images.length].image
          }
          prevSrc={
            images[
              (imageIndex + images.length - 1) % images.length
            ].image
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImageIndex((imageIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % images.length)
          }
          imageCaption={images[imageIndex].caption}
        />
      )}
    </Section>
  );    
};
