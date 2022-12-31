import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(5.3),
    marginVertical: hp(2),
  },
  productNameStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  bagItemMainView: {
    padding: wp(2.6),
    marginTop: hp(1.5),
    marginBottom: hp(2),
    flexDirection: 'row',
    backgroundColor: colors.whiteBg,
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowColor: colors.secondaryColor,
    elevation: 5,
  },
  itemImageView: {
    width: wp(24.5),
    height: hp(15.25),
    backgroundColor: colors.bagImgBg,
  },
  productImageStyle: {
    width: wp(24.5),
    height: hp(15.25),
  },
  itemDetailsView: {
    flex: 1,
    marginLeft: wp(8),
    marginTop: hp(1),
  },
  priceDetailsView: {
    flexDirection: 'row',
    marginTop: hp(1.6),
  },
  priceAndEditTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTextStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(19),
    fontFamily: fontFamily.regular,
    color: colors.placeholderText,
  },
});
