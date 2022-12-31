import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(8.5),
  },
  mainTitleText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  titleText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  valueText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    textDecorationLine: 'underline',
  },
  input: {
    width: wp(9),
    //backgroundColor: 'red',
    fontSize: fontSize(14),
    lineHeight: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    textAlignVertical: 'bottom',
    paddingTop: 0,
    paddingBottom: 0,
  },
  prefixStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    width: wp(2),
    textAlignVertical: 'bottom',
  },
  suffixStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    width: wp(4),
    textAlignVertical: 'bottom',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
  },
});
