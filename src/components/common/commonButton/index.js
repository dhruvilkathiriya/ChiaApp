import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {style} from './styles';

const CommonButton = ({onPress, title, containerStyle}) => {
  return (
    <TouchableOpacity
      style={[style.mainContainer, containerStyle]}
      onPress={onPress}>
      <Text style={style.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
