import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, isIOS, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    height: wp(4.5),
    width: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  mainTitle: {
    textTransform: 'capitalize',
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.whiteBg,
  },
  titleText: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.secondaryText,
    marginLeft: wp(2.2),
    marginTop: isIOS ? hp(0.35) : 0,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(6),
    marginBottom: hp(2.2),
  },
});
