import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(5.3),
  },
  dateTimeTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  bagItemMainView: {
    padding: wp(2.6),
    marginTop: hp(1.5),
    marginBottom: hp(2),
    flexDirection: 'row',
    backgroundColor: colors.whiteBg,
    shadowOpacity: 0.3,
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
    marginTop: hp(1.6),
  },
  priceDetailsView: {
    flexDirection: 'row',
    marginTop: hp(1.6),
  },
  cancelViewStyle: {
    position: 'absolute',
    right: wp(2),
    top: wp(2),
  },
  cancelImgStyle: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.secondaryColor,
  },
  priceAndEditTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editTextStyle: {
    textAlign: 'center',
    fontSize: fontSize(15),
    lineHeight: fontSize(21),
    color: colors.bagTextColor,
    marginTop: hp(1.6),
    fontFamily: fontFamily.light,
    fontWeight: '300',
  },
});
