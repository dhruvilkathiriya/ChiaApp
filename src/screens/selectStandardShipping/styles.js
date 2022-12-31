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
  switchContainerStyle: {marginTop: hp(2.5), marginLeft: -wp(2)},
  switchTitleTextStyle: {
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontWeight: '300',
  },
  textStyle: {
    marginTop: -hp(0.5),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    fontSize: fontSize(12),
    lineHeight: fontSize(18),
    fontWeight: '300',
  },
  bottomTextContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: wp(6.5),
  },
});
