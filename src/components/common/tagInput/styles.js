import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    alignSelf: 'center',
    paddingTop: hp(1),
  },
  inputContainerStyle: {
    backgroundColor: colors.whiteBg,
    borderWidth: 1,
    borderColor: colors.secondaryColor,
    borderRadius: wp(2),
  },
  inputStyle: {
    color: colors.secondaryColor,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.regular,
  },
  tag: {
    backgroundColor: '#fff',
    borderColor: colors.primaryColor,
    borderRadius: wp(5),
    borderWidth: 1,
  },
  tagText: {
    color: colors.primaryColor,
  },
  tagInputLabelStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
