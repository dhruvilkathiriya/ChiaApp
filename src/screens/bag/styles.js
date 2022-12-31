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
  },
  headerTextStyle: {
    color: colors.bagTextColor,
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
  emptyCartViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartTextStyle: {
    fontWeight: '300',
    fontFamily: fontFamily.light,
  },
});
