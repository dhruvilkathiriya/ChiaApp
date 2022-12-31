import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  addAddressTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  contactUsContainerStyle: {marginTop: hp(4.5)},
});
