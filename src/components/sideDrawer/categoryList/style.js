import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(9),
  },
  title: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    lineHeight: fontSize(21),
    marginBottom: hp(2.1),
  },
  icon: {
    height: wp(4),
    width: wp(2.5),
  },
  viewLeftIcon: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftIcon: {
    height: wp(4),
    width: wp(2.5),
  },
});
