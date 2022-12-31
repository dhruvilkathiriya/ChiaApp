import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {style} from './styles';

const AuthButton = ({onPress, title, containerStyle, titleTextStyle}) => {
  return (
    <TouchableOpacity
      style={[style.mainContainer, containerStyle]}
      onPress={onPress}>
      <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
