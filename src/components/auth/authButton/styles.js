import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
    marginHorizontal: wp(4.5),
    paddingVertical: wp(4),
    borderWidth: 1,
    borderRadius: wp(2.25),
    borderColor: colors.primaryColor,
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    letterSpacing: 1,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    marginLeft: wp(4.5),
    textTransform: 'uppercase',
  },
});
