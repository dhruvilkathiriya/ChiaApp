import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hp, isIOS, statusBarHeight, wp} from '../../helper/constants';
import {fontFamily, fontSize} from '../../helper/utils';
export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    marginTop: statusBarHeight,
    borderTopLeftRadius: wp(2.7),
    borderTopRightRadius: wp(2.7),
  },
  closeImgView: {
    alignSelf: 'flex-end',
    marginVertical: hp(2.8),
    marginRight: wp(6),
  },
  cancelImgStyle: {
    height: wp(4.25),
    width: wp(4.25),
  },
  searchBarMainStyle: {
    marginBottom: 0,
  },
  headerContainerStyle: {
    marginTop: hp(2.7),
    marginBottom: 0,
    borderBottomWidth: 0,
    marginHorizontal: wp(1),
  },
  subContainer: {
    marginLeft: wp(2.15),
    //marginLeft: wp(8),
  },
  headerTextStyle: {
    color: colors.primaryColor,
    marginBottom: hp(0.5),
  },
  myHeartTextStyle: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
  },
  emptyLoader: {
    paddingVertical: hp(2),
  },
});
