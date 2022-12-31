import React from 'react';
import {View, Text, Switch} from 'react-native';
import SwitchButton from '../../common/switchButton';
import {style} from './style';

const ClosetSubListWithSwitch = ({
  title,
  container,
  value,
  onValueChange,
  name,
}) => {
  return (
    <View style={[style.mainContainer, container]}>
      <Text style={style.title}>{title}</Text>
      <View style={style.switch}>
        <SwitchButton value={value} onValueChange={onValueChange} name={name} />
      </View>
    </View>
  );
};
export default ClosetSubListWithSwitch;
