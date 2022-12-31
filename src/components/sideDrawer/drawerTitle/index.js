import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const DrawerTitle = ({onPress, title}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.viewText}>
        <Text style={style.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={style.viewIcon}>
        <Image style={style.close} source={icons.close} />
      </TouchableOpacity>
    </View>
  );
};
export default DrawerTitle;
