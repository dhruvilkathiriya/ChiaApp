import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, statusBarHeight, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryBg,
    backgroundColor: colors.whiteBg,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuIconContainerStyle: {
    paddingVertical: hp(2),
    paddingLeft: wp(4),
    paddingRight: wp(1),
  },
  menuIcon: {
    height: wp(3.5),
    width: wp(4.8),
  },
  chiaLogoIcon: {
    height: wp(8),
    width: wp(20),
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: wp(2.7),
  },
  rightIconsContainer: {
    padding: wp(3.25),
  },
  searchIcon: {
    width: wp(4.8),
    height: hp(2.25),
  },
  rightIcons: {
    width: wp(6.4),
    height: hp(3),
  },
});
