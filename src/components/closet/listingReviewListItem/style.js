import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    marginHorizontal: wp(2.15),
  },
  title: {
    fontSize: fontSize(10),
    lineHeight: fontSize(15),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    width: wp(37.5),
  },
});
