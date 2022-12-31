import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  userProfileImgView: {
    height: wp(14.4),
    width: wp(14.4),
    borderRadius: wp(2.7),
    backgroundColor: colors.styleListItemBox,
  },
  userProfileImage: {
    height: wp(14.4),
    width: wp(14.4),
    borderRadius: wp(2.7),
  },
  userNameViewStyle: {
    marginLeft: wp(4.5),
  },
  userNameText: {
    letterSpacing: 1.5,
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  profileNameText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
});
