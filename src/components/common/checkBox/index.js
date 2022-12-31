import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';

const CheckBox = ({onPress, containerStyle, value}) => {
  return (
    <TouchableOpacity
      style={[style.mainContainer, containerStyle]}
      activeOpacity={1}
      onPress={onPress}>
      {value && (
        <Image
          source={icons.tick}
          resizeMode={'contain'}
          style={style.tickIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
