import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  subHeaderContainer: {
    marginBottom: hp(2),
  },
  headerComponent: {
    width: wp(5),
  },
});
