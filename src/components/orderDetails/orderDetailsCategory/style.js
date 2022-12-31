import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    marginTop: hp(2.2),
  },
  mainTitle: {
    letterSpacing: 1,
    marginBottom: hp(0.5),
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
    paddingLeft: wp(6.5),
  },
});
