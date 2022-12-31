import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {style} from './style';

const DesignersListItem = ({
  data,
  onCrossPress,
  enableLeftCross,
  hideCross,
}) => {
  return (
    <TouchableOpacity style={style.mainContaiber} onPress={onCrossPress}>
      <Text style={style.titleText}>
        {enableLeftCross && !hideCross && (
          <Text style={style.titleText} onPress={onCrossPress}>
            {'X '}
          </Text>
        )}
        {data?.name}
        {!enableLeftCross && !hideCross && (
          <Text style={style.titleText} onPress={onCrossPress}>
            {' X'}
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};
export default DesignersListItem;
