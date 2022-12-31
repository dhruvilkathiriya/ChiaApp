import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  sectionHeaderTitle: {
    marginBottom: hp(1.5),
  },
  yourDesignersList: {
    width: wp(90),
    marginHorizontal: wp(5),
    flexWrap: 'wrap',
  },
  mainList: {
    marginHorizontal: wp(5),
  },
});
