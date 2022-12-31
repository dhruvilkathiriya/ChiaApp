import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ProfileHeader,
  BackCloseHeader,
  CommonTextInput,
  CommonButton,
  DropDownSelection,
} from '../../components';

import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';
import {icons} from '../../helper/iconsConstants';
import {strings} from '../../helper/strings';
import {style} from './style';
import {fontFamily} from '../../helper/utils';

const CheckOut = ({route}) => {
  const [shippingAddress, setShippingAddress] = useState(
    'SELECT SHIPPING ADDRESS',
  );
  const [phoneNumber, setPhoneNumber] = useState('');

  const [shippingAddressesList, setShippingAddressesList] = useState([]);

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    if (route?.params?.address) {
      setShippingAddress(route.params.address);
    }
  }, [route.params]);

  const onSaveButtonPress = () => {
    if (shippingAddress === 'SELECT SHIPPING ADDRESS') {
      Alert.alert(
        'Shipping address is empty!',
        'Please select shipping address.',
      );
    } else if (phoneNumber.length === 0) {
      Alert.alert(strings.phoneNumberEmpty, strings.enterYourPhoneNumber);
    } else {
      navigate('Billing', {
        shippingAddress: shippingAddress,
        phoneNumber: phoneNumber,
      });
    }
  };

  const onAddNewShippingAddressPress = () => {
    navigate('AddAddress', {type: 'shipping'});
  };

  const {user} = useSelector(state => state.user);

  useEffect(() => {
    const addresses = user?.addresses || [];
    if (addresses?.length > 0) {
      let shippingAddressList = _.filter(addresses || [], {
        type: 'shipping',
      });
      setShippingAddressesList(shippingAddressList);
    }
  }, [user]);

  const {navigate} = useNavigation();

  const onPhoneNumberChange = text => setPhoneNumber(text);

  const renderDropDownRow = rowData => {
    return (
      <View style={style.dropdownRowStyle}>
        <Text style={style.dropdownRowTextStyle}>
          {rowData.line1 + ' ' + rowData.line2 + ' ' + rowData.city}
        </Text>
      </View>
    );
  };

  const onClosePress = () => {
    navigate('Bag');
  };

  return (
    <>
      <KeyboardAvoidingView style={style.mainContainer} behavior={'padding'}>
        <BackCloseHeader backVisible onClosePress={onClosePress} />
        <ProfileHeader
          title={strings.checkOutShipping}
          hideBack={true}
          mainContainer={style.headerContainer}
          titleStyle={style.headerTextStyle}
        />
        <ScrollView>
          <DropDownSelection
            options={shippingAddressesList}
            defaultValue={shippingAddress || 'SELECT SHIPPING ADDRESS'}
            renderButtonText={rowData => {
              setShippingAddress(rowData);
              return (
                rowData?.line1 + ' ' + rowData?.line2 + ' ' + rowData?.city
              );
            }}
            renderRow={renderDropDownRow}
            dropDownIcon={icons.downArrow}
            dropdownTitleTextStyle={{
              color:
                shippingAddress === 'SELECT SHIPPING ADDRESS'
                  ? colors.placeholderText
                  : colors.secondaryColor,
              fontFamily: fontFamily.regular,
            }}
          />
          <TouchableOpacity onPress={onAddNewShippingAddressPress}>
            <Text style={style.addBillingAddressTextStyle}>
              {'Add New Shipping Address'}
            </Text>
          </TouchableOpacity>
          <CommonTextInput
            placeholder={strings.phone}
            value={phoneNumber}
            keyboardType={'phone-pad'}
            onChangeText={onPhoneNumberChange}
            inputStyle={style.inputTextStyle}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          backgroundColor: colors.secondaryBg,
          paddingTop: hp(1.6),
          paddingBottom: bottom + hp(1.6),
        }}>
        <CommonButton
          title={strings.saveAndContinue}
          onPress={onSaveButtonPress}
        />
      </View>
    </>
  );
};
export default CheckOut;
