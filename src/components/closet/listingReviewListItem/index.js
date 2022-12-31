import React from 'react';
import {View, Text} from 'react-native';
import {Bar} from 'react-native-progress';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {style} from './style';

const ListingReviewListItem = ({title, count, progress}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={[style.title, {textAlign: 'right'}]}>{title}</Text>
      <Bar
        progress={progress || 0}
        width={wp(25)}
        height={wp(2.15)}
        unfilledColor={colors.styleListItemBox}
        borderColor={'transparent'}
        color={colors.activeDot}
        borderRadius={0}
        style={style.bar}
      />
      <Text style={style.title}>({count || 0})</Text>
    </View>
  );
};
export default ListingReviewListItem;
