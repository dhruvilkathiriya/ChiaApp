import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../helper/colors';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const CheckBoxView = ({item, onItemPress}) => {
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={[
          style.checkBoxView,
          {
            backgroundColor: item.isSelected
              ? colors.checkBoxBg
              : colors.inputBg,
          },
        ]}
        onPress={onItemPress}>
        {item.isSelected && (
          <Image
            source={icons.tick}
            resizeMode={'contain'}
            style={style.checkBoxImg}
          />
        )}
      </TouchableOpacity>
      <Text style={style.textStyle}>{item.description}</Text>
    </View>
  );
};
export default CheckBoxView;
