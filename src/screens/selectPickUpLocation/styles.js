import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    backgroundColor: colors.backgroundColor,
    marginTop: statusBarHeight,
  },
  inviteFriendsTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  addressTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    textTransform: 'uppercase',
    margin: hp(0.7),
  },
  addBillingAddressTextStyle: {
    textAlign: 'right',
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    marginHorizontal: wp(4.5),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    marginTop: hp(1.4),
    marginRight: wp(7),
  },
});
