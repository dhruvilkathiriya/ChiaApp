import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';

import {hp, wp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(9),
  },
  colorMainViewStyle: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(6),
    backgroundColor: colors.styleListItemBox,
    marginBottom: hp(1.25),
    marginLeft: wp(3.2),
  },
});
