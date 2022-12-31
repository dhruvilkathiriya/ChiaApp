import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingTop: statusBarHeight,
  },
  headerContainer: {
    paddingVertical: hp(1.25),
    marginBottom: hp(4),
  },
  headerTextStyle: {
    color: colors.bagTextColor,
  },
  textStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    paddingHorizontal: wp(5.25),
  },
  flatListStyle: {
    marginBottom: hp(4),
  },
  itemHeaderTextStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    paddingHorizontal: wp(5.3),
  },
});
