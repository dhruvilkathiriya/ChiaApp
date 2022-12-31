import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, isIOS, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
    backgroundColor: colors.inputBg,
    marginHorizontal: wp(4.5),
    borderRadius: wp(2.25),
    paddingVertical: wp(3.5),
    paddingHorizontal: wp(4.5),
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  dropdownTitleStyle: {
    flex: 1,
  },
  dropdownTitleTextStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  dropdownContainerStyle: {
    width: wp(91),
    height: 186,
    marginLeft: -wp(4.5),
    marginTop: isIOS ? hp(1.5) : -hp(1.5),
    marginRight: wp(4.5),
  },
  downArrowStyle: {
    height: wp(4),
    width: wp(3),
  },
});
