import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5.25),
    borderBottomWidth: hp(0.15),
    marginBottom: hp(0.75),
    borderBottomColor: colors.secondaryBg,
  },
  outterContainer: {
    marginBottom: hp(3),
  },
  header1Style: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  header2Style: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  imageStyle: {
    height: wp(4.5),
    width: wp(4.5),
    tintColor: colors.secondaryColor,
  },
});
