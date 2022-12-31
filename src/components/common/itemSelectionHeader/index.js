import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {style} from './styles';
import {icons} from '../../../helper/iconsConstants';

const ItemSelectionHeader = ({
  title,
  titleTextStyle,
  goBack,
  mainContainerStyle,
}) => {
  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
      <TouchableOpacity style={style.closeIconContainerStyle} onPress={goBack}>
        <Image
          source={icons.backArrow}
          style={style.closeIcon}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <Text style={[style.headerStyle, titleTextStyle]}>{title}</Text>
    </View>
  );
};

export default ItemSelectionHeader;
