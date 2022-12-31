import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';

const AuthHeader = ({
  hideClose,
  title,
  rightButtonTitle,
  onRightButtonPress,
  onClosePress,
  titleStyle,
}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.leftContainer}>
        {!hideClose && (
          <TouchableOpacity
            style={style.closeIconContainer}
            onPress={onClosePress}>
            <Image
              source={icons.close}
              style={style.closeIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={style.centerContainer}>
        <Text style={[style.titleText, titleStyle]}>{title}</Text>
      </View>
      <View style={style.rightContainer}>
        {rightButtonTitle?.length && (
          <TouchableOpacity
            onPress={onRightButtonPress}
            style={style.rightButtonContainer}>
            <Text style={style.rightButtonTitleText}>{rightButtonTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthHeader;
