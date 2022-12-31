import React from 'react';
import {View, Text, Image} from 'react-native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const UserTagListItem = ({item}) => {
  return (
    <View style={style.mainContainer}>
      <Image
        source={icons.checkedIcon}
        style={style.checkIcon}
        resizeMode={'contain'}
      />
      <Text style={style.textStyle}>{item}</Text>
    </View>
  );
};
export default UserTagListItem;
