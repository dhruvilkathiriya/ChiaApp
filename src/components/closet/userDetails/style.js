import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(10.15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userDetailView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {
    height: wp(14.4),
    width: wp(14.4),
    borderRadius: wp(2.7),
  },
  userNameView: {
    marginLeft: wp(4.5),
  },
  textUserStyle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    letterSpacing: 1.5,
    color: colors.secondaryColor,
  },
  starViewStyle: {
    flexDirection: 'row',
  },
  ratedUserCounterStyle: {
    fontSize: fontSize(10),
    lineHeight: fontSize(15),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginLeft: wp(1),
  },
  filterIcon: {
    height: wp(6.4),
    width: wp(6.4),
    marginTop: hp(0.5),
  },
  itemSepratorStyle: {
    height: hp(1),
  },
  userTagStyle: {
    width: wp(86.5),
    marginHorizontal: wp(6),
    paddingVertical: hp(1.25),
  },
});
