import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {statusBarHeight, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainModalStyle: {
    flex: 1,
    margin: 0,
  },
  mainContainerStyle: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    right: wp(5),
    top: wp(2.5) + statusBarHeight,
  },
  closeIcon: {
    width: wp(6),
    height: wp(6),
    tintColor: colors.whiteBg,
  },
  imageView: {
    width: wp(100),
    height: wp(100),
  },
});
