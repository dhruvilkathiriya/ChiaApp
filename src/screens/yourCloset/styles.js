import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    paddingTop: hp(1),
  },
  containerStyle: {
    marginHorizontal: wp(1),
    flex: 1,
  },
  footer: {
    padding: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.title,
    marginLeft: wp(2),
  },
  emptyListComponentTextStyle: {
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: fontFamily.light,
    alignSelf: 'center',
    marginTop: hp(30),
  },
});
