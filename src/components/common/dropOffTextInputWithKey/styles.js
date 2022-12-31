import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  inputStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(14),
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    padding: 0,
    paddingVertical: 0,
  },
  textSubTitle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  prefixStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(14),
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    marginRight: wp(1),
  },
  suffixStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(14),
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    marginLeft: wp(1),
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
    paddingHorizontal: wp(4),
    width: wp(18),
  },
});
