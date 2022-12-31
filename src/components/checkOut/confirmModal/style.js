import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainModalStyle: {
    flex: 1,
    margin: 0,
  },
  mainContainerStyle: {
    marginHorizontal: wp(5.5),
    backgroundColor: colors.backgroundColor,
  },
  headerViewStyle: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
    paddingVertical: hp(3),
  },
  headerTextStyle: {
    fontSize: fontSize(28),
    fontFamily: fontFamily.title,
    color: colors.primaryColor,
  },
  btnMainViewStyle: {
    flexDirection: 'row',
  },
  firstBtnViewStyle: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 0.5,
    paddingVertical: hp(2),
    justifyContent: 'center',
    borderRightColor: colors.secondaryBg,
  },
  btnTextStyle: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    lineHeight: fontSize(21),
  },
  secondBtnViewStyle: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 0.5,
    paddingVertical: hp(2),
    justifyContent: 'center',
    borderLeftColor: colors.secondaryBg,
  },
});
