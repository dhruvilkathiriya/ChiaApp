import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  colorViewContainerStyle: {
    marginVertical: hp(0.625),
    marginHorizontal: wp(1.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorMainViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    height: wp(12),
    width: wp(12),
    borderRadius: wp(6),
    margin: wp(0.5),
    shadowColor: colors.placeholderText,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  multiColorViewStyle: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(6),
  },
  otherColorViewStyle: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(6),
    borderColor: '#d7d0c9',
    borderWidth: wp(0.5),
    backgroundColor: colors.whiteBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherColorInnerViewLineStyle: {
    width: wp(0.5),
    height: wp(11),
    backgroundColor: colors.saveBtnBg,
    transform: [{rotate: '45deg'}],
  },
  defaultColorViewStyle: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(6),
  },
});
