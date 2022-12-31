import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: hp(11),
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButtonContainerStyle: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(11),
  },
  rightButtonContainerStyle: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(11),
  },
  verticalLineStyle: {
    borderRightWidth: 1,
    borderRightColor: colors.whiteBg,
    height: hp(11),
  },
  buttonContainer: {
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(4.25),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.whiteBg,
    textAlign: 'center',
  },
});
