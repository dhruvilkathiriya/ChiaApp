import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(6.5),
    marginBottom: hp(2.2),
  },
  title: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
  },
  icon: {
    height: wp(4),
    width: wp(2.5),
    marginRight: wp(2.4),
  },
});
