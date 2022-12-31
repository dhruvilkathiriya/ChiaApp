import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  howChiaWorksTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  descText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginLeft: 46,
    marginRight: 23,
  },
});
