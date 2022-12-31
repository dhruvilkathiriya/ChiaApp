import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContaiber: {
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
    marginHorizontal: wp(6),
    borderRadius: wp(1.5),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: wp(4),
  },
  img: {
    height: wp(5),
    width: wp(7.25),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontFamily: fontFamily.regular,
    color: colors.secondaryColor,
    marginLeft: wp(2),
  },
});
