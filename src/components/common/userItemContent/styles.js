import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {fontFamily, fontSize} from '../../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.whiteBg,
    marginHorizontal: wp(5.6),
    marginTop: hp(2.3),
  },
  itemContainerViewStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  userProfileView: {
    height: wp(9.5),
    width: wp(9.5),
    overflow: 'hidden',
    borderRadius: wp(0.5),
    backgroundColor: colors.styleListItemBox,
  },
  itemDetailsView: {
    marginLeft: wp(2.55),
    flexDirection: 'column',
    flex: 1,
  },
  itemHeaderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftTextStyle: {
    lineHeight: fontSize(24),
    fontSize: fontSize(16),
    fontFamily: fontFamily.light,
    fontWeight: '700',
  },
  descriptionTextStyle: {
    lineHeight: fontSize(21),
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    fontWeight: '300',
  },
  headerRightTextStyle: {
    lineHeight: fontSize(21),
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    fontWeight: '300',
    color: colors.placeholderText,
  },
  horizontalLine: {
    borderBottomColor: colors.secondaryBg,
    borderBottomWidth: 1,
    marginTop: hp(0.9),
  },
  bottomRightTexStyle: {
    lineHeight: fontSize(21),
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    fontWeight: '300',
    textAlign: 'right',
  },
});
