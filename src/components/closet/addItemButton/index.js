import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const AddItemButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.mainContaiber}>
        <Image
          source={icons.uploadIcon}
          style={style.img}
          resizeMode={'contain'}
        />
        <Text style={style.titleText}>LIST NEW ITEM</Text>
      </View>
    </TouchableOpacity>
  );
};
export default AddItemButton;
