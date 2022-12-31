import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loaderContainer: {
    backgroundColor: colors.whiteBg,
    padding: wp(8),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
