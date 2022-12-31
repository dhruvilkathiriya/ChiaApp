import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: wp(6.5),
    justifyContent: 'space-between',
    paddingBottom: hp(0.7),
  },
  leftTextStyle: {
    flex: 1.2,
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  rightTextStyle: {
    flex: 1,
    textAlign: 'right',
    fontSize: fontSize(12),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
