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
  descText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    marginHorizontal: wp(4.5),
  },
  button: {
    marginTop: hp(3),
  },
  inputContainerStyle: {
    marginTop: hp(3),
  },
  resendOtpTextStyle: {
    flex: 1,
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginHorizontal: wp(4.5),
    marginTop: hp(1.5),
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});
