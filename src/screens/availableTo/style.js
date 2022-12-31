import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  button: {
    marginTop: hp(8.75),
  },
});
