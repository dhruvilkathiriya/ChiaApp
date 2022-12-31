import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  backIconContainer: {
    padding: wp(2),
    marginLeft: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIconContainer: {
    padding: wp(2),
    marginRight: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageHeaderTitleText: {
    fontSize: fontSize(30),
    lineHeight: fontSize(44),
    fontFamily: fontFamily.title,
    color: colors.primaryColor,
    textTransform: 'uppercase',
    marginTop: -hp(0.5),
    textAlign: 'center',
  },
  mainMessageHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2.75),
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  backIcon: {
    height: wp(5),
    width: wp(3.5),
  },
  filterIcon: {
    height: wp(6.4),
    width: wp(6.4),
  },
  loader: {
    marginTop: hp(33),
  },
  noMessageViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMessageTextStyle: {
    fontWeight: '300',
    fontFamily: fontFamily.light,
  },
});
