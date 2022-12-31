import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 2,
    backgroundColor: colors.whiteBg,
  },
  containerStyle: {
    marginHorizontal: wp(1),
  },
  headerContainerStyle: {
    marginBottom: 0,
  },
  headerTextStyle: {
    marginBottom: hp(0.5),
    fontSize: fontSize(14),
    lineHeight: fontSize(15),
    color: colors.secondaryColor,
    fontFamily: fontFamily.light,
  },
  sepratorViewStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.secondaryBg,
    marginTop: hp(0.85),
    marginBottom: hp(2.5),
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
  noSearchResultView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noSearchTextStyle: {
    textAlign: 'center',
    fontSize: fontSize(16),
    lineHeight: fontSize(20),
    fontFamily: fontFamily.regular,
  },
});
