import React from 'react';
import {View, Text} from 'react-native';

import {style} from './styles';

const ListingSection = ({
  title,
  children,
  rightButtonTitle,
  onRightButtonPress,
}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>{title}</Text>
        {rightButtonTitle && (
          <Text style={style.rightButtonText} onPress={onRightButtonPress}>
            {rightButtonTitle}
          </Text>
        )}
      </View>
      {children}
    </View>
  );
};

export default ListingSection;
