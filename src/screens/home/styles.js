import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  textStyle: {
    textDecorationLine: 'underline',
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.title,
    fontStyle: 'italic',
    marginTop: hp(10),
    alignSelf: 'center',
  },
});
