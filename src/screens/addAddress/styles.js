import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  addAddressTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  inputTextStyle: {
    color: colors.secondaryColor,
    fontFamily: fontFamily.bold,
  },
  textInputMainContainer: {
    marginBottom: hp(1.25),
  },
  saveBtnStyle: {
    borderWidth: 0,
    backgroundColor: colors.saveBtnBg,
    marginVertical: hp(0.75),
  },
  btnTitleStyle: {
    color: colors.whiteBg,
  },
  dropdownRowStyle: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
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
