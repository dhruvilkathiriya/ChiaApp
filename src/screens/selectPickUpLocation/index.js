import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ItemSelectionHeader, ListingShippingAddON} from '../../components';
import {style} from './styles';

const SelectPickUpLocation = ({route}) => {
  const [shippingAddresses, setShippingAddresses] = useState([]);
  const [pickupAddresses, setPickupAddresses] = useState({});

  const {user} = useSelector(state => state.user);

  const {goBack, canGoBack, navigate} = useNavigation();

  const onItemPress = value => {
    if (
      route?.params?.onValueSelect &&
      typeof route?.params?.onValueSelect === 'function'
    ) {
      route?.params?.onValueSelect(value);
      if (canGoBack()) {
        goBack();
      }
    }
  };

  const renderItem = ({item}) => {
    return (
      <ListingShippingAddON
        title={item.line1 + ' ' + item?.line2 + ' ' + item.city}
        isTitleComponent
        containerStyle={{marginTop: 0}}
        name={item._id}
        value={pickupAddresses?._id === item._id}
        onValueChange={(value, name) => {
          setPickupAddresses(item);
          onItemPress(item);
        }}
        mainTitleTextStyle={style.addressTextStyle}
      />
    );
  };

  useEffect(() => {
    if (!_.isEmpty(route?.params?.pickUpLocations)) {
      setPickupAddresses(route?.params?.pickUpLocations);
    }
  }, []);

  useEffect(() => {
    const addresses = user?.addresses || [];
    if (addresses?.length > 0) {
      let shippingAddressList = _.filter(addresses || [], {
        type: 'shipping',
      });
      setShippingAddresses(shippingAddressList);
    }
  }, [user]);

  const onAddNewPickUpLocationPress = () => {
    navigate('AddAddress', {type: 'shipping'});
  };

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'Select Pickup Location'} goBack={goBack} />
      <KeyboardAwareScrollView bounces={false} nestedScrollEnabled>
        <FlatList
          data={shippingAddresses}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={item => item._id}
        />
        <TouchableOpacity onPress={onAddNewPickUpLocationPress}>
          <Text style={style.addBillingAddressTextStyle}>
            {'+Add new address'}
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SelectPickUpLocation;
