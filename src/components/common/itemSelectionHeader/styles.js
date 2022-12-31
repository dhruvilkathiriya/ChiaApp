import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    color: colors.backgroundColor,
    marginTop: hp(1),
    marginBottom: hp(1.5),
  },
  closeIconContainerStyle: {
    width: wp(2.5),
    height: wp(4),
    marginLeft: hp(3),
    marginTop: hp(3.35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    height: wp(4),
    width: wp(2.5),
  },
  headerStyle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    textTransform: 'uppercase',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: hp(2.5),
    marginLeft: hp(1),
    color: colors.primaryColor,
  },
});
