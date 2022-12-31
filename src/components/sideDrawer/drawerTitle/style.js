import {StyleSheet} from 'react-native';

import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(5.1),
  },
  title: {
    fontSize: fontSize(30),
    fontFamily: fontFamily.title,
    lineHeight: fontSize(44),
    textTransform: 'uppercase',
    marginRight: -wp(2),
  },
  close: {
    height: wp(3),
    width: wp(3),
  },
  viewText: {
    alignItems: 'center',
    flex: 1,
  },
  viewIcon: {
    marginRight: wp(3),
    padding: wp(2),
  },
});
