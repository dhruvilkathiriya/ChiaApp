import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {style} from './style';

const ClosetListingSection = ({
  title,
  rightButtonTitle,
  onRightButtonPress,
  children,
}) => {
  return (
    <>
      <View style={style.mainContainer}>
        <Text style={style.title}>{title}</Text>
        <TouchableOpacity onPress={onRightButtonPress}>
          <Text style={style.title}>{rightButtonTitle}</Text>
        </TouchableOpacity>
      </View>
      {children}
    </>
  );
};
export default ClosetListingSection;
