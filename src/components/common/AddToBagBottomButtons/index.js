import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {style} from './styles';

const AddToBagBottomButtons = ({
  leftButtonTopLineTitle,
  leftButtonBottomLineTitle,
  rightButtonTopLineTitle,
  rightButtonBottomLineTitle,
  leftButtonContainerStyle,
  rightButtonContainerStyle,
  leftButtonTopLineTitleStyle,
  rightButtonTopLineTitleStyle,
  leftButtonBottomLineTitleStyle,
  rightButtonBottomLineTitleStyle,
  onLeftButtonPress,
  onRightButtonPress,
  isLeftButtonVisible,
  isRightButtonVisible,
}) => {
  return (
    <View style={style.mainContainer}>
      {isLeftButtonVisible ? (
        <>
          <TouchableOpacity
            activeOpacity={1}
            style={[style.leftButtonContainerStyle, leftButtonContainerStyle]}
            onPress={onLeftButtonPress}>
            <Text style={[style.titleText, leftButtonTopLineTitleStyle]}>
              {leftButtonTopLineTitle}
            </Text>
            <Text style={[style.titleText, leftButtonBottomLineTitleStyle]}>
              {leftButtonBottomLineTitle}
            </Text>
          </TouchableOpacity>
          <View style={style.verticalLineStyle} />
        </>
      ) : null}
      <TouchableOpacity
        activeOpacity={1}
        style={[style.rightButtonContainerStyle, rightButtonContainerStyle]}
        onPress={onRightButtonPress}>
        <Text style={[style.titleText, rightButtonTopLineTitleStyle]}>
          {rightButtonTopLineTitle}
        </Text>
        <Text style={[style.titleText, rightButtonBottomLineTitleStyle]}>
          {rightButtonBottomLineTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToBagBottomButtons;
