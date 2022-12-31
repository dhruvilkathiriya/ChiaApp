import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    paddingTop: hp(3),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(8.5),
    marginBottom: hp(1),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.regular,
    color: colors.secondaryColor,
    textTransform: 'uppercase',
  },
  rightButtonText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
});
