import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingBottom: hp(8),
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  internetIcon: {
    width: wp(20),
    height: wp(20),
    tintColor: colors.secondaryColor,
  },
  titleText: {
    fontSize: fontSize(20),
    fontFamily: fontFamily.medium,
    color: colors.secondaryColor,
    marginTop: hp(1.5),
  },
  noteText: {
    fontSize: fontSize(13),
    fontFamily: fontFamily.regular,
    color: colors.secondaryColor,
    marginTop: hp(0.5),
    textAlign: 'center',
    marginHorizontal: wp(10),
  },
});
