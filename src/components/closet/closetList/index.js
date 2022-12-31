import React from 'react';
import {Image} from 'react-native';
import {style} from './style';

const ClosetList = ({item}) => {
  return (
    <Image
      source={{uri: item}}
      resizeMode={'cover'}
      style={style.mainContaiber}
    />
  );
};
export default ClosetList;
