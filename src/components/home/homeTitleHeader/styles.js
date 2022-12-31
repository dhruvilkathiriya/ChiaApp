import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(7.5),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1.7),
  },
  leftTextStyle: {
    fontSize: fontSize(30),
    lineHeight: fontSize(44),
    color: colors.secondaryColor,
    fontFamily: fontFamily.titleItalic,
  },
  rightTextStyle: {
    display: 'flex',
    letterSpacing: 1,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    color: colors.secondaryColor,
    fontFamily: fontFamily.light,
    textDecorationLine: 'underline',
  },
});
