import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

const AddressDetailsView = ({
  leftText,
  rightText,
  onRightPress,
  rightTextVisible,
}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.leftTextStyle}>{leftText}</Text>
      {!rightTextVisible && (
        <Text style={style.rightTextStyle} onPress={onRightPress}>
          {rightText}
        </Text>
      )}
    </View>
  );
};
export default AddressDetailsView;
