import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';

const Rating = ({
  defaultRating,
  onFinishRating,
  isDisabled,
  ratingContainerStyle,
  size,
}) => {
  return (
    <AirbnbRating
      count={5}
      showRating={false}
      defaultRating={defaultRating}
      size={size || wp(2.7)}
      onFinishRating={onFinishRating}
      isDisabled={isDisabled}
      selectedColor={colors.secondaryColor}
      ratingContainerStyle={ratingContainerStyle}
    />
  );
};

export default Rating;
