import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../helper/colors';

import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const StyleListItem = ({data, hideSelection, onPress}) => {
  const isSelected = data?.isSelected || false;
  return (
    <TouchableOpacity
      style={style.mainContaiber}
      onPress={onPress}
      disabled={hideSelection}>
      <View>
        <Image
          style={style.styleImage}
          source={{uri: data?.iconUrl}}
          resizeMode={'cover'}
        />
        {!hideSelection && (
          <View
            style={[
              style.tickContainer,
              {
                backgroundColor: isSelected
                  ? colors.checkBoxBg
                  : colors.whiteBg,
              },
            ]}>
            {isSelected && (
              <Image
                source={icons.tick}
                resizeMode={'contain'}
                style={style.tickIcon}
              />
            )}
          </View>
        )}
      </View>
      <Text style={style.titleText}>{data?.name}</Text>
    </TouchableOpacity>
  );
};
export default StyleListItem;
