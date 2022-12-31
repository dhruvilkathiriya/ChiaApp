import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    marginTop: hp(4),
    borderRadius: 10,
    borderColor: colors.secondaryBg,
  },
  triangleCorner: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    marginRight: wp(6.7),
    margin: -1,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderTopColor: colors.backgroundColor,
    alignSelf: 'flex-end',
  },
  text: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(14),
    lineHeight: fontSize(21.17),
    color: colors.primaryColor,
  },
  container: {
    borderWidth: 1,
    marginLeft: wp(30.5),
    marginRight: wp(6.7),
    backgroundColor: colors.backgroundColor,
    padding: hp(2),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: colors.backgroundColor,
  },
});
