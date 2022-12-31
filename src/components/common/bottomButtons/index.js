import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {style} from './styles';

const BottomButtons = ({
  onButton1Press,
  onButton2Press,
  title1,
  title2,
  isRent,
}) => {
  const {bottom} = useSafeAreaInsets();
  const buttonContainerStyle = [style.buttonContainer, {paddingBottom: bottom}];

  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        activeOpacity={1}
        style={[buttonContainerStyle, style.leftButtonContainer]}
        onPress={onButton1Press}>
        <Text style={[style.titleText, isRent ? {} : style.boldTitleText]}>
          {title1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={buttonContainerStyle}
        onPress={onButton2Press}>
        <Text style={[style.titleText, isRent ? style.boldTitleText : {}]}>
          {title2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;
