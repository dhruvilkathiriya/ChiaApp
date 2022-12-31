import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: hp(1.25),
    justifyContent: 'space-between',
    marginHorizontal: wp(4.5),
    width: wp(91),
  },
  input: {
    width: wp(40.8),
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: wp(2.25),
    paddingVertical: wp(3.5),
    paddingHorizontal: wp(4.5),
    backgroundColor: colors.inputBg,
  },
});
