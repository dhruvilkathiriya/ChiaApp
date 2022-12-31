import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginBottom: hp(3.6),
    marginHorizontal: wp(7),
  },
  touchView: {
    backgroundColor: '#DCD5D2',
    flex: 1,
    paddingVertical: wp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.light,
    color: colors.primaryColor,
  },
  sepratorStyle: {
    width: wp(1.1),
  },
  imageStyle: {
    width: wp(4.5),
    height: wp(4.5),
    marginLeft: wp(2),
  },
});
