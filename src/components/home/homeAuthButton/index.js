import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {style} from './styles';

const HomeAuthButton = ({
  firstText,
  onFirstBtnPress,
  secondText,
  onSecondBtnPress,
}) => {
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity style={style.btnViewStyle} onPress={onFirstBtnPress}>
        <Text style={style.textStyle}>{firstText}</Text>
      </TouchableOpacity>
      <View style={style.sepratorViewStyle} />
      <TouchableOpacity style={style.btnViewStyle} onPress={onSecondBtnPress}>
        <Text style={style.textStyle}>{secondText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeAuthButton;
