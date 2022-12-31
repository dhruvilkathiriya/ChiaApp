import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';

import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  itemDescriptionText: {
    padding: 1,
    marginHorizontal: wp(8.5),
    fontSize: fontSize(12),
    lineHeight: fontSize(12),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  divider: {
    height: 1,
    backgroundColor: colors.secondaryBg,
    marginTop: hp(2.5),
  },
  saveButton: {
    marginVertical: hp(5),
  },
});
