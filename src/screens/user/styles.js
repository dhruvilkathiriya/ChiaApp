import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {fontFamily, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  logOutTextStyle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    marginBottom: hp(3.5),
    marginTop: -hp(1),
    letterSpacing: 1,
    paddingHorizontal: wp(6.5),
    textTransform: 'uppercase',
  },
});
