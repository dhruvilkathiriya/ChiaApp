import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryBg,
    height: hp(6.7),
    marginHorizontal: wp(4),
    borderRadius: 25,
  },
  selectedViewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.whiteBg,
    height: hp(6),
    margin: hp(0.35),
    borderRadius: 25,
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.secondaryBg,
    borderRadius: 25,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: fontSize(14),
    color: colors.placeholderText,
    fontFamily: fontFamily.light,
    fontWeight: '300',
  },
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: fontSize(14),
    color: colors.goldColor,
    fontFamily: fontFamily.light,
    fontWeight: '300',
  },
});
