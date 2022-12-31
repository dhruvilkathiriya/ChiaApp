import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  itemSepratorViewStyle: {
    borderBottomColor: colors.secondaryBg,
    borderBottomWidth: 1,
  },
  backIconStyle: {
    height: hp(1.8),
    width: wp(1.8),
  },
  backContainerStyle: {
    marginTop: hp(1.5),
    marginLeft: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backTextStyle: {
    marginLeft: wp(2.5),
    fontSize: fontSize(16),
    lineHeight: fontSize(16),
    color: colors.secondaryColor,
    fontFamily: fontFamily.light,
    fontWeight: '700',
  },
  switchContainerStyle: {
    marginLeft: -wp(5.5),
    marginTop: hp(1),
    marginBottom: hp(4),
  },
  switchTitleTextStyle: {
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  rightText: {
    textDecorationLine: 'none',
  },
  leftButtonTopLineTitleStyle: {
    fontWeight: '700',
    color: colors.secondaryColor,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
  },
  leftButtonBottomLineTitleStyle: {
    fontWeight: '300',
    color: colors.secondaryColor,
    fontSize: fontSize(12),
    lineHeight: fontSize(18),
  },
  leftButtonContainerStyle: {backgroundColor: colors.backgroundColor},
  rightButtonContainerStyle: {backgroundColor: colors.saveBtnBg},
  rightButtonBottomLineTitleStyle: {fontWeight: '700'},
  rightButtonTopLineTitleStyle: {fontWeight: '700'},
});
