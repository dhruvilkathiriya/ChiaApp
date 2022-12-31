import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../../helper/colors';

import {hp, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(5.3),
  },
  titleText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  flatListStyle: {
    marginBottom: hp(3),
  },
  footer: {
    padding: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.title,
    marginLeft: wp(2),
  },
});
