import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(1),
  },
  activeDot: {
    height: wp(2),
    width: wp(2),
    borderRadius: wp(2),
    backgroundColor: colors.activeDot,
    marginHorizontal: wp(0.5),
  },
  inActiveDot: {
    height: wp(2),
    width: wp(2),
    borderRadius: wp(2),
    backgroundColor: colors.styleListItemBox,
    marginHorizontal: wp(0.5),
  },
});
