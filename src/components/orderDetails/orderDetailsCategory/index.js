import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';
const OrderDetailsCategory = ({
  mainTitle,
  children,
  mainContainer,
  titleStyle,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <Text style={[style.mainTitle, titleStyle]}>{mainTitle}</Text>
      {children}
    </View>
  );
};
export default OrderDetailsCategory;
