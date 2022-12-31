import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';
import {hp, isIOS, statusBarHeight, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';
export const style = StyleSheet.create({
  mainModalStyle: {
    flex: 1,
    margin: 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    marginTop: isIOS ? statusBarHeight : 0,
    borderTopLeftRadius: wp(2.7),
    borderTopRightRadius: wp(2.7),
  },
  headerContainerStyle: {
    marginTop: hp(2.7),
    marginBottom: 0,
  },
  headerTextStyle: {
    color: colors.primaryColor,
    marginBottom: hp(0.5),
  },
  headerStyle: {
    height: hp(1.5),
  },
  myHeartTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  tickImageViewStyle: {
    height: wp(4.5),
    width: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.whiteBg,
  },
  sectionHeaderMainView: {
    marginTop: hp(2.5),
    marginBottom: hp(0),
  },
  designerTitleStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  titleText: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.secondaryText,
    marginLeft: wp(2.2),
    marginTop: isIOS ? hp(0.35) : 0,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginBottom: hp(1.1),
  },
  textInputMainContainer: {
    borderWidth: 1,
    width: wp(33.9),
    marginBottom: 0,
    marginHorizontal: 0,
    borderRadius: wp(2.25),
    paddingVertical: wp(3.5),
    paddingHorizontal: wp(4.5),
    backgroundColor: colors.inputBg,
    borderColor: colors.inputBorder,
  },
  inputTextStyle: {
    flex: 1,
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.light,
    padding: 0,
  },
  minMaxMainViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviderViewStyle: {
    width: wp(7.2),
    height: 1,
    backgroundColor: colors.secondaryColor,
  },
  colorMainViewStyle: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(6),
    backgroundColor: colors.styleListItemBox,
    marginBottom: hp(1.25),
    marginLeft: wp(3.2),
  },
  backButtonStyle: {
    marginBottom: -hp(1.5),
    marginTop: -hp(1),
    marginLeft: wp(1),
  },
});
