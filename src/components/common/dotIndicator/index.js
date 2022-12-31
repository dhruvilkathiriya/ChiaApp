import React from 'react';
import {View} from 'react-native';

import {style} from './styles';

const DotIndicator = ({length, activeIndex}) => {
  let dots = [];
  for (let index = 0; index < length; index++) {
    if (index === activeIndex) dots.push(<View style={style.activeDot} />);
    else dots.push(<View style={style.inActiveDot} />);
  }

  return <View style={style.mainContainer}>{dots}</View>;
};

export default DotIndicator;
