import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: hp(1.25),
    justifyContent: 'space-between',
    paddingHorizontal: wp(5.25),
  },
  header1Style: {
    flex: 2,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  header2Style: {
    flex: 1,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    textAlign: 'right',
  },
});
