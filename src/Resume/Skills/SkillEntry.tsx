import * as React from 'react';
import StarRatings from 'react-star-ratings';
import { NoMarginLine } from '../../TextUtils';

export interface ISkillEntry {
  name: string;
  rating: number;
}

export const SkillEntry: React.FC<ISkillEntry> = ({
  name,
  rating,
}) => {
  return (
    <>
      <NoMarginLine>{name}</NoMarginLine>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        starDimension="20px"
        starSpacing="8px"
        numberOfStars={5}
        name="rating"
      ></StarRatings>
    </>
  );
};
