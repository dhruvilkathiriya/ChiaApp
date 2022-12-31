import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    margin: 0,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 50,
  },
  containerStyle: {
    backgroundColor: colors.whiteBg,
    marginHorizontal: wp(2.4),
    borderRadius: wp(5),
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 10,
    shadowColor: colors.secondaryColor,
  },
  backIconStyle: {
    width: wp(3),
    height: wp(3),
    marginVertical: hp(2),
    right: wp(6.13),
    alignSelf: 'flex-end',
  },
  touchStyle: {
    paddingVertical: hp(0.85),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
  },
  textStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginTop: hp(0.85),
  },
});
