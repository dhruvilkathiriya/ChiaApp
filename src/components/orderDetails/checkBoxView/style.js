import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(6),
    marginBottom: hp(1),
  },
  checkBoxView: {
    height: wp(4.5),
    width: wp(4.5),
    padding: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  checkBoxImg: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.whiteBg,
    padding: wp(1),
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryText,
    marginLeft: wp(2.2),
  },
});
