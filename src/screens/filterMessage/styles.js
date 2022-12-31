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
  switchContainerStyle: {
    marginTop: -hp(0.5),
    marginRight: -hp(2.5),
  },
  switchTitleTextStyle: {
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    fontSize: fontSize(12),
    lineHeight: fontSize(18),
    fontWeight: '300',
    textAlign: 'center',
  },
  titleTextStyle: {
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'left',
    marginHorizontal: wp(8.5),
    marginBottom: hp(1),
  },
});
