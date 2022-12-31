import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainerStyle: {
    marginHorizontal: hp(5),
    marginTop: 19,
  },
  titleText: {
    textTransform: 'uppercase',
    fontSize: fontSize(14),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.regular,
    color: colors.primaryColor,
  },
});
