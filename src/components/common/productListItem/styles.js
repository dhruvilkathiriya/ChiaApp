import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    margin: wp(1),
    backgroundColor: colors.secondaryBg,
    height: hp(36.3),
    width: wp(47.2),
  },
  heartViewStyle: {
    marginRight: wp(2.7),
    marginTop: wp(2.7),
    alignSelf: 'flex-end',
  },
  heartIcon: {
    height: wp(6.4),
    width: wp(6.4),
  },
  textViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: wp(4.8),
    marginBottom: wp(4.8),
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
  },
});
