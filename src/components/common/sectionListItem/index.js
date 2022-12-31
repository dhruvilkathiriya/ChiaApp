import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {style} from './styles';

const SectionListItem = ({
  headerLeftTitle,
  headerRightTitle,
  onItemPress,
  rightViewVisible,
  mainContainer,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <Text style={style.header1Style}>{headerLeftTitle}</Text>
      {!rightViewVisible && (
        <TouchableOpacity onPress={onItemPress}>
          <Text style={style.header2Style}>{headerRightTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionListItem;
