import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';

import {
  ItemSelectionHeader,
  DropOffTextInputWithKey,
  ListingShippingAddON,
} from '../../components';
import {style} from './styles';
import {hp} from '../../helper/constants';
import {strings} from '../../helper/strings';
import {useNavigation} from '@react-navigation/native';
import customBaskPress from '../../helper/backPressHandler';
import _ from 'lodash';

const SameDayDelivery = ({route}) => {
  const [sameDayDeliveryFee, setSameDayDeliveryFee] = useState('');

  const [isDeliverWithChia, setDeliverWithChia] = useState(true);

  const [isDeliverMySelf, setDeliverMySelf] = useState(false);

  const toggleSwitch = () => {
    setDeliverWithChia(!isDeliverWithChia);
    setDeliverMySelf(!isDeliverMySelf);
  };

  const {goBack, canGoBack} = useNavigation();

  useEffect(() => {
    if (!_.isEmpty(route?.params?.sameDayDeliveryDetails)) {
      setSameDayDeliveryFee(
        route?.params?.sameDayDeliveryDetails?.sameDayDeliveryFee,
      );
      if (route?.params?.sameDayDeliveryDetails?.deliverWith === 'MYSELF') {
        setDeliverWithChia(false);
        setDeliverMySelf(true);
      } else {
        setDeliverWithChia(true);
        setDeliverMySelf(false);
      }
    } else {
      setSameDayDeliveryFee('');
    }
  }, [route.params]);

  useEffect(() => {
    onSubmitEditing();
  }, [isDeliverMySelf, isDeliverWithChia, sameDayDeliveryFee]);

  const onSubmitEditing = () => {
    if (
      route?.params?.onValueSelect &&
      typeof route?.params?.onValueSelect === 'function'
    ) {
      let data = {
        sameDayDeliveryFee: sameDayDeliveryFee,
        deliverWith: isDeliverWithChia ? 'CHIA' : 'MYSELF',
      };
      route?.params?.onValueSelect(data);
    }
  };

  const handleBackButton = () => {
    if (sameDayDeliveryFee.length === 0) {
      Alert.alert('please enter same-day delivery fee');
    } else {
      if (canGoBack()) {
        goBack();
      }
    }
    return true;
  };

  //custom back button
  customBaskPress(handleBackButton);

  const onSameDayDeliveryFeeChange = text => setSameDayDeliveryFee(text);

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader
        title={'SAME-DAY DELIVERY'}
        goBack={handleBackButton}
      />
      <View style={style.requireMainView}>
        <Text style={[style.headerTextStyle, {marginBottom: hp(1.5)}]}>
          {'SAME DAY REQUIREMENTS'}
        </Text>
        <DropOffTextInputWithKey
          title={'Same-day delivery fee'}
          value={sameDayDeliveryFee}
          placeholder={'20'}
          onChangeText={onSameDayDeliveryFeeChange}
          onSubmitEditing={onSubmitEditing}
          hideSubTitle
          isPrefixAvailable
          prefixValue={'$'}
        />
        <Text style={style.textStyle}>Same-day delivery with</Text>
        <ListingShippingAddON
          title={strings.deliverWithChia}
          isTitleComponent
          value={isDeliverWithChia}
          onValueChange={toggleSwitch}
          mainTitleTextStyle={style.switchTitleTextStyle}
          containerStyle={style.switchContainerStyle}
        />
        <ListingShippingAddON
          title={strings.deliverMySelf}
          isTitleComponent
          value={isDeliverMySelf}
          onValueChange={toggleSwitch}
          mainTitleTextStyle={style.switchTitleTextStyle}
          containerStyle={style.switchContainerStyle}
        />
      </View>
    </View>
  );
};

export default SameDayDelivery;
