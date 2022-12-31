import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {style} from './styles';

const ItemSelectionList = ({
  title,
  onPress,
  titleTextStyle,
  children,
  containerStyle,
}) => {
  return (
    <View style={[style.mainContainerStyle, containerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
        </View>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default ItemSelectionList;
