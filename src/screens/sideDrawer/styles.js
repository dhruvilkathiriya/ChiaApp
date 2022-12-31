import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, statusBarHeight, wp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: statusBarHeight,
  },
});
