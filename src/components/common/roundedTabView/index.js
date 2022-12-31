import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './styles';

const RoundedTabView = ({
  leftTabTitle,
  rightTabTitle,
  onLeftTabPress,
  onRightTabPress,
  maineContainerStyle,
  isLeftTabSelected,
}) => {
  const [isLeftStyleSelected, setLeftStyleSelected] = useState(
    !!isLeftTabSelected,
  );
  const changeStyle = () => {
    setLeftStyleSelected(prevState => !prevState);
  };
  return (
    <View style={[style.mainContainer, maineContainerStyle]}>
      <TouchableOpacity
        style={isLeftStyleSelected ? style.selectedViewStyle : style.viewStyle}
        onPress={() => {
          if (!isLeftStyleSelected) {
            onLeftTabPress();
            changeStyle();
          }
        }}>
        <Text
          style={
            isLeftStyleSelected ? style.selectedTextStyle : style.textStyle
          }>
          {leftTabTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={!isLeftStyleSelected ? style.selectedViewStyle : style.viewStyle}
        onPress={() => {
          if (isLeftStyleSelected) {
            onRightTabPress();
            changeStyle();
          }
        }}>
        <Text
          style={
            !isLeftStyleSelected ? style.selectedTextStyle : style.textStyle
          }>
          {rightTabTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundedTabView;
