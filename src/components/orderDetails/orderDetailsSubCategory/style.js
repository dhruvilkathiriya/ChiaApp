import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6.5),
  },
  textStyle: {
    letterSpacing: 1,
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
