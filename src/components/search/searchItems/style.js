import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  textStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    marginLeft: wp(6.5),
  },
});
