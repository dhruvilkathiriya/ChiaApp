import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderRadius: wp(26),
    width: wp(91.5),
    alignSelf: 'center',
    padding: wp(0.55),
    backgroundColor: colors.secondaryBg,
  },
  activeTabView: {
    flex: 1,
    alignItems: 'center',
    borderRadius: wp(26),
    paddingVertical: hp(1.7),
    backgroundColor: colors.whiteBg,
  },
  inactiveTabView: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp(1.7),
  },
  activeTabText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    color: colors.goldColor,
    fontFamily: fontFamily.light,
  },
  inactiveTabText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    color: colors.placeholderText,
    fontFamily: fontFamily.light,
  },
});
