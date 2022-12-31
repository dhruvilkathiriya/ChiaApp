import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContaiber: {
    height: hp(13),
    width: wp(27.25),
    backgroundColor: colors.backgroundColor,
    marginBottom: hp(3.25),
  },
});
