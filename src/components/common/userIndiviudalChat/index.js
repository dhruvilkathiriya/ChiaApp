import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

const UserIndiviudalChat = ({title}) => {
  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>{title}</Text>
      </View>
      <View style={style.triangleCorner} />
    </>
  );
};
export default UserIndiviudalChat;
