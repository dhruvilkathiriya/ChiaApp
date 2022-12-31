import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  flatList1Container: {
    paddingLeft: wp(8.8),
    paddingBottom: hp(3),
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
  },
  itemSepratorStyle: {
    width: wp(2),
  },
  footerStyle: {
    width: wp(12),
  },
  flatList2Container: {
    paddingBottom: hp(3),
  },
  brandViewStyle: {
    width: wp(94),
    paddingVertical: hp(2),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryBg,
  },
  textStyle: {
    marginHorizontal: wp(4.2),
    fontSize: fontSize(30),
    lineHeight: fontSize(44),
    color: colors.secondaryColor,
    fontFamily: fontFamily.titleItalic,
    marginVertical: hp(8.5),
  },
  shopContainerStyle: {
    paddingLeft: wp(5),
    paddingBottom: hp(3),
  },
  shopBtnViewStyle: {
    width: wp(32),
    backgroundColor: colors.bagTextColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.regular,
    color: colors.whiteBg,
    paddingVertical: hp(1),
  },
});
