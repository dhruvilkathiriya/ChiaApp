import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './styles';
import {wp} from '../../../helper/constants';
import _ from 'lodash';
import {colors} from '../../../helper/colors';

const OtherColorView = () => {
  return (
    <View style={style.otherColorViewStyle}>
      <View style={style.otherColorInnerViewLineStyle} />
    </View>
  );
};

const MultiColorView = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[
        '#3ba5d9',
        '#a6b5d2',
        '#e0bdce',
        '#e3b2ab',
        '#e7a683',
        '#ea8c2d',
      ]}
      style={style.multiColorViewStyle}
    />
  );
};

const ColorView = ({item, selectedColor, onColorPress}) => {
  const isSelected = _.isEqual(item.hexCode, selectedColor);
  const isWhiteColorSelected = isSelected && _.isEqual(item.hexCode, 'ffffff');
  const isMultiColor = _.isEqual(item.hexCode, 'multi');
  const isOtherColor = _.isEqual(item.hexCode, 'other');
  return (
    <View style={style.colorViewContainerStyle}>
      <TouchableOpacity
        style={[
          style.colorMainViewStyle,
          isSelected && {
            borderColor:
              isWhiteColorSelected || isMultiColor || isOtherColor
                ? '#d7d0c9'
                : `#${item.hexCode}`,
            borderWidth: wp(0.5),
            margin: -wp(0.5),
            height: wp(14),
            width: wp(14),
            borderRadius: wp(7),
            elevation: 0,
            shadowColor: colors.placeholderText,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0,
            shadowRadius: 0,
          },
        ]}
        onPress={onColorPress}>
        {isMultiColor ? (
          <MultiColorView />
        ) : isOtherColor ? (
          <OtherColorView />
        ) : (
          <View
            style={[
              style.defaultColorViewStyle,
              {backgroundColor: `#${item.hexCode}`},
            ]}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ColorView;
