import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const ProfileSubCategory = ({
  category,
  onPress,
  mainContainer,
  rightArrowVisible,
}) => {
  return (
    <TouchableOpacity
      style={[style.mainContainer, mainContainer]}
      onPress={onPress}>
      <Text style={style.category}>{category}</Text>
      {!rightArrowVisible ? (
        <Image
          source={icons.rightArrow}
          style={style.arrowImage}
          resizeMode={'contain'}
        />
      ) : (
        <TouchableOpacity
          style={style.checkBoxContainer}
          onPress={() => onPress && onPress(item)}>
          <View style={style.tickViewStyle} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
export default ProfileSubCategory;
