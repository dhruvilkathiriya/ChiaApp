import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  addAddressTitleStyle: {
    color: colors.secondaryColor,
  },
  itemSepratorViewStyle: {
    height: hp(9),
  },
  sectionHeaderContainer: {
    marginBottom: hp(1.5),
  },
  sectionItemContainer: {
    marginTop: hp(0.5),
  },
});
