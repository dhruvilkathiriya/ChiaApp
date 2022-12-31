import {StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {colors} from '../../helper/colors';
import {fontFamily, fontSize} from '../../helper/utils';
import {CardFieldInput} from '@stripe/stripe-react-native';

const styles = StyleSheet.create({
  cardField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
    backgroundColor: colors.inputBg,
    marginHorizontal: wp(4.5),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: wp(2.25),
    height: hp(6.5),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteBg,
  },
  addAddressTitleStyle: {
    color: colors.secondaryColor,
  },
  profileHeaderContainer: {
    paddingVertical: hp(2),
    paddingTop: hp(2.75),
  },
  emailField: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: hp(1.25),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    backgroundColor: colors.inputBg,
    marginHorizontal: wp(4.5),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: wp(2.25),
    paddingVertical: wp(3.5),
    paddingHorizontal: wp(4.5),
    fontFamily: fontFamily.light,
  },
  dropdownRowStyle: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: colors.whiteBg,
  },
  dropdownRowTextStyle: {
    marginLeft: wp(4),
    // textAlignVertical: 'center',
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    fontWeight: '600',
  },
  addBillingAddressTextStyle: {
    flex: 1,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: fontFamily.light,
    color: colors.secondaryColor,
    marginHorizontal: wp(4.5),
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});

const inputStyles: CardFieldInput.Styles = {
  borderWidth: 1,
  backgroundColor: colors.inputBg,
  borderColor: colors.inputBorder,
  borderRadius: wp(2.5),
  fontSize: fontSize(16),
  lineHeight: fontSize(24),
  placeholderColor: colors.placeholderText,
};

export {styles, inputStyles};
