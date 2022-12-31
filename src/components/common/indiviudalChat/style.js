import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  mainContainer: {
    borderWidth: 1,
    marginLeft: wp(7.75),
    marginRight: wp(33),
    backgroundColor: colors.secondaryBg,
    padding: hp(2),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: colors.secondaryBg,
  },
  triangleCorner: {
    width: 0,
    height: 0,
    marginLeft: wp(7.75),
    borderRightWidth: 20,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: colors.secondaryBg,
    marginTop: -1,
  },
  text: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(14),
    lineHeight: fontSize(21.17),
  },
  container: {
    borderWidth: 1,
    marginLeft: wp(30.5),
    marginRight: wp(6.7),
    backgroundColor: colors.backgroundColor,
    padding: hp(2),
    marginTop: hp(1.6),
    borderRadius: 10,
    borderColor: colors.backgroundColor,
  },
});
