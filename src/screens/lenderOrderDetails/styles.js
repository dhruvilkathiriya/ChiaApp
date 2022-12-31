import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  orderHistoryTitleStyle: {
    color: colors.secondaryColor,
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    letterSpacing: 1,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  rightTextStyle: {
    fontFamily: fontFamily.bold,
  },
  shippingStandardText: {
    fontSize: fontSize(12),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginLeft: wp(10),
  },
  shippingDetailsView: {
    marginTop: hp(2.8),
  },
  renterPhotoText: {
    fontFamily: fontFamily.light,
  },
  flatListStyle: {
    paddingHorizontal: wp(6.5),
  },
  photoViewStyle: {
    width: wp(27),
    height: hp(17.8),
    backgroundColor: colors.bagImgBg,
  },
  itemSepratorView: {
    width: wp(3),
  },
  viewTextStyle: {
    textAlign: 'right',
    fontSize: fontSize(14),
    marginTop: hp(0.7),
    lineHeight: fontSize(21),
    marginHorizontal: wp(6.5),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  saveBtnStyle: {
    borderWidth: 0,
    backgroundColor: colors.saveBtnBg,
    marginVertical: hp(3.15),
  },
  btnTitleStyle: {
    color: colors.whiteBg,
  },
  tickContainer: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(4),
    backgroundColor: colors.whiteBg,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: wp(1.5),
    bottom: wp(1.5),
    borderColor: colors.primaryColor,
    borderWidth: 1,
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.whiteBg,
  },
});
