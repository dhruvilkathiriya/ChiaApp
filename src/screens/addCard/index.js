import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {CardField, useConfirmSetupIntent} from '@stripe/stripe-react-native';
import type {PaymentMethodCreateParams} from '@stripe/stripe-react-native';
import {inputStyles, styles} from './styles';
import PaymentScreen from '../../components/billing/paymentComponent';
import CardButton from '../../components/billing/cardButton';
import {
  DropDownSelection,
  Header,
  Loader,
  ProfileHeader,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {strings} from '../../helper/strings';
import {useDispatch, useSelector} from 'react-redux';
import {addCard, cardSetUpIntent} from '../../actions/billingActions';
import _ from 'lodash';
import {icons} from '../../helper/iconsConstants';
import {colors} from '../../helper/colors';
import countryList from '../../../assets/countryList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AddCardScreen = () => {
  const [cardDetail, setCardDetail] = useState();

  const [billingAddress, setBillingAddress] = useState(
    strings.selectBillingAddress,
  );

  const {intent} = useSelector(state => state.cardSetUpIntentReducer);

  const listOfCard = useSelector(state => state.userCards);

  const addressDetails = useSelector(state => state.user);

  const billingAddressList = _.filter(addressDetails?.user?.addresses || [], {
    type: 'billing',
  });

  const {confirmSetupIntent, loading} = useConfirmSetupIntent();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardSetUpIntent());
  }, []);

  const handlePayPress = async () => {
    if (!cardDetail?.complete) {
      Alert.alert(strings.cardDetailEmpty, strings.enterCardDetail);
    } else if (billingAddress === strings.selectBillingAddress) {
      Alert.alert('please select billing address');
    } else {
      // 1. Create setup intent on backend
      const clientSecret = intent?.intent;

      let countryCode = _.filter(countryList || [], {
        name: billingAddress?.country,
      });

      // 2. Gather customer billing information (ex. name)
      const billingDetails: PaymentMethodCreateParams.BillingDetails = {
        name: billingAddress?.fullName,
        phone: billingAddress?.phoneNumber,
        addressPostalCode: billingAddress?.postalCode,
        addressCity: billingAddress?.city,
        addressCountry: countryCode[0].value,
        addressLine1: billingAddress?.line1,
        addressLine2: billingAddress?.line2,
        addressState: billingAddress?.state,
      };

      // 3. Confirm setup intent
      const {error, setupIntent: setupIntentResult} = await confirmSetupIntent(
        clientSecret,
        {
          type: 'Card',
          billingDetails,
        },
      );
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
        console.log('Setup intent confirmation error', error.message);
      } else if (setupIntentResult) {
        console.log('setupIntentResult=======', setupIntentResult);
        dispatch(
          addCard({paymentMethodId: setupIntentResult?.paymentMethodId || ''}),
          [],
        );
      }
    }
  };

  const renderDropDownRow = billingAddressData => {
    return (
      <View style={styles.dropdownRowStyle}>
        <Text style={styles.dropdownRowTextStyle}>
          {billingAddressData.line1 +
            ' ' +
            billingAddressData.line2 +
            ' ' +
            billingAddressData.city}
        </Text>
      </View>
    );
  };

  const {navigate} = useNavigation();

  const onAddNewBillingAddressPress = () => {
    navigate('AddAddress', {type: 'billing'});
  };

  return (
    <PaymentScreen>
      <View style={styles.mainContainer}>
        <Header />
        <KeyboardAwareScrollView bounces={false}>
          <ProfileHeader
            title={strings.addCard}
            titleStyle={styles.addAddressTitleStyle}
            mainContainer={styles.profileHeaderContainer}
          />
          <DropDownSelection
            options={billingAddressList}
            defaultValue={
              billingAddress === strings.selectBillingAddress
                ? strings.selectBillingAddress
                : billingAddress?.line1
            }
            renderButtonText={billingAddressData => {
              setBillingAddress(billingAddressData);
              return (
                billingAddressData?.line1 +
                ' ' +
                billingAddressData?.line2 +
                ' ' +
                billingAddressData?.city
              );
            }}
            renderRow={renderDropDownRow}
            dropDownIcon={icons.downArrow}
            dropdownTitleTextStyle={{
              color:
                billingAddressList === strings.selectBillingAddress
                  ? colors.placeholderText
                  : colors.secondaryColor,
            }}
          />
          <TouchableOpacity onPress={onAddNewBillingAddressPress}>
            <Text style={styles.addBillingAddressTextStyle}>
              Add New Billing Address
            </Text>
          </TouchableOpacity>
          <CardField
            postalCodeEnabled={false}
            onCardChange={cardDetails => {
              setCardDetail(cardDetails);
            }}
            cardStyle={inputStyles}
            style={styles.cardField}
          />
          <View style={styles.buttonContainer}>
            <CardButton
              variant="primary"
              onPress={handlePayPress}
              title="Save"
              loading={loading}
            />
          </View>
        </KeyboardAwareScrollView>
        <Loader visible={listOfCard?.userCardsLoading} />
      </View>
    </PaymentScreen>
  );
};

export default AddCardScreen;
