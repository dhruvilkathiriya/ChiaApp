import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(6.5),
    flexDirection: 'column',
    marginBottom: hp(3.5),
  },
  subContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    marginBottom: hp(1),
    letterSpacing: 1,
  },
});
