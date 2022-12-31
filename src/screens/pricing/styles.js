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
  allowOffer: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    textTransform: 'uppercase',
  },
  offerSent: {
    paddingHorizontal: wp(7.75),
  },
  textOffer: {
    fontSize: fontSize(12),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  textRent: {
    marginTop: hp(4.7),
    marginBottom: hp(1.5),
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  viewLonger: {
    marginTop: hp(4),
  },
});
