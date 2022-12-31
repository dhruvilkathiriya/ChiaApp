import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  BackCloseHeader,
  CommonButton,
  CommonTextInput,
  DropDownSelection,
  Loader,
  ProfileHeader,
} from '../../components';
import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';
import {icons} from '../../helper/iconsConstants';
import {strings} from '../../helper/strings';
import {style} from './style';
import {fontFamily} from '../../helper/utils';
import {useDispatch, useSelector} from 'react-redux';
import {getUserCards} from '../../actions/billingActions';
import _ from 'lodash';
import {updateShipping} from '../../actions/bagAction';

const Billing = ({route}) => {
  const [fullName, setFullName] = useState('');
  const [cardDetails, setCardDetails] = useState('SELECT CARD');
  const [onCheckShippingAddress, setCheckShippingAddress] = useState(true);
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [shippingDetails, setShippingDetails] = useState(
    route?.params?.shippingAddress,
  );
  const [billingAddressDetails, setBillingAddressDetails] =
    useState(shippingDetails);
  const [billingAddressList, setBillingAddressList] = useState([]);

  const {bottom} = useSafeAreaInsets();

  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const listOfCard = useSelector(state => state.userCards);
  const {user} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUserCards());
  }, []);

  const onClosePress = () => {
    navigate('Bag');
  };

  useEffect(() => {
    const addresses = user?.addresses || [];
    if (addresses?.length > 0) {
      let billingAddressList = _.filter(addresses || [], {
        type: 'billing',
      });
      setBillingAddressList(billingAddressList);
    }
  }, [user]);

  const onAddNewCardPress = () => {
    navigate('AddCardScreen');
  };

  const onCheckPress = () => {
    if (!onCheckShippingAddress) {
      setBillingAddressDetails(shippingDetails);
    } else {
      setBillingAddressDetails('SELECT BILLING ADDRESS');
    }
    setCheckShippingAddress(!onCheckShippingAddress);
  };

  const onAddNewBillingAddressPress = () => {
    navigate('AddAddress', {type: 'billing'});
  };

  const {cartLoading} = useSelector(state => state.bag);

  useEffect(() => {
    if (!cartLoading && saveBtnVisible) {
      navigate('CheckoutConfirm', {
        shippingAddress: shippingDetails,
        billingAddress: billingAddressDetails,
        phoneNumber: route?.params?.phoneNumber,
        cardDetails: cardDetails,
        fullName: fullName,
      });
    }
  }, [cartLoading, saveBtnVisible]);

  const onButtonPress = () => {
    if (fullName.length === 0) {
      Alert.alert('Full name is empty!', 'Please enter full name.');
    } else if (cardDetails === 'SELECT CARD') {
      Alert.alert('Card Detail is empty!', 'Please select card.');
    } else if (billingAddressDetails === 'SELECT BILLING ADDRESS') {
      Alert.alert(
        'Billing address is empty!',
        'Please select billing address.',
      );
    } else {
      const data = {
        shippingAddress: shippingDetails?._id,
        billingAddress: billingAddressDetails?._id,
        paymentId: cardDetails?.id,
      };
      dispatch(updateShipping(data));
      setSaveBtnVisible(true);
    }
  };

  const onFullNameChange = text => setFullName(text);

  const renderDropDownRow = cardData => {
    return (
      <View style={style.dropdownRowStyle}>
        <Text style={style.dropdownRowTextStyle}>
          {'\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF ' +
            cardData?.last4 +
            '  ' +
            cardData?.expMonth +
            '/' +
            cardData?.expYear}
        </Text>
      </View>
    );
  };

  const renderDropDownAddressRow = rowData => {
    return (
      <View style={style.dropdownRowStyle}>
        <Text style={style.dropdownRowTextStyle}>
          {rowData.line1 + ' ' + rowData.line2 + ' ' + rowData.city}
        </Text>
      </View>
    );
  };

  return (
    <>
      <KeyboardAvoidingView style={style.mainContainer} behavior={'padding'}>
        <BackCloseHeader backVisible onClosePress={onClosePress} />
        <ProfileHeader
          title={strings.checkOutBilling}
          hideBack={true}
          mainContainer={style.headerContainer}
          titleStyle={style.headerTextStyle}
        />
        <ScrollView>
          <CommonTextInput
            placeholder={strings.fullName}
            value={fullName}
            onChangeText={onFullNameChange}
            inputStyle={style.inputTextStyle}
          />
          <DropDownSelection
            options={listOfCard?.listOfCards}
            defaultValue={cardDetails || 'SELECT CARD'}
            renderButtonText={cardData => {
              setCardDetails(cardData);
              return (
                '\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF ' +
                cardData?.last4 +
                '  ' +
                cardData?.expMonth +
                '/' +
                cardData?.expYear
              );
            }}
            renderRow={renderDropDownRow}
            dropDownIcon={icons.downArrow}
            dropdownTitleTextStyle={{
              color:
                cardDetails === 'SELECT CARD'
                  ? colors.placeholderText
                  : colors.secondaryColor,
              fontFamily: fontFamily.regular,
            }}
          />
          <TouchableOpacity onPress={onAddNewCardPress}>
            <Text style={style.addNewCardTextStyle}>{'Add New Card'}</Text>
          </TouchableOpacity>
          <Text style={style.textBillingAdd}>{strings.billingAddress}</Text>
          <View style={style.checkBoxView}>
            <Text style={style.checkBoxTitle}>
              {`Same as shipping address ${shippingDetails?.line1} ${shippingDetails?.line2} ${shippingDetails?.city}`}
            </Text>
            <TouchableOpacity
              style={style.checkBox}
              activeOpacity={1}
              onPress={onCheckPress}>
              {onCheckShippingAddress && (
                <Image
                  source={icons.tick}
                  resizeMode={'contain'}
                  style={style.tickIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          {!onCheckShippingAddress ? (
            <>
              <DropDownSelection
                options={billingAddressList}
                defaultValue={billingAddressDetails || 'SELECT BILLING ADDRESS'}
                renderButtonText={rowData => {
                  setBillingAddressDetails(rowData);
                  return (
                    rowData?.line1 + ' ' + rowData?.line2 + ' ' + rowData?.city
                  );
                }}
                renderRow={renderDropDownAddressRow}
                dropDownIcon={icons.downArrow}
                dropdownTitleTextStyle={{
                  color:
                    billingAddressDetails === 'SELECT BILLING ADDRESS'
                      ? colors.placeholderText
                      : colors.secondaryColor,
                  fontFamily: fontFamily.regular,
                }}
              />
              <TouchableOpacity onPress={onAddNewBillingAddressPress}>
                <Text style={style.addNewCardTextStyle}>
                  {'Add New Billing Address'}
                </Text>
              </TouchableOpacity>
            </>
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          backgroundColor: colors.secondaryBg,
          paddingTop: hp(1.6),
          paddingBottom: bottom + hp(1.6),
        }}>
        <CommonButton title={strings.saveAndContinue} onPress={onButtonPress} />
      </View>
      <Loader visible={cartLoading} />
    </>
  );
};
export default Billing;
