import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {style} from './styles';

const HomeTitleHeader = ({
  firstText,
  secondText,
  onBtnPress,
  secondTitleVisible,
}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.leftTextStyle}>{firstText}</Text>
      {!secondTitleVisible && (
        <TouchableOpacity style={style.btnViewStyle} onPress={onBtnPress}>
          <Text style={style.rightTextStyle}>{secondText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeTitleHeader;
