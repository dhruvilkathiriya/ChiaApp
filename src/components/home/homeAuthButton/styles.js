import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(8.5),
  },
  btnViewStyle: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primaryColor,
    backgroundColor: colors.backgroundColor,
  },
  textStyle: {
    display: 'flex',
    fontSize: fontSize(16),
    paddingVertical: wp(1.5),
    lineHeight: fontSize(25),
    color: colors.primaryColor,
    fontFamily: fontFamily.bold,
  },
  sepratorViewStyle: {
    width: wp(3),
  },
});
