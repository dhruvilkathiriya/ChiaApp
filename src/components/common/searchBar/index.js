import React from 'react';
import {View, TextInput, Image} from 'react-native';

import {colors} from '../../../helper/colors';
import {icons} from '../../../helper/iconsConstants';
import {strings} from '../../../helper/strings';
import {style} from './styles';

const SearchBar = ({
  placeholder,
  value,
  onChangeText,
  mainContainer,
  onSearchPress,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <Image
        source={icons.search}
        resizeMode={'contain'}
        style={style.searchIcon}
      />
      <TextInput
        style={style.input}
        placeholder={placeholder || strings.search}
        placeholderTextColor={colors.placeholderText}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSearchPress}
        onBlur={onSearchPress}
      />
    </View>
  );
};

export default SearchBar;
