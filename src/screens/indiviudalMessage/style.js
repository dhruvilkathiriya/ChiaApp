import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {hp, isIOS, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
    marginTop: isIOS ? -statusBarHeight : 0,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(6),
    marginRight: wp(4),
    marginTop: statusBarHeight,
    paddingVertical: hp(1),
  },
  arrowImg: {
    height: wp(5),
    width: wp(3.5),
    tintColor: colors.goldColor,
  },
  userImg: {
    height: wp(9.1),
    width: wp(9.1),
    overflow: 'hidden',
    borderRadius: wp(0.5),
    backgroundColor: colors.bagImgBg,
  },
  userName: {
    fontFamily: fontFamily.light,
    fontSize: fontSize(14),
  },
  textInputContainer: {
    borderWidth: 1,
    marginLeft: wp(3.75),
    marginRight: wp(4.8),
    backgroundColor: colors.inputBg,
    padding: hp(1),
    borderRadius: 100,
    borderColor: colors.inputBg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: isIOS ? hp(1) : hp(1.5),
  },
  textInputText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.medium,
  },
  imageicon: {
    height: wp(9),
    width: wp(9),
  },
  messageInput: {
    paddingVertical: 0,
    flex: 1,
  },
});
