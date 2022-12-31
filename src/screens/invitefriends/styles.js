import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  inviteFriendsTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  itemContainerStyle: {
    flex: 1,
    marginTop: hp(5),
  },
  itemStyle: {
    marginTop: hp(1.5),
  },
  phoneBookItemContainer: {
    flexDirection: 'row',
    marginVertical: hp(1),
    justifyContent: 'space-between',
    paddingHorizontal: wp(5.25),
  },
  phoneBookUserDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  phoneBookItemTextStyle: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  phoneBookItemInviteButtonStyle: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
    padding: wp(2),
    borderWidth: 1,
    borderRadius: wp(1.5),
    borderColor: colors.primaryColor,
    marginVertical: hp(2),
  },
  phoneBookItemViewButtonStyle: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteBg,
    padding: wp(2),
    borderWidth: 1,
    borderRadius: wp(1.5),
    borderColor: colors.primaryColor,
    marginVertical: hp(2),
  },
  phoneBookItemInviteButtonTextStyle: {
    fontSize: fontSize(12),
    letterSpacing: 0.5,
    fontFamily: fontFamily.light,
    color: colors.whiteBg,
  },
  phoneBookItemViewButtonTextStyle: {
    fontSize: fontSize(12),
    letterSpacing: 0.5,
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
});
