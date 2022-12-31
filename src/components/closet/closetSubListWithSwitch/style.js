import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(9.4),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  title: {
    flex: 1,
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.secondaryText,
  },
  switch: {
    alignItems: 'flex-end',
  },
});
