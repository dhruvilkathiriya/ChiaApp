import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(4),
    backgroundColor: colors.inputBg,
    marginHorizontal: wp(4.5),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: wp(25),
    paddingVertical: wp(3.5),
    paddingHorizontal: wp(8.5),
  },
  input: {
    flex: 1,
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    padding: 0,
    textAlignVertical: 'center',
    marginLeft: wp(5),
    letterSpacing: 1,
  },
  searchIcon: {
    height: wp(5),
    width: wp(5),
  },
});
