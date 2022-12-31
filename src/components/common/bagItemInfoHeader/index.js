import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {style} from './styles';

const BagItemInfoHeader = ({
  leftSideText,
  rightSideText,
  leftSideTextStyle,
  rightSideTextStyle,
  mainContainerStyle,
  onRightTextPress,
}) => {
  return (
    <View style={[mainContainerStyle, style.mainContainer]}>
      <Text style={[style.leftTextStyle, leftSideTextStyle]}>
        {leftSideText}
      </Text>
      <TouchableOpacity onPress={onRightTextPress}>
        <Text style={[style.rightTextStyle, rightSideTextStyle]}>
          {rightSideText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BagItemInfoHeader;
