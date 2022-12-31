import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

const IndiviudalChat = ({title}) => {
  return (
    <>
      <View style={style.mainContainer}>
        <Text style={style.text}>{title}</Text>
      </View>
      <View style={style.triangleCorner} />
    </>
  );
};
export default IndiviudalChat;
