import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const ClosetFiltersSection = ({
  onRentalPeriodPress,
  onSizePress,
  onRefinePress,
}) => {
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity style={style.touchView} onPress={onRentalPeriodPress}>
        <Text style={style.textStyle}>{'Rental Period'}</Text>
        <Text style={style.textStyle}>{'2/14-2/17'}</Text>
      </TouchableOpacity>
      <View style={style.sepratorStyle} />
      <TouchableOpacity style={style.touchView} onPress={onSizePress}>
        <Text style={style.textStyle}>{'Size'}</Text>
        <Text style={style.textStyle}>{'2,4'}</Text>
      </TouchableOpacity>
      <View style={style.sepratorStyle} />
      <TouchableOpacity
        style={[style.touchView, {flexDirection: 'row'}]}
        onPress={onRefinePress}>
        <Text style={style.textStyle}>{'Refine'}</Text>
        <Image
          source={icons.filterIcon}
          style={style.imageStyle}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};
export default ClosetFiltersSection;
