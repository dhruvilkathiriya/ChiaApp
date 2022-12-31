import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryColor,
    marginHorizontal: wp(4.5),
    paddingVertical: wp(4),
    borderWidth: 1,
    borderRadius: wp(2.5),
    borderColor: colors.primaryColor,
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    letterSpacing: 0.5,
    fontFamily: fontFamily.bold,
    color: colors.whiteBg,
    textTransform: 'uppercase',
  },
});
