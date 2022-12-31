import React from 'react';
import {View, Text, Image} from 'react-native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const UserFollowersSection = ({followersCount, transactionsCount}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.innerViewStyle}>
        <Text style={style.textCountStyle}>{followersCount}</Text>
        <Text style={style.textNameStyle}>Followers</Text>
      </View>
      <View style={style.innerViewStyle}>
        <Text style={style.textCountStyle}>{transactionsCount}</Text>
        <Text style={style.textNameStyle}>Transactions</Text>
      </View>
    </View>
  );
};
export default UserFollowersSection;
