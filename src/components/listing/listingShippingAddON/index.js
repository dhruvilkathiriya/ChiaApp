import React from 'react';
import {Text, View, TextInput} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import SwitchButton from '../../common/switchButton';
import {style} from './styles';

const ListingShippingAddON = ({
  title,
  hideSwitch,
  value,
  containerStyle,
  isTitleComponent,
  onValueChange,
  mainTitleTextStyle,
  onValueTextPress,
  placeholder,
  onChangeText,
  autoCapitalize,
  isTextInput,
  name,
  isPrefixAvailable,
  prefixValue,
  isSuffixAvailable,
  suffixValue,
}) => {
  return isTitleComponent ? (
    <View style={[style.mainContainer, {marginTop: hp(3)}, containerStyle]}>
      <Text style={[style.mainTitleText, mainTitleTextStyle]}>{title}</Text>
      {!hideSwitch && (
        <SwitchButton value={value} name={name} onValueChange={onValueChange} />
      )}
    </View>
  ) : (
    <View style={[style.mainContainer, containerStyle]}>
      <Text style={style.titleText}>{title}</Text>
      {!isTextInput ? (
        <Text style={style.valueText} onPress={onValueTextPress}>
          {value}
        </Text>
      ) : (
        <View style={style.inputContainerStyle}>
          {isPrefixAvailable && (
            <Text style={style.prefixStyle}>{prefixValue}</Text>
          )}
          <TextInput
            keyboardType={'number-pad'}
            style={style.input}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderText}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
          />
          {isSuffixAvailable && (
            <Text style={style.suffixStyle}>{suffixValue}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default ListingShippingAddON;
