import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(7),
    // marginTop: hp(7.3),
    marginTop: hp(1.2),
  },
  title: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    lineHeight: fontSize(21),
    marginBottom: hp(2.1),
    fontWeight: '700',
  },
});
