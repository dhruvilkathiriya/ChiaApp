import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContaiber: {
    marginTop: hp(2.6),
    borderBottomWidth: 0,
  },
  subFieldMainText: {
    borderBottomWidth: 0,
  },
  mainView: {
    backgroundColor: colors.whiteBg,
    paddingTop: hp(1),
  },
  border: {
    marginBottom: 10,
    borderTopWidth: hp(0.15),
    borderTopColor: colors.secondaryBg,
  },
  flatlistContainer: {
    marginStart: wp(6.4),
    marginEnd: wp(6.4),
  },
  flatlistSeprator: {
    marginHorizontal: wp(3.2),
  },
  checkBoxContainer: {
    backgroundColor: colors.whiteBg,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    height: wp(4.5),
    width: wp(4.5),
    borderRadius: wp(1.25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
  },
  vacationModeContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vacationModeTextStyle: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    letterSpacing: 1,
    lineHeight: fontSize(24),
    textTransform: 'capitalize',
    marginBottom: hp(1),
  },
});
