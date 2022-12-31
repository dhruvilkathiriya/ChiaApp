import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';

const ItemByCategoryHeader = ({
  title,
  titleStyle,
  filterViewVisible,
  onFilterIconPress,
  mainContainerStyle,
}) => {
  const {goBack} = useNavigation();

  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
      <View style={style.categoryNameContainer}>
        <TouchableOpacity style={style.backIconContainer} onPress={goBack}>
          <Image
            source={icons.backArrowBlack}
            style={style.closeIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={style.centerContainer}>
          <Text style={[style.titleText, titleStyle]}>{title}</Text>
        </View>
      </View>
      {filterViewVisible && (
        <TouchableOpacity
          style={style.filterIconContainer}
          onPress={onFilterIconPress}>
          <Image
            source={icons.filterIcon}
            style={style.filterIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemByCategoryHeader;
