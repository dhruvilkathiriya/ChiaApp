import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';
import { hp, wp } from '../../../helper/constants';

import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(6.4),
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    paddingTop: hp(1),
  },
});
