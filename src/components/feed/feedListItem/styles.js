import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    marginBottom: hp(3),
  },
  itemImage: {
    width: wp(90),
    height: wp(85),
    backgroundColor: colors.secondaryBg,
  },
  topDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  titleContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  pricingText: {
    fontSize: fontSize(10),
    lineHeight: fontSize(15),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(2.75),
  },
  buttonIcon: {
    height: wp(6.5),
    width: wp(6.5),
    tintColor: colors.secondaryColor,
    marginLeft: wp(1.25),
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.65),
    paddingHorizontal: wp(5),
  },
  userImage: {
    height: wp(7.75),
    width: wp(7.75),
    borderRadius: wp(7.75),
    borderWidth: 1,
    borderColor: colors.secondaryColor,
    backgroundColor: colors.ultralightGray,
    marginRight: wp(3.25),
    overflow: 'hidden',
  },
  userNameText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  descriptionText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginTop: hp(1),
    paddingHorizontal: wp(5),
  },
});
