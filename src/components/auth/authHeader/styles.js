import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: hp(0.5),
    paddingBottom: hp(1.75),
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
  centerContainer: {},
  titleText: {
    fontSize: fontSize(30),
    lineHeight: fontSize(44),
    fontFamily: fontFamily.title,
    color: colors.primaryColor,
    textTransform: 'uppercase',
    marginTop: -hp(0.5),
    textAlign: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  rightButtonContainer: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(4.25),
    alignSelf: 'flex-end',
  },
  rightButtonTitleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
  },
});
