import React from 'react';
import {Text, View} from 'react-native';

import SwitchButton from '../../common/switchButton';
import {style} from './styles';

const ListingItemAvailability = ({
  title,
  withSwitch,
  value,
  containerStyle,
  onValueChange,
  name,
}) => {
  return withSwitch ? (
    <View style={[style.mainContainer, containerStyle]}>
      <Text style={style.titleText}>{title}</Text>
      <SwitchButton value={value} onValueChange={onValueChange} name={name} />
    </View>
  ) : (
    <View style={[style.mainContainer, containerStyle]}>
      <Text style={style.titleText}>{title}</Text>
      <Text style={style.valueText}>{value}</Text>
    </View>
  );
};

export default ListingItemAvailability;
