import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(4.25),
  },
  leftButtonContainer: {
    borderRightWidth: 1,
    borderRightColor: colors.whiteBg,
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.light,
    color: colors.whiteBg,
    textAlign: 'center',
  },
  boldTitleText: {
    fontFamily: fontFamily.bold,
  },
});
