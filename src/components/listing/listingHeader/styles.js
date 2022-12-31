import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, statusBarHeight, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    backgroundColor: colors.whiteBg,
    paddingTop: hp(2.5),
    marginTop: statusBarHeight + hp(1.25),
    paddingBottom: hp(1),
    shadowColor: colors.secondaryColor,
    shadowOffset: {height: -5, width: 0},
    shadowOpacity: 0.1,
    elevation: 20,
  },
  leftContainer: {
    flex: 1,
  },
  closeIconContainer: {
    padding: wp(2),
    marginLeft: wp(5.5),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    height: wp(3.25),
    width: wp(3.25),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
    textTransform: 'uppercase',
  },
  rightContainer: {
    flex: 1,
  },
});
