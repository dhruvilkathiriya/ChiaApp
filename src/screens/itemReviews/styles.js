import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';
import {fontFamily} from '../../helper/utils';

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
