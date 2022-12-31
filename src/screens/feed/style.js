import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContaiber: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  footerContainer: {
    marginTop: hp(1),
    marginBottom: hp(3),
  },
  footerDivider: {
    backgroundColor: colors.secondaryBg,
    height: 1,
  },
  reachedEndText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    backgroundColor: colors.whiteBg,
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: wp(1.5),
    marginTop: -fontSize(12),
  },
  needMoreButton: {
    paddingHorizontal: wp(8.5),
    paddingVertical: wp(4.25),
    marginTop: hp(2.5),
    backgroundColor: colors.secondaryColor,
    borderRadius: wp(2.75),
    alignSelf: 'center',
  },
  needMoreButtonText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.whiteBg,
  },
  footerTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.title,
    marginLeft: wp(2),
  },
});
