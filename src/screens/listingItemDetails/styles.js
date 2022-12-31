import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  itemImage: {
    height: hp(50),
    width: wp(100),
    backgroundColor: colors.secondaryBg,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },
  titleContainer: {
    flex: 1,
  },
  mainTitleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  subTitleText: {
    fontSize: fontSize(10),
    lineHeight: fontSize(15),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: wp(8),
    width: wp(8),
    borderRadius: wp(8),
    borderWidth: 1,
    marginRight: wp(2),
    backgroundColor: colors.ultralightGray,
  },
  userNameText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  ratingStarContainer: {
    alignItems: 'flex-start',
    marginRight: wp(1),
  },
  reviewList: {
    justifyContent: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1),
  },
  reviewItem: {
    height: wp(12.25),
    width: wp(12.25),
    backgroundColor: colors.styleListItemBox,
    marginHorizontal: wp(0.75),
  },
  listerNotesText: {
    fontSize: fontSize(10),
    lineHeight: fontSize(15),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginHorizontal: wp(5),
  },
  footerView: {
    height: hp(5),
  },
});
