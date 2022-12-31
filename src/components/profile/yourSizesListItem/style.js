import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContaiber: {
    marginHorizontal: wp(5),
    marginBottom: hp(1.75),
  },
  styleImage: {
    backgroundColor: colors.styleListItemBox,
    height: wp(23.5),
    width: wp(23.5),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.medium,
    color: colors.secondaryColor,
    textTransform: 'capitalize',
  },
  valuesText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
