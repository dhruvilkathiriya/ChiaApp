import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ListingShippingAddON} from '../../components';
import {style} from './styles';

const SelectStandardShippingOption = ({route}) => {
  const [pickUp, setPickUp] = useState(false);
  const [dropOff, setDropOff] = useState(false);
  const [sameDayDelivery, setSameDayDelivery] = useState(false);
  const [standardShipping, setStandardShipping] = useState(true);

  const shippingOptions = route?.params?.shipping || {};
  const selectedShippingOption = route?.params?.selectedShippingOption || null;

  const {goBack} = useNavigation();

  useEffect(() => {
    if (selectedShippingOption === 'PICKUP') {
      setPickUp(true);
      setDropOff(false);
      setSameDayDelivery(false);
      setStandardShipping(false);
    } else if (selectedShippingOption === 'DROPOFF') {
      setPickUp(false);
      setDropOff(true);
      setSameDayDelivery(false);
      setStandardShipping(false);
    } else if (selectedShippingOption === 'SAMEDAYDELIVERY') {
      setPickUp(false);
      setDropOff(false);
      setSameDayDelivery(true);
      setStandardShipping(false);
    } else {
      setPickUp(false);
      setDropOff(false);
      setSameDayDelivery(false);
      setStandardShipping(true);
    }
  }, [selectedShippingOption]);

  useEffect(() => {
    const getSelectedValue = () => {
      if (pickUp) {
        return 'PICKUP';
      } else if (dropOff) {
        return 'DROPOFF';
      } else if (sameDayDelivery) {
        return 'SAMEDAYDELIVERY';
      } else if (standardShipping) {
        return 'STANDARD';
      } else {
        return 'select';
      }
    };
    if (
      route?.params?.onShippingSelect &&
      typeof route?.params?.onShippingSelect === 'function'
    ) {
      route?.params?.onShippingSelect(getSelectedValue());
    }
  }, [pickUp, dropOff, sameDayDelivery, standardShipping]);

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'SELECT SHIPPING OPTION'} goBack={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {shippingOptions?.pickupAvailable && (
          <>
            <ListingShippingAddON
              title={'PICK-UP (Free)'}
              isTitleComponent
              mainTitleTextStyle={style.switchTitleTextStyle}
              containerStyle={style.switchContainerStyle}
              value={pickUp}
              onValueChange={() => {
                setPickUp(!pickUp);
                setDropOff(false);
                setSameDayDelivery(false);
                setStandardShipping(false);
              }}
            />
            <View style={style.bottomTextContainerStyle}>
              <Text style={style.textStyle}>
                {`Lender pick up location within ${shippingOptions?.pickupLocations[0]?.postalCode}`}
              </Text>
            </View>
          </>
        )}

        {shippingOptions?.dropOffAvailable && (
          <>
            <ListingShippingAddON
              title={`DROP-OFF ($${shippingOptions?.dropOffFee})`}
              isTitleComponent
              mainTitleTextStyle={style.switchTitleTextStyle}
              containerStyle={style.switchContainerStyle}
              value={dropOff}
              onValueChange={() => {
                setPickUp(false);
                setDropOff(!dropOff);
                setSameDayDelivery(false);
                setStandardShipping(false);
              }}
            />
            <View style={style.bottomTextContainerStyle}>
              <Text style={style.textStyle}>
                Lender will arrange drop-off of item
              </Text>
            </View>
          </>
        )}

        {shippingOptions?.sameDayDeliveryAvailable && (
          <>
            <ListingShippingAddON
              title={`SAME-DAY ($${shippingOptions?.sameDayDeliveryFees})`}
              isTitleComponent
              mainTitleTextStyle={style.switchTitleTextStyle}
              containerStyle={style.switchContainerStyle}
              value={sameDayDelivery}
              onValueChange={() => {
                setSameDayDelivery(!sameDayDelivery);
                setPickUp(false);
                setDropOff(false);
                setStandardShipping(false);
              }}
            />
            <View style={style.bottomTextContainerStyle}>
              <Text style={style.textStyle}>
                Lender will arrange same day delivery
              </Text>
            </View>
          </>
        )}

        <ListingShippingAddON
          title={'STANDARD SHIPPING'}
          isTitleComponent
          mainTitleTextStyle={style.switchTitleTextStyle}
          containerStyle={style.switchContainerStyle}
          value={standardShipping}
          onValueChange={() => {
            setStandardShipping(!standardShipping);
            setPickUp(false);
            setDropOff(false);
            setSameDayDelivery(false);
          }}
        />
        <View style={style.bottomTextContainerStyle}>
          <Text style={style.textStyle}>Item will arrive by delivery date</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectStandardShippingOption;
