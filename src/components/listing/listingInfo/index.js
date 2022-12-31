import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {style} from './styles';

const ListingInfo = ({title, value, onPress}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.titleText}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={style.valueText}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListingInfo;
