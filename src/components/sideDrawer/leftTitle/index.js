import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const LeftTitle = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.mainContainer}>
        <Image source={icons.backArrow} style={style.icon} />
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default LeftTitle;
