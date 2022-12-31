import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  listImage: {
    height: wp(22.5),
    width: wp(16),
    backgroundColor: colors.secondaryBg,
    marginRight: wp(1.5),
  },
  headerFooter: {
    width: wp(8.5),
  },
  uploadImageContainer: {
    height: wp(22.5),
    width: wp(16),
    backgroundColor: colors.secondaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadImageIcon: {
    height: wp(6.5),
    width: wp(7.25),
  },
});
