import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(0.75),
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
  },
  title: {
    fontSize: fontSize(10),
    lineHeight: fontSize(15),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
