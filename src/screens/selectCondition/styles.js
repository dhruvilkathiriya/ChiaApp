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
  inviteFriendsTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  titleTextStyle: {
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    fontSize: fontSize(14),
    lineHeight: fontSize(22),
  },
  decsTextStyle: {
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    fontSize: fontSize(12),
    lineHeight: fontSize(18),
    marginTop: -hp(0.3),
  },
});
