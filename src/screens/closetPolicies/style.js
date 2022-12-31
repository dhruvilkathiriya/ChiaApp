import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';

import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainTitle: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(14),
    lineHeight: fontSize(22),
    marginBottom: hp(1),
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
    marginBottom: hp(2),
  },
  container: {
    marginHorizontal: wp(6.5),
  },
  main: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
});
