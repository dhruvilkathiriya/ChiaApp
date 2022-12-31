import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    backgroundColor: colors.backgroundColor,
    marginTop: statusBarHeight,
  },
  requireMainView: {
    marginTop: hp(2.5),
    paddingHorizontal: wp(7),
  },
  headerTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    marginTop: hp(2),
    marginBottom: hp(0.5),
  },
  switchTitleTextStyle: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(14),
    lineHeight: fontSize(22),
    color: colors.primaryColor,
  },
  switchContainerStyle: {
    marginTop: hp(0.3),
    paddingHorizontal: -wp(8.5),
  },
});
