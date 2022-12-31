import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp(7.7),
    marginRight: wp(6.9),
  },
  buttonStyle: {
    paddingHorizontal: hp(3),
  },
  container: {
    backgroundColor: colors.secondaryBg,
    paddingVertical: hp(2.3),
  },
  mainText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    fontWeight: '700',
    lineHeight: fontSize(25),
  },
  subText: {
    alignSelf: 'center',
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    lineHeight: fontSize(25),
  },
});
