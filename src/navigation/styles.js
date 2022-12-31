import {StyleSheet} from 'react-native';

import {hp, wp} from '../helper/constants';
import {fontFamily, fontSize} from '../helper/utils';

export const style = StyleSheet.create({
  labelStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    letterSpacing: 1.5,
  },
  indicatorStyle: {
    height: 0,
  },
  drawerContainer: {
    width: wp(80),
  },
  hangerTabContainerStyle: {
    paddingTop: hp(1),
    elevation: 0,
    shadowColor: 'transparent',
  },
  homeTabContainerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
  },
});
