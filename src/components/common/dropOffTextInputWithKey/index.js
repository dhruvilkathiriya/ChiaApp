import React from 'react';
import {View, Text, TextInput} from 'react-native';

import {style} from './styles';

const DropOffTextInputWithKey = ({
  title,
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
  hideSubTitle,
  subTitle,
  isPrefixAvailable,
  prefixValue,
  isSuffixAvailable,
  suffixValue,
}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.textStyle}>{title}</Text>
      <View style={style.inputContainerStyle}>
        {isPrefixAvailable && (
          <Text style={style.prefixStyle}>{prefixValue}</Text>
        )}
        <TextInput
          style={style.inputStyle}
          value={`${value}`}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          keyboardType={'number-pad'}
        />
        {isSuffixAvailable && (
          <Text style={style.suffixStyle}>{suffixValue}</Text>
        )}
      </View>
      {!hideSubTitle && <Text style={style.textSubTitle}>{subTitle}</Text>}
    </View>
  );
};

export default DropOffTextInputWithKey;
