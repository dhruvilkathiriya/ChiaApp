import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';

import {
  Header,
  ProfileHeader,
  CommonTextInput,
  StateZipCodeTextInput,
  AuthButton,
  DropDownSelection,
  Loader,
} from '../../components';
import countryList from '../../../assets/countryList';
import {icons} from '../../helper/iconsConstants';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {colors} from '../../helper/colors';
import {addAddress} from '../../actions/addressAction';

const AddAddress = ({route}) => {
  const {type} = route.params;

  const [country, setCountry] = useState('SELECT COUNTRY');
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [aptUnitEtc, setAptUnitEtc] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const {addressLoading} = useSelector(state => state.address);

  const onFullNameChange = text => setFullName(text);

  const onStreetAddressChange = text => setStreetAddress(text);

  const onAptUnitChange = text => setAptUnitEtc(text);

  const onCityChange = text => setCity(text);

  const onStateChange = text => setState(text);

  const onZipCodeChange = text => setZipCode(text);

  const onPhoneNumberChange = text => setPhoneNumber(text);

  const dispatch = useDispatch();

  const onSaveAddressPress = () => {
    if (country === 'SELECT COUNTRY') {
      Alert.alert(strings.countryNameEmpty, strings.enterCountryName);
    } else if (fullName.length === 0) {
      Alert.alert(strings.fullNameEmpty, strings.enterYourFullName);
    } else if (streetAddress.length === 0) {
      Alert.alert(strings.streetAddressEmpty, strings.enterStreetAddress);
    } else if (aptUnitEtc.length === 0) {
      Alert.alert(strings.aptOrUnitNumberEmpty, strings.enterAptOrUnitAddress);
    } else if (city.length === 0) {
      Alert.alert(strings.cityNameEmpty, strings.enterCityName);
    } else if (state.length === 0) {
      Alert.alert(strings.stateNameEmpty, strings.enterStateName);
    } else if (zipCode.length === 0) {
      Alert.alert(strings.zipCodeEmpty, strings.enterZipCode);
    } else if (phoneNumber.length === 0) {
      Alert.alert(strings.phoneNumberEmpty, strings.enterYourPhoneNumber);
    } else {
      const data = {
        type: type,
        city: city,
        state: state,
        country: country,
        line1: aptUnitEtc,
        line2: streetAddress,
        postalCode: zipCode,
        fullName: fullName,
        phoneNumber: phoneNumber,
      };
      dispatch(addAddress(data));
    }
  };

  const renderDropDownRow = rowData => {
    return (
      <View style={style.dropdownRowStyle}>
        <Text style={style.dropdownRowTextStyle}>{rowData.name}</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView bounces={false}>
        <ProfileHeader
          title={strings.addAddress}
          titleStyle={style.addAddressTitleStyle}
          mainContainer={style.profileHeaderContainer}
        />
        <DropDownSelection
          options={countryList}
          defaultValue={
            country === 'SELECT COUNTRY' ? strings.selectCountry : country
          }
          renderButtonText={rowData => {
            setCountry(rowData.name);
            const {name} = rowData;
            return `${name}`;
          }}
          renderRow={renderDropDownRow}
          dropDownIcon={icons.downArrow}
          dropdownTitleTextStyle={{
            color:
              country === 'SELECT COUNTRY'
                ? colors.placeholderText
                : colors.secondaryColor,
          }}
        />
        <CommonTextInput
          placeholder={strings.fullName}
          value={fullName}
          onChangeText={onFullNameChange}
          mainContainer={style.textInputMainContainer}
          inputStyle={style.inputTextStyle}
        />
        <CommonTextInput
          placeholder={strings.streetAddress}
          value={streetAddress}
          onChangeText={onStreetAddressChange}
          mainContainer={style.textInputMainContainer}
          inputStyle={style.inputTextStyle}
        />
        <CommonTextInput
          placeholder={strings.aptUnitEtc}
          value={aptUnitEtc}
          onChangeText={onAptUnitChange}
          mainContainer={style.textInputMainContainer}
          inputStyle={style.inputTextStyle}
        />
        <CommonTextInput
          placeholder={strings.city}
          value={city}
          onChangeText={onCityChange}
          mainContainer={style.textInputMainContainer}
          inputStyle={style.inputTextStyle}
        />
        <StateZipCodeTextInput
          statePlaceholder={strings.state}
          stateValue={state}
          onStateChange={onStateChange}
          zipCodePlaceholder={strings.zipCode}
          zipCodeValue={zipCode}
          onZipCodeChange={onZipCodeChange}
          keyboardType={'numeric'}
        />
        <CommonTextInput
          placeholder={strings.phoneNumber}
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
          mainContainer={style.textInputMainContainer}
          keyboardType={'phone-pad'}
          inputStyle={style.inputTextStyle}
        />
        <AuthButton
          title={strings.saveAddress}
          onPress={onSaveAddressPress}
          containerStyle={style.saveBtnStyle}
          titleTextStyle={style.btnTitleStyle}
        />
      </KeyboardAwareScrollView>
      <Loader visible={addressLoading} />
    </View>
  );
};

export default AddAddress;
