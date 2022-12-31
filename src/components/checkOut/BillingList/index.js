import React from 'react';
import {Text, View} from 'react-native';

import {style} from './style';

const BillingList = ({title, subTitle}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.subtitle}>{subTitle}</Text>
    </View>
  );
};

export default BillingList;
