import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {strings} from '../../../helper/strings';
import {style} from './styles';

const SavedSearchItem = ({data, onDeletePress}) => {
  const title = Object.values(JSON.parse(data?.filters || '{}'))?.join() || '';
  return (
    <View style={style.mainContainer}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onDeletePress}>
        <Text style={style.deleteText}>{strings.delete}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedSearchItem;
