import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: hp(1.5),
  },
  leftTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    fontWeight: '300',
    textTransform: 'uppercase',
    color: colors.secondaryColor,
  },
  rightTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    fontWeight: '700',
    marginRight: wp(6.4),
    textDecorationLine: 'underline',
    color: colors.secondaryColor,
  },
});
