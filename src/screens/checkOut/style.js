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
  dropdownRowStyle: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.whiteBg,
  },
  dropdownRowTextStyle: {
    marginLeft: wp(4),
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  addBillingAddressTextStyle: {
    flex: 1,
    textAlign: 'right',
    marginBottom: hp(3),
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    marginHorizontal: wp(4.5),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    textDecorationLine: 'underline',
    marginVertical: hp(1),
  },
  inputTextStyle: {
    fontFamily: fontFamily.regular,
    color: colors.secondaryColor,
  },
});
