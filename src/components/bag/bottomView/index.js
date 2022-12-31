import React from 'react';
import {View, Text} from 'react-native';
import {CommonButton} from '../..';
import {style} from './style';

const BottomView = ({onPress, subValue}) => {
  return (
    <View style={style.container}>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.mainText}>ORDER SUBTOTAL</Text>
          <Text style={style.subText}>{`$${subValue}`}</Text>
        </View>
        <CommonButton
          title={'CHECKOUT'}
          containerStyle={style.buttonStyle}
          onPress={onPress}
        />
      </View>
    </View>
  );
};
export default BottomView;
