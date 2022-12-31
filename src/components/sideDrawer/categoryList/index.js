import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const CategoryList = ({title, onPress, rightIcon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.mainContainer}>
        <Text style={style.title}>{title}</Text>
        {rightIcon ? (
          <Image source={icons.backIcon} style={style.icon} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
export default CategoryList;
