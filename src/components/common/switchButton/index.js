import React from 'react';
import {Switch} from 'react-native';

const SwitchButton = ({value, onValueChange, name}) => {
  return (
    <Switch
      trackColor={{false: '#EDEDE9', true: '#EDEDE9'}}
      thumbColor={value ? '#CEBE40' : '#FFFFFF'}
      style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
      onValueChange={e => onValueChange(e, name)}
      value={value}
    />
  );
};

export default SwitchButton;
