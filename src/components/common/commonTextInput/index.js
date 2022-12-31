import React from 'react';
import {View, TextInput} from 'react-native';

import {colors} from '../../../helper/colors';
import {style} from './styles';

const CommonTextInput = ({
  placeholder,
  value,
  maxLength,
  onChangeText,
  autoCapitalize,
  multiLine,
  secureTextEntry,
  mainContainer,
  keyboardType,
  inputStyle,
  placeholderTextColor,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <TextInput
        style={[style.input, inputStyle, multiLine ? style.multiLine : {}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || colors.placeholderText}
        value={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        multiline={multiLine}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CommonTextInput;
