import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native-animatable';
import {style} from './style';

const SubTitle = ({title}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};
export default SubTitle;
