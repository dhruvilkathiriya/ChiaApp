import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';

const ProfileHeader = ({
  hideBack,
  title,
  titleStyle,
  mainContainer,
  closeIconContainer,
  rightViewVisible,
  isCustomBackPress,
  customBackPress,
}) => {
  const {goBack} = useNavigation();

  return (
    <View style={[style.mainContainer, mainContainer]}>
      <View style={style.leftContainer}>
        {!hideBack && (
          <TouchableOpacity
            style={[style.closeIconContainer, closeIconContainer]}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={isCustomBackPress ? customBackPress : goBack}>
            <Image
              source={icons.backVector}
              style={style.closeIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={style.centerContainer}>
        <Text style={[style.titleText, titleStyle]}>{title}</Text>
      </View>
      {!rightViewVisible && <View style={style.rightContainer} />}
    </View>
  );
};

export default ProfileHeader;
