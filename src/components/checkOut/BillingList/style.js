import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5.33),
  },
  title: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
  },
});
