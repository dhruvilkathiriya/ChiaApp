import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';

import {
  ItemSelectionHeader,
  DropOffTextInputWithKey,
  ListingShippingAddON,
} from '../../components';
import {style} from './styles';
import customBaskPress from '../../helper/backPressHandler';
import _ from 'lodash';

const Pricing = ({route}) => {
  const {goBack, canGoBack} = useNavigation();
  const [originalRetailPrice, setOriginalRetailPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [rentalPeriodTwoDays, setRentalPeriodTwoDays] = useState({
    days: 2,
    pricePerDay: '',
  });
  const [rentalPeriodFiveDays, setRentalPeriodFiveDays] = useState({
    days: 5,
    pricePerDay: '',
  });
  const [rentalPeriodEightDays, setRentalPeriodEightDays] = useState({
    days: 8,
    pricePerDay: '',
  });
  const [isOfferInMessage, setOfferInMessage] = useState(false);
  const [isLongerThanEightDays, setLongerThanEightDays] = useState(false);

  const onOriginalRetailPriceChange = text => setOriginalRetailPrice(text);
  const onSellingPriceChange = text => setSellingPrice(text);
  const onRentalPeriodTwoDaysChange = text =>
    setRentalPeriodTwoDays({...rentalPeriodTwoDays, pricePerDay: text});
  const onRentalPeriodFiveDaysChange = text =>
    setRentalPeriodFiveDays({...rentalPeriodFiveDays, pricePerDay: text});
  const onRentalPeriodEightDaysChange = text =>
    setRentalPeriodEightDays({...rentalPeriodEightDays, pricePerDay: text});
  const toggleOfferInMessage = () => {
    setOfferInMessage(prevState => !prevState);
  };
  const toggleLongerThanEightDays = () => {
    setLongerThanEightDays(prevState => !prevState);
  };

  useEffect(() => {
    if (!_.isEmpty(route?.params?.pricingDetail)) {
      const productData = route?.params?.pricingDetail;
      setOriginalRetailPrice(productData?.originalPrice);
      setSellingPrice(productData?.sellingPrice);
      setOfferInMessage(productData?.offerInMessage);
      setLongerThanEightDays(productData?.longerThenEight);
      setRentalPeriodTwoDays(_.find(productData?.rentPricing, {days: 2}));
      setRentalPeriodFiveDays(_.find(productData?.rentPricing, {days: 5}));
      setRentalPeriodEightDays(_.find(productData?.rentPricing, {days: 8}));
    } else {
      setOriginalRetailPrice('');
      setSellingPrice('');
      setOfferInMessage(false);
      setLongerThanEightDays(false);
      setRentalPeriodTwoDays({
        days: 2,
        pricePerDay: '',
      });
      setRentalPeriodFiveDays({
        days: 5,
        pricePerDay: '',
      });
      setRentalPeriodEightDays({
        days: 8,
        pricePerDay: '',
      });
    }
  }, [route]);

  useEffect(() => {
    if (
      route?.params?.onValueSelect &&
      typeof route?.params?.onValueSelect === 'function'
    ) {
      let data = {
        rentPricing: [
          rentalPeriodTwoDays,
          rentalPeriodFiveDays,
          rentalPeriodEightDays,
        ],
        sellingPrice: sellingPrice,
        originalPrice: originalRetailPrice,
        offerInMessage: isOfferInMessage,
        longerThenEight: isLongerThanEightDays,
      };
      route?.params?.onValueSelect(data);
    }
  }, [
    rentalPeriodTwoDays,
    rentalPeriodFiveDays,
    rentalPeriodEightDays,
    originalRetailPrice,
    sellingPrice,
    isOfferInMessage,
    isLongerThanEightDays,
  ]);

  const handleBackButton = () => {
    if (originalRetailPrice.length === 0) {
      Alert.alert('please enter original retail price');
    } else if (sellingPrice.length === 0) {
      Alert.alert('please enter selling price');
    } else if (rentalPeriodTwoDays?.pricePerDay.length === 0) {
      Alert.alert(
        'please enter rental price for ' + rentalPeriodTwoDays?.days + ' Day',
      );
    } else if (rentalPeriodFiveDays?.pricePerDay.length === 0) {
      Alert.alert(
        'please enter rental price for ' + rentalPeriodFiveDays?.days + ' Day',
      );
    } else if (rentalPeriodEightDays?.pricePerDay.length === 0) {
      Alert.alert(
        'please enter rental price for ' + rentalPeriodEightDays?.days + ' Day',
      );
    } else {
      if (canGoBack()) {
        goBack();
      }
    }
    return true;
  };
  //custom back button
  customBaskPress(handleBackButton);

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'SELECT PRICING'} goBack={handleBackButton} />
      <View style={style.requireMainView}>
        <DropOffTextInputWithKey
          title={'Estimated Original Retail Price'}
          value={originalRetailPrice}
          placeholder={'2250'}
          hideSubTitle
          onChangeText={onOriginalRetailPriceChange}
          isPrefixAvailable
          prefixValue={'$'}
        />
        <DropOffTextInputWithKey
          title={'Your selling price'}
          value={sellingPrice}
          hideSubTitle
          placeholder={'1650'}
          onChangeText={onSellingPriceChange}
          isPrefixAvailable
          prefixValue={'$'}
        />
      </View>
      <ListingShippingAddON
        title={'Allow  offers on item'}
        mainTitleTextStyle={style.allowOffer}
        isTitleComponent
        value={isOfferInMessage}
        onValueChange={toggleOfferInMessage}
      />
      <View style={style.offerSent}>
        <Text style={style.textOffer}>{'Offers sent through messages'}</Text>
        <Text style={style.textRent}>{'RENTAL PRICING'}</Text>
      </View>
      <View style={style.offerSent}>
        <DropOffTextInputWithKey
          value={rentalPeriodTwoDays?.pricePerDay}
          title={'Rental price for 2 day period'}
          subTitle={'per day'}
          placeholder={'90'}
          onChangeText={onRentalPeriodTwoDaysChange}
          isPrefixAvailable
          prefixValue={'$'}
        />
        <DropOffTextInputWithKey
          value={rentalPeriodFiveDays?.pricePerDay}
          title={'Rental price for 5 day period'}
          subTitle={'per day'}
          placeholder={'85'}
          onChangeText={onRentalPeriodFiveDaysChange}
          isPrefixAvailable
          prefixValue={'$'}
        />
        <DropOffTextInputWithKey
          value={rentalPeriodEightDays?.pricePerDay}
          title={'Rental price for 8 day period'}
          subTitle={'per day'}
          placeholder={'65'}
          onChangeText={onRentalPeriodEightDaysChange}
          isPrefixAvailable
          prefixValue={'$'}
        />
      </View>
      <View style={style.viewLonger}>
        <ListingShippingAddON
          title={'Longer than 8 day rental period available '}
          mainTitleTextStyle={style.allowOffer}
          isTitleComponent
          value={isLongerThanEightDays}
          onValueChange={toggleLongerThanEightDays}
        />
      </View>
      <View style={style.offerSent}>
        <Text style={style.textOffer}>
          {'Renter will send you offer for length of time '}
        </Text>
      </View>
    </View>
  );
};

export default Pricing;
