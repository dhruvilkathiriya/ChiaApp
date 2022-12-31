import React from 'react';
import {Text, View} from 'react-native';

import {style} from './style';

const YourSizesListItem = ({data}) => {
  return (
    <View style={style.mainContaiber}>
      <Text style={style.titleText}>{data?.title}</Text>
      <Text style={style.valuesText}>{data?.values}</Text>
    </View>
  );
};
export default YourSizesListItem;
