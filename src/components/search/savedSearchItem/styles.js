import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    marginBottom: hp(2.6),
  },
  titleContainer: {
    paddingBottom: wp(1),
    paddingHorizontal: wp(7.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  deleteText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    alignSelf: 'flex-end',
    marginHorizontal: wp(7.5),
  },
});
