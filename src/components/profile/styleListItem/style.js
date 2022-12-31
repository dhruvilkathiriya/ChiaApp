import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContaiber: {
    marginHorizontal: wp(5),
    marginBottom: hp(1.6),
    width: wp(23.5),
  },
  styleImage: {
    backgroundColor: colors.styleListItemBox,
    height: wp(23.5),
    width: wp(23.5),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    paddingTop: hp(1),
  },
  tickContainer: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(4),
    backgroundColor: colors.whiteBg,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: wp(1.5),
    bottom: wp(1.5),
  },
  tickIcon: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.whiteBg,
  },
});
