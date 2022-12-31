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
    marginBottom: hp(2.7),
  },
  checkBox: {
    backgroundColor: colors.checkBoxBg,
    height: wp(4),
    width: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: fontSize(4),
    borderWidth: 1,
    borderColor: colors.checkBoxBg,
    marginLeft: wp(15),
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.whiteBg,
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(4.5),
    marginBottom: hp(2),
  },
  checkBoxTitle: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(16),
    flex: 1,
  },
  textBillingAdd: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    fontWeight: '700',
    lineHeight: fontSize(24.83),
    marginHorizontal: wp(4.5),
    marginTop: hp(2),
  },
  inputTextStyle: {
    color: colors.secondaryColor,
    fontFamily: fontFamily.regular,
  },
  addNewCardTextStyle: {
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
});
