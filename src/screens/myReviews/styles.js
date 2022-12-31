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
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  footer: {
    padding: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.title,
    marginLeft: wp(2),
  },
  noReviewViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReviewTextStyle: {
    fontWeight: '300',
    fontFamily: fontFamily.light,
  },
});
