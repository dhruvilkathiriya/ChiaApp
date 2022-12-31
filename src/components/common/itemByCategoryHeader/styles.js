import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.whiteBg,
  },
  categoryNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconContainer: {
    paddingTop: hp(2),
    paddingBottom: hp(2),
    marginLeft: wp(5.5),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIconContainer: {
    marginRight: wp(5.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    height: hp(4),
    width: wp(4),
  },
  filterIcon: {
    height: hp(6),
    width: wp(6),
  },
  centerContainer: {},
  titleText: {
    fontSize: fontSize(30),
    lineHeight: fontSize(44),
    fontFamily: fontFamily.title,
    color: colors.primaryColor,
    marginTop: -hp(0.5),
    textAlign: 'center',
    marginLeft: wp(4),
  },
  rightContainer: {
    flex: 1,
  },
});
