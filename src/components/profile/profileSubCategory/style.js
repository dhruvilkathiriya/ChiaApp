import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  category: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    letterSpacing: 1,
    lineHeight: fontSize(24),
    textTransform: 'capitalize',
  },
  arrowImage: {
    height: wp(2.25),
    width: wp(4.5),
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
    //tintColor: colors.whiteBg,
  },
  tickViewStyle: {
    height: wp(4.5),
    width: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  checkBoxContainer: {
    flexDirection: 'row',
  },
});
