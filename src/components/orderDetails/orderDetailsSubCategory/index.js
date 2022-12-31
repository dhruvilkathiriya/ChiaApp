import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const OrderDetailsSubCategory = ({
  leftText,
  rightText,
  mainContainer,
  leftTextStyle,
  rightTextStyle,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <Text style={[style.textStyle, leftTextStyle]}>{leftText}</Text>
      {rightText && (
        <Text style={[style.textStyle, rightTextStyle]}>{rightText}</Text>
      )}
    </View>
  );
};
export default OrderDetailsSubCategory;
