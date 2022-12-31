import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.whiteBg,
    height: wp(4.5),
    width: wp(4.5),
    borderRadius: wp(1.25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
  },
});
