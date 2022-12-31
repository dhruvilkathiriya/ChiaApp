import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(3),
    marginTop: hp(0.5),
    marginBottom: hp(2),
  },
  innerViewStyle: {
    marginLeft: wp(5.5),
  },
  textCountStyle: {
    fontSize: fontSize(10),
    lineHeight: fontSize(12),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
    letterSpacing: 1.5,
  },
  textNameStyle: {
    fontSize: fontSize(10),
    lineHeight: fontSize(12),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginTop: hp(0.5),
  },
});
