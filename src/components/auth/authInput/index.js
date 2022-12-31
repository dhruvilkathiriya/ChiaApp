import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {colors} from '../../../helper/colors';
import {strings} from '../../../helper/strings';
import {style} from './styles';

const AuthInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  mainContainer,
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const onButtonPress = () => setIsSecureTextEntry(!isSecureTextEntry);

  return (
    <View style={[style.mainContainer, mainContainer]}>
      <TextInput
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureTextEntry}
        autoCapitalize={autoCapitalize}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={onButtonPress}>
          <Text style={style.buttonText}>
            {isSecureTextEntry ? strings.show : strings.hide}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthInput;
