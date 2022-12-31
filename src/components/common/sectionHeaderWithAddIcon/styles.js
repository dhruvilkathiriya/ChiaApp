import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5.25),
    borderBottomWidth: hp(0.15),
    marginBottom: hp(0.75),
    borderBottomColor: colors.secondaryBg,
  },
  outterContainer: {},
  headerStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
    textTransform: 'uppercase',
  },
  arrowImage: {
    height: wp(4),
    width: wp(4),
    alignItems: 'baseline',
  },
  contentContainerStyle: {
    flexDirection: 'row',
    marginBottom: hp(1.25),
    justifyContent: 'space-between',
    paddingHorizontal: wp(5.25),
  },
  contentTextStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
