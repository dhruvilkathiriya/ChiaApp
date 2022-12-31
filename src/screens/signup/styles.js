import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';

import {hp, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: colors.backgroundColor,
  },
  newsLetterContainer: {
    marginHorizontal: wp(4.5),
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp(2),
    marginTop: hp(1.5),
  },
  newsLetterText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryText,
    flex: 1,
    marginLeft: wp(2),
  },
  orText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  socialButton: {
    marginBottom: hp(2),
  },
});