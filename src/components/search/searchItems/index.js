import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {style} from './style';

const SearchItems = ({onItemPress, data}) => {
  const title = JSON.parse(data?.filters || '{}')?.search || '';
  return (
    <TouchableOpacity onPress={() => onItemPress(title)}>
      <Text style={style.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SearchItems;
