import React from 'react';
import {View, TextInput} from 'react-native';

import {colors} from '../../../helper/colors';
import {style} from './styles';

const StateZipCodeTextInput = ({
  statePlaceholder,
  stateValue,
  onStateChange,
  autoCapitalize,
  zipCodePlaceholder,
  zipCodeValue,
  onZipCodeChange,
  keyboardType,
}) => {
  return (
    <View style={style.mainContainer}>
      <TextInput
        style={style.input}
        placeholder={statePlaceholder}
        placeholderTextColor={colors.placeholderText}
        value={stateValue}
        onChangeText={onStateChange}
        autoCapitalize={autoCapitalize}
      />
      <TextInput
        style={style.input}
        placeholder={zipCodePlaceholder}
        placeholderTextColor={colors.placeholderText}
        value={zipCodeValue}
        onChangeText={onZipCodeChange}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default StateZipCodeTextInput;
