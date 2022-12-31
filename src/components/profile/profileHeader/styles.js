import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2.75),
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
    height: wp(5.5),
    width: wp(4),
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
});
